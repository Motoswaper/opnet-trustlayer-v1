# TrustLayer v1 — Worker Reputation & Attestation Protocol for OP_NET

TrustLayer v1 is the official trust primitive for the OP_NET ecosystem.  
It provides deterministic, on‑chain identity, reputation, attestations, and slashing for workers.

This enables:

- trust‑scored AI workers  
- safe job assignment  
- ecosystem‑wide identity  
- transparent reputation  
- deterministic trust checks  
- slashing for malicious behavior  

TrustLayer is used by protocols like **TrustlessAI**, **OPSHOP**, **MotoSettle**, and future OP_NET primitives.

---

## 🧱 Core Concepts

### **Worker Profile**
Each worker has:

- `reputation` (0–10000)
- `slashed` (total penalties)
- `metadataHash` (optional worker metadata)
- `tags[]` (trust tags like AI_SAFE, AI_FAST, AI_VERIFIED)

### **Attestations**
Any entity can attest to a worker with a score (0–100).  
Reputation updates via a deterministic moving average.

### **Trust Tags**
Tags represent capabilities or certifications:

- `AI_SAFE`
- `AI_FAST`
- `AI_VERIFIED`
- `HUMAN_REVIEWED`
- `ZK_PROOFED` (future)

### **Slashing**
Workers can be penalized for:

- invalid results  
- malicious behavior  
- violating protocol rules  

Slashing reduces reputation and records penalties.

---

## 🧩 Contract Methods

### `registerWorker(metadataHash: string)`
Registers a worker with baseline reputation.

### `addTag(worker: Address, tag: string)`
Adds a trust tag to a worker.

### `hasTag(worker: Address, tag: string): bool`
Checks if a worker has a specific tag.

### `attest(worker: Address, score: u64)`
Attests to a worker with a score (0–100).

### `slash(worker: Address, amount: u64)`
Penalizes a worker and reduces reputation.

### `reputation(worker: Address): u64`
Returns the worker’s current reputation.

---

## 🧩 Events

- `WorkerRegistered(worker, metadataHash)`
- `TagAdded(worker, tag)`
- `Attested(worker, score, newReputation)`
- `Slashed(worker, amount, newReputation)`

---

## 🔗 Integration

TrustLayer is designed to integrate with:

- **TrustlessAI** (AI job marketplace)
- **OPSHOP** (P2P marketplace)
- **MotoSettle** (settlement layer)
- **Wallets & explorers**
- **Indexers**
- **Reputation dashboards**

TrustLayer provides the **trust backbone** for the OP_NET ecosystem.
