---
title: "Spot Grid Trading Bot"
summary: "A Python grid-trading bot for spot markets, engineered safety-first: testnet before mainnet, a sign-only agent wallet, and a risk engine that can always say no."
status: active
stack:
  - python
  - hyperliquid
  - risk-engine
featured: true
order: 1
---

A spot grid bot for the Hyperliquid DEX, built around the constraint that matters
most in trading automation: the bot must not be able to hurt me more than I decided
in advance.

## Design decisions

- **Testnet first.** Every feature proves itself on testnet before it touches real
  markets. No exceptions, no "just this once".
- **Sign-only agent wallet.** The bot's key can place and cancel orders. It cannot
  withdraw. Even a full compromise of the bot caps the damage at bad trades rather
  than drained funds.
- **A standalone risk engine.** Order placement and risk limits are separate
  components. The strategy proposes, and the risk engine can veto: position caps,
  price-band checks, and a kill switch that flattens everything and stops.

## How it's being built

The same two-AI workflow as everything else I ship. Claude designs the architecture
and reviews every change; Codex writes the implementation in strictly scoped phases,
one clean commit each. The full spec was written, and argued over, before the first
line of code.
