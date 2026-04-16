# TrustLayer v1 — Indexer Schema

This schema defines how indexers, explorers, dashboards, and OP_NET dApps should track TrustLayer events and worker profiles.

TrustLayer provides the trust backbone for the OP_NET ecosystem, enabling deterministic worker identity, reputation, attestations, and slashing.

---

# 🗄️ Tables

## workers
Tracks the full trust profile of each worker.

| field          | type   | description                         |
|----------------|--------|-------------------------------------|
| worker         | string | worker address                      |
| reputation     | number | 0–10000 trust score                 |
| slashed        | number | total penalties applied             |
| metadataHash   | string | optional metadata                   |
| tags           | array  | trust tags                          |
| createdAtBlock | number | block of registration               |

---

## attestations
Tracks all attestations made to workers.

| field          | type   | description                         |
|----------------|--------|-------------------------------------|
| id             | string | unique event id                     |
| worker         | string | worker address                      |
| score          | number | attestation score (0–100)           |
| newReputation  | number | updated reputation                  |
| blockNumber    | number | block number                        |
| txHash         | string | transaction hash                    |
| timestamp      | number | unix timestamp                      |

---

## tags
Tracks trust tags assigned to workers.

| field          | type   | description                         |
|----------------|--------|-------------------------------------|
| worker         | string | worker address                      |
| tag            | string | trust tag                           |
| blockNumber    | number | block number                        |
| txHash         | string | transaction hash                    |

---

## slashes
Tracks penalties applied to workers.

| field          | type   | description                         |
|----------------|--------|-------------------------------------|
| worker         | string | worker address                      |
| amount         | number | penalty amount                      |
| newReputation  | number | updated reputation                  |
| blockNumber    | number | block number                        |
| txHash         | string | transaction hash                    |

---

# 🔗 Usage

Indexers should:

- maintain a **worker trust profile**
- track **reputation evolution**
- track **tags** and **attestations**
- track **slashing history**
- expose APIs for dApps and explorers

TrustLayer is the **trust backbone** for OP_NET.
