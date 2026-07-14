---
title: "My Obsidian + Claude knowledge pipeline, end to end"
description: "Chat sessions forget; files don't. How a scheduled multi-agent pipeline keeps my projects' memory alive, and why every repo I run mirrors the same idea."
pubDate: 2026-06-25
tags:
  - obsidian
  - ai-workflow
---

The weakest part of working with AI isn't intelligence. It's amnesia. Every chat
session starts from zero, and no model upgrade fixes that. What fixes it is treating
memory as infrastructure, which in my case means files.

## The vault

The center of the system is an Obsidian vault. Plain markdown, consistent formats,
internal links, and provenance on everything, meaning a note records where a fact
came from and when. Plain markdown matters more than it sounds. The vault has to
outlive any particular tool, model or subscription, and text files will still open
in thirty years.

## The pipeline

A scheduled pipeline runs every day and does the boring half of the discipline for
me. The design splits roles the same way my dev workflow does. One agent gathers raw
inputs. Another processes them into vault-formatted notes, filed and linked. A third
reviews the result before the run counts as done.

Different models get different jobs: cheap ones for bulk processing, stronger ones
for judgment calls. The run is broken into checkpoints, so a failure in the middle is
diagnosable and a partial run can't corrupt the vault. The engine is also kept
strictly separate from the vault itself. I can rebuild the pipeline from scratch
without touching a single note.

## The same idea, everywhere

Once you start seeing memory as infrastructure, every project looks the same. Each
repo I run carries its own memory files: what the project is, current status, every
settled decision with the reasoning behind it, and handoff notes between the AI that
builds and the AI that reviews.

The payoff compounds. Any session can be cold-started. A new chat, a newer model, a
different tool entirely, any of them can read the files and pick up where the last
one stopped, without relitigating decisions that were already settled. This website
was built exactly that way, and its repo shows it.

## If you build one

Three rules I'd keep even if I started over:

1. Checkpoint at milestones, not at the end. A decision that lives only in chat
   history is a decision you'll pay for twice.
2. Keep the knowledge separate from the machinery. Vault and engine, content and code.
3. Write down the why, not just the what. Future you doesn't need the conclusion so
   much as the reasoning behind it, because that's how you know when the conclusion
   stops applying.
