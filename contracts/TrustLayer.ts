// TrustLayer v1 — Worker Reputation + Attestation Protocol for OP_NET
// AssemblyScript (WASM) — deterministic, minimal, indexer‑friendly

@unmanaged
class WorkerProfile {
  reputation: u64;         // 0–10000
  slashed: u64;            // total slashed amount
  metadataHash: string;    // optional worker metadata
  tags: Array<string>;     // trust tags
}

export class TrustLayer {

  private static workers = new Map<Address, WorkerProfile>();

  // Register a worker with metadata
  static registerWorker(metadataHash: string): void {
    const worker = Context.sender();

    assert(!TrustLayer.workers.has(worker), "ALREADY_REGISTERED");

    const profile = new WorkerProfile();
    profile.reputation = 5000; // neutral baseline
    profile.slashed = 0;
    profile.metadataHash = metadataHash;
    profile.tags = new Array<string>();

    TrustLayer.workers.set(worker, profile);

    Events.emit("WorkerRegistered", [
      worker.toString(),
      metadataHash
    ]);
  }

  // Add a trust tag (e.g. AI_SAFE, AI_FAST, AI_VERIFIED)
  static addTag(worker: Address, tag: string): void {
    assert(TrustLayer.workers.has(worker), "NOT_REGISTERED");

    const profile = TrustLayer.workers.get(worker);
    assert(profile != null, "PROFILE_MISSING");

    profile.tags.push(tag);

    Events.emit("TagAdded", [
      worker.toString(),
      tag
    ]);
  }

  // Check if worker has a tag
  static hasTag(worker: Address, tag: string): bool {
    if (!TrustLayer.workers.has(worker)) return false;

    const profile = TrustLayer.workers.get(worker);
    if (profile == null) return false;

    for (let i = 0; i < profile.tags.length; i++) {
      if (profile.tags[i] == tag) return true;
    }
    return false;
  }

  // Attest to a worker (score 0–100)
  static attest(worker: Address, score: u64): void {
    assert(score <= 100, "INVALID_SCORE");
    assert(TrustLayer.workers.has(worker), "NOT_REGISTERED");

    const profile = TrustLayer.workers.get(worker);
    assert(profile != null, "PROFILE_MISSING");

    // Update reputation (simple moving average)
    profile.reputation = (profile.reputation + score * 100) / 2;

    Events.emit("Attested", [
      worker.toString(),
      score.toString(),
      profile.reputation.toString()
    ]);
  }

  // Slash a worker (reduces reputation + records slashed amount)
  static slash(worker: Address, amount: u64): void {
    assert(TrustLayer.workers.has(worker), "NOT_REGISTERED");

    const profile = TrustLayer.workers.get(worker);
    assert(profile != null, "PROFILE_MISSING");

    profile.slashed += amount;

    // Reputation penalty
    if (profile.reputation > amount) {
      profile.reputation -= amount;
    } else {
      profile.reputation = 0;
    }

    Events.emit("Slashed", [
      worker.toString(),
      amount.toString(),
      profile.reputation.toString()
    ]);
  }

  // Get reputation
  static reputation(worker: Address): u64 {
    if (!TrustLayer.workers.has(worker)) return 0;

    const profile = TrustLayer.workers.get(worker);
    if (profile == null) return 0;

    return profile.reputation;
  }
}
