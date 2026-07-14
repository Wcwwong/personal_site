---
title: "Prediction-Market Backtester"
summary: "Built a backtesting and paper-trading tool for Polymarket weather markets, ran a pre-registered experiment over ~170 paper trades, then killed the strategy when the data said no."
status: shelved
statusLabel: "SHELVED · BY DATA"
stack:
  - python
  - statistics
  - polymarket
featured: true
order: 3
---

A Python tool (standard library only) for backtesting and paper-trading strategies on
Polymarket's daily-high-temperature prediction markets across seven cities. It's the
project I'm proudest of, because it ended in a documented "no".

## The experiment

Before going live, I pre-registered a closing-line-value (CLV) experiment: if my
entries couldn't beat the market's closing prices on paper, no real money would ever
be deployed. Over ~170 verified paper trades, both candidate strategies showed
clearly negative CLV, and the deficit got worse as the sample grew. That points to a
structural disadvantage, not bad luck.

## Why it failed (the useful part)

- The forecast edge I was chasing was already owned by faster, high-volume bots.
- The second strategy had a negative payoff skew, many tiny wins against occasional
  full-stake losses, hidden under a miscalibrated confidence assumption.

## Outcome

Zero real money was ever placed. The scheduler was disabled, the result written up,
and the repo kept as a reusable backtesting template. Knowing exactly why something
doesn't work, before paying tuition to the market, was the actual return on this
project. The full story is in [the write-up](/blog/killing-my-own-strategy/).
