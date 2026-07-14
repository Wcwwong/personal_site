---
title: "Gates, shadows, and kill criteria: how a strategy earns real money"
description: "The evaluation ladder I run every trading idea through: read-only recon, pre-registered gates, shadow mode, capped pilots. The kill criteria get written first."
pubDate: 2026-07-14
tags:
  - trading
  - risk
  - process
---

The most useful question in trading automation isn't "does it work". It's "what
exactly would make me stop", asked before anything runs. Every idea I pursue climbs
the same ladder now, and most ideas are supposed to die on the way up.

## The ladder

**Step 1: read-only recon.** Before writing a bot, measure the opportunity using
public data and zero keys. No orders, no account, no risk. Most ideas die here,
cheaply. The opportunity turns out to be saturated, or the numbers only work in a
spreadsheet that assumes nobody else exists.

**Step 2: pre-registered gates.** Before seeing any results, write down the
thresholds that mean proceed and the ones that mean stop. This step has saved me the
most money so far. My [weather-market strategy](/projects/prediction-market-backtester/)
died right here, on paper, for zero dollars, because the pass line was drawn before I
had results to rationalize.

**Step 3: shadow mode.** The full system runs against live data with zero write
capability. It decides, simulates and reports, but physically cannot act. This is not
a backtest. The data is live, the timing is live, the competition is real. The point
is to find the gap between what the model promises and what the world does, while
being wrong still costs nothing. I have a project sitting in this stage right now.
I'm not naming it, because publishing an active edge is the same as donating it.

**Step 4: capped pilot.** Only after the gates pass does real money show up, and only
a small, fully losable amount, with hard caps enforced in code rather than in
intentions. Going live is a deliberate ritual, never a config default. My
[grid bot](/projects/spot-grid-trading-bot/) adds one more layer: its keys can't
withdraw funds even if everything else goes wrong.

**Step 5: scale, or kill.** The kill criteria were already written back at step 2. If
they trigger, the project ends, gets a written postmortem, and leaves reusable parts
behind for the next idea.

## Why bother

Because every step is aimed at one specific person: future me, holding a losing
position, looking for a reason to keep going. Pre-registration removes the wiggle
room. "Needs more data" stops working as an escape hatch when the required data was
specified up front.

None of this is original. It's the experimental method plus some deployment
engineering, pointed at money. But writing it down as a ladder changed what I build.
The recon script now comes before the trading bot, the kill criteria before the entry
logic, and the postmortem is a deliverable, not an apology.
