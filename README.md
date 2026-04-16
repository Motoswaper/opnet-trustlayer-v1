<div align="center">

# 🛡️ TrustLayer v1  
### **Deterministic Worker Reputation & Attestation Protocol for OP_NET**

TrustLayer is the trust backbone of the OP_NET ecosystem.  
It provides deterministic, on‑chain identity, reputation, attestations, trust tags, and slashing for workers.

<br>

![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)
![OP_NET](https://img.shields.io/badge/Network-OP__NET-blue.svg)
![AssemblyScript](https://img.shields.io/badge/Language-AssemblyScript-purple.svg)

<br>

### 🔗 Quick Links

[📘 TrustLayer Docs](./docs/TRUSTLAYER.md) •  
[🧩 Indexer Schema](./docs/INDEXER_TRUSTLAYER.md)

<br><br>

</div>

---

# 🧬 Overview

**TrustLayer v1** is the official trust primitive for OP_NET.

It enables:

- deterministic worker identity  
- reputation scoring  
- attestations (0–100)  
- trust tags (AI_SAFE, AI_FAST, AI_VERIFIED, etc.)  
- slashing for malicious behavior  
- ecosystem‑wide trust integration  

TrustLayer is used by:

- **TrustlessAI** (AI job marketplace)  
- **OPSHOP** (P2P marketplace)  
- **MotoSettle** (settlement layer)  
- **Wallets & explorers**  
- **Indexers & dashboards**  

---

# 📂 Repository Structure
/contracts
└── TrustLayer.ts

/docs
├── TRUSTLAYER.md
└── INDEXER_TRUSTLAYER.md

README.md
LICENS

---

# 🧱 Core Features

## 🔵 Worker Registration
Workers register with metadata and receive a baseline reputation.

## 🟢 Attestations
Any entity can attest to a worker with a score (0–100).  
Reputation updates via deterministic moving average.

## 🟣 Trust Tags
Workers can receive capability tags:

- AI_SAFE  
- AI_FAST  
- AI_VERIFIED  
- HUMAN_REVIEWED  
- ZK_PROOFED (future)  

## 🔥 Slashing
Workers can be penalized for:

- invalid results  
- malicious behavior  
- violating protocol rules  

Slashing reduces reputation and records penalties.

---

# 🧩 Events

- `WorkerRegistered(worker, metadataHash)`  
- `TagAdded(worker, tag)`  
- `Attested(worker, score, newReputation)`  
- `Slashed(worker, amount, newReputation)`  

These events power dashboards, explorers, and trust visualizers.

---

# 📘 Documentation

- Full protocol spec: [`docs/TRUSTLAYER.md`](./docs/TRUSTLAYER.md)  
- Indexer schema: [`docs/INDEXER_TRUSTLAYER.md`](./docs/INDEXER_TRUSTLAYER.md)

---

# 📜 License

MIT — open and free for the OP_NET ecosystem.

---

<div align="center">

### Trust is a first‑class primitive in OP_NET  
**Deterministic. Transparent. Ecosystem‑wide.**

</div>


