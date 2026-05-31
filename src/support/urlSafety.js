import dns from "node:dns/promises";

const PRIVATE_RANGES = [
  /^127\./,
  /^10\./,
  /^192\.168\./,
  /^172\.(1[6-9]|2\d|3[01])\./,
  /^169\.254\./,
  /^::1$/,
  /^fc00:/i,
  /^fe80:/i,
];

export async function validatePublicHttpUrl(rawUrl) {
  const url = new URL(rawUrl);
  if (!["http:", "https:"].includes(url.protocol)) {
    throw new Error("Only http and https URLs are allowed.");
  }
  
  const host = url.hostname.toLowerCase();
  
  // Limpiar corchetes de IPv6 si existen para la resolución/validación
  const hostname = host.replace(/^\[|\]$/g, "");

  // Si es un host local simple bloqueado directamente
  const blockedNames = ["localhost", "0.0.0.0"];
  if (blockedNames.includes(hostname)) {
    throw new Error("Local and private URLs are blocked for safety.");
  }

  let addresses = [];
  try {
    const results = await dns.lookup(hostname, { all: true, family: 0 });
    addresses = results.map(r => r.address);
  } catch (error) {
    throw new Error(`Could not resolve hostname: ${hostname}`);
  }

  for (const addr of addresses) {
    if (PRIVATE_RANGES.some(re => re.test(addr))) {
      throw new Error(`Local and private URLs are blocked for safety.`);
    }
  }

  return url.toString();
}

