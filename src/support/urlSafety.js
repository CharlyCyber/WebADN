// @ts-check
import dns from "node:dns/promises";
import net from "node:net";

function ipv4ToLong(ip) {
  const parts = ip.split(".").map(Number);
  if (parts.length !== 4 || parts.some(p => Number.isNaN(p) || p < 0 || p > 255)) return null;
  return ((parts[0] << 24) >>> 0) + (parts[1] << 16) + (parts[2] << 8) + parts[3];
}

function isPrivateIPv4(ip) {
  const long = ipv4ToLong(ip);
  if (long === null) return true;
  const ranges = [
    ["0.0.0.0", "0.255.255.255"],
    ["10.0.0.0", "10.255.255.255"],
    ["100.64.0.0", "100.127.255.255"],
    ["127.0.0.0", "127.255.255.255"],
    ["169.254.0.0", "169.254.255.255"],
    ["172.16.0.0", "172.31.255.255"],
    ["192.0.0.0", "192.0.0.255"],
    ["192.0.2.0", "192.0.2.255"],
    ["192.168.0.0", "192.168.255.255"],
    ["198.18.0.0", "198.19.255.255"],
    ["198.51.100.0", "198.51.100.255"],
    ["203.0.113.0", "203.0.113.255"],
    ["224.0.0.0", "255.255.255.255"],
  ];
  return ranges.some(([s, e]) => long >= ipv4ToLong(s) && long <= ipv4ToLong(e));
}

function isPrivateIPv6(ip) {
  const addr = ip.toLowerCase().replace(/^\[|\]$/g, "");
  const mapped = addr.match(/^::ffff:(\d+\.\d+\.\d+\.\d+)$/);
  if (mapped) return isPrivateIPv4(mapped[1]);
  if (addr === "::1" || addr === "::") return true;
  if (addr.startsWith("fc") || addr.startsWith("fd")) return true;
  if (addr.startsWith("fe80")) return true;
  if (addr.startsWith("ff")) return true;
  if (addr.startsWith("::ffff:")) return true;
  return false;
}

export function isPrivateAddress(ip) {
  if (net.isIPv4(ip)) return isPrivateIPv4(ip);
  if (net.isIPv6(ip)) return isPrivateIPv6(ip);
  return true;
}

const hostCache = new Map();
const HOST_TTL_MS = 60_000;

export async function isHostPublic(hostname) {
  const key = (hostname || "").toLowerCase().replace(/^\[|\]$/g, "");
  if (["localhost", "0.0.0.0", "ip6-localhost", ""].includes(key)) return false;
  if (net.isIP(key)) return !isPrivateAddress(key);

  const cached = hostCache.get(key);
  if (cached && cached.expires > Date.now()) return cached.public;

  let pub = false;
  try {
    const results = await dns.lookup(key, { all: true, family: 0 });
    pub = results.length > 0 && results.every(r => !isPrivateAddress(r.address));
  } catch {
    pub = false;
  }
  hostCache.set(key, { public: pub, expires: Date.now() + HOST_TTL_MS });
  return pub;
}

export async function validatePublicHttpUrl(rawUrl) {
  let url;
  try {
    url = new URL(rawUrl);
  } catch {
    throw new Error("Invalid URL.");
  }
  if (!["http:", "https:"].includes(url.protocol)) {
    throw new Error("Only http and https URLs are allowed.");
  }
  if (!(await isHostPublic(url.hostname))) {
    throw new Error("Local and private URLs are blocked for safety.");
  }
  return url.toString();
}
