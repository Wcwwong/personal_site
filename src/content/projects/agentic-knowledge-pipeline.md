---
title: "Agentic Knowledge Pipeline"
summary: "A scheduled multi-agent pipeline that ingests, processes, and files research into a structured Obsidian vault, so every working session starts from facts instead of vibes."
status: active
stack:
  - multi-agent
  - obsidian
  - scheduling
featured: true
order: 2
---

A daily automated pipeline where AI agents with different roles cooperate to keep a
personal knowledge base alive: one gathers, one processes and files, one reviews.
Output lands in a structured Obsidian vault with consistent formats, links and
provenance.

## Why it exists

Chat sessions forget. Files don't. Anything worth keeping (a decision, a market note,
a lesson from a failed experiment) gets written into the vault in a durable, linkable
form. The pipeline automates the boring half of that discipline.

## Design notes

- **Vault and engine are separated.** The knowledge base is plain markdown that
  outlives any specific tool or model choice.
- **Fixed daily schedule with phased checkpoints**, so a failed run is diagnosable
  and a partial run can't corrupt the vault.
- **Different models for different jobs.** Cheap models handle bulk processing,
  stronger ones make the judgment calls. Same division-of-labor philosophy as the
  rest of my toolkit.
