export class Semaphore {
  constructor(max = 2) {
    this.max = max;
    this.active = 0;
    this.waiters = [];
  }
  acquire() {
    if (this.active < this.max) {
      this.active++;
      return Promise.resolve();
    }
    return new Promise(resolve => this.waiters.push(resolve));
  }
  release() {
    if (this.waiters.length > 0) {
      const next = this.waiters.shift();
      next();
    } else {
      this.active = Math.max(0, this.active - 1);
    }
  }
  async run(fn) {
    await this.acquire();
    try {
      return await fn();
    } finally {
      this.release();
    }
  }
}
