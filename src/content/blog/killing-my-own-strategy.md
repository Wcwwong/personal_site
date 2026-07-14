---
title: "Killing my own strategy: what a negative result taught me"
description: "I built a backtester for Polymarket weather markets, pre-registered an experiment, ran ~170 paper trades, and shut the strategy down when the data came back negative."
pubDate: 2026-06-18
tags:
  - postmortem
  - data
  - trading
---

Last month I shut down a trading project I'd spent weeks building. Nothing broke. The
tool worked well enough to prove its own strategy didn't, which is exactly what I
built it for. It's still the result I'm proudest of, and I want to explain why.

## The setup

Polymarket runs daily prediction markets on the high temperature in various cities.
My thesis was that public weather forecasts might price these markets better than the
crowd does. I wrote a backtesting and paper-trading tool in plain Python to find out.

The decision that mattered came before any trading: I pre-registered the experiment.
The metric was closing line value, CLV for short. Do my paper entries beat the
market's closing prices? The rule was written down in advance. Negative CLV at a
meaningful sample size kills the strategy, no renegotiation, and no real money until
the experiment passes.

## The result

Roughly 170 verified paper trades later, both candidate strategies were negative.
Worse, the deficit widened as the sample grew. That pattern matters, because variance
shrinks with sample size and a structural disadvantage doesn't. This was structural.

The autopsy was straightforward. The forecast edge I wanted was already owned by
faster bots with more volume; by the time I acted, the price had moved. And the
second strategy had a payoff shape I'd misjudged: lots of small wins, occasional
full-stake losses, with the "confident" entries nowhere near as safe as I'd assumed.

## Why the rules mattered

Every rule in that experiment was aimed at one specific person: me, three weeks in,
wanting to keep going. Without pre-registration, a negative result becomes "needs
more data". Without the paper-only rule, the market charges tuition in real money.
With both rules in place, the decision made itself. Scheduler off, write-up filed,
repo archived as a template for the next idea.

## What I kept

A tested backtesting framework I'll reuse. Proof, mostly to myself, that I can set a
kill criterion and honor it. And a cheap lesson in market microstructure: knowing who
owns an edge matters more than spotting a signal.

Total real-money losses: zero. A strategy that dies on paper costs nothing. Most
expensive lessons are just experiments that weren't designed to be allowed to fail.
