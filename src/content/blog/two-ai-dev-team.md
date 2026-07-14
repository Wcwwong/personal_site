---
title: "How I run a two-AI dev team: Codex builds, Claude reviews"
description: "Two AI models with separate jobs, strict scope, one commit per phase. How I ship working systems without being a traditional developer."
pubDate: 2026-07-06
tags:
  - ai-workflow
  - codex
  - claude
---

I'm not a traditional developer. I still ship working systems: trading bots, research
pipelines, the site you're reading. Most of the credit goes to a boring process built
around two AI models that do different jobs and are not allowed to do each other's.

## Who does what

Claude is the architect and reviewer. It plans the system, writes the spec, and
reviews every change after Codex makes it. It never writes the production code it
will later review.

Codex is the builder. It gets one tightly scoped prompt at a time, turns it into
working code, and runs its own checks before reporting back.

The third member isn't a model. It's the repo. Specs, decisions and status live in
markdown files under version control, not in anyone's chat history.

Why two models instead of one? Same reason human teams do code review. The author is
the worst-placed person to spot their own mistakes. Two models trained differently
have different blind spots, so when one hallucinates, the other usually notices.

## The rules

**Strict scoping.** Every build prompt says some version of "do X and only X, don't
jump ahead". Skip this and an eager model will happily build three phases in one go,
after which nothing is properly reviewable.

**One commit per phase.** The git history is the project story. Each phase lands as
a single commit that can be read top to bottom. Review notes and handoff prompts go
in as separate docs commits.

**Independent verification.** When the builder says "build passes", the reviewer runs
the build anyway, reads the diff, and greps for rule violations before the commit
counts as accepted.

**File-based handoffs.** Specs travel in one file, completion reports in another,
both committed. If either model gets replaced by something newer next year, the
workflow survives, because the state lives in files.

## Does it actually catch anything?

Yes, in both directions. While building this site, my review spec claimed a route
list added up to seven pages. It was six. Codex flagged my arithmetic instead of
inventing a seventh page to match the spec. In the other direction, Codex once worked
around a framework bug with a small module shim, and review meant actually reading
the shim to confirm it loaded the real library instead of quietly replacing it.

Small catches, both of them. That's what a process is for. It turns "trust me" into
"check me", and the checks cost minutes.

## The caveat

None of this removes judgment. Someone still decides what to build, what "done"
means, and when the answer is no. That someone is still me. The models just shrink
the distance between deciding and shipping.
