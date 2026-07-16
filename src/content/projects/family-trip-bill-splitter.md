---
title: "Family Trip Bill Splitter"
summary: "A Gemini-powered Google Apps Script that reads receipt photos and quick notes, converts every expense to one currency using historical FX rates, and works out the fewest payments needed to settle up."
status: active
stack:
  - google-apps-script
  - gemini-api
  - fx-conversion
featured: false
order: 4
---

A small tool built for one problem: a family trip generates a pile of receipts in
different currencies, and nobody wants to reconcile it by hand afterward. Whoever
pays for something forwards a photo or types a one-line note like `hotel 4500` into
a shared Google Form. Everything else happens automatically.

## How it works

A Gemini call reads each photo or note and extracts amount, currency, category, and
merchant as structured data. If it can't read an amount with confidence, the row gets
flagged `NEEDS REVIEW` instead of a guessed number going into the total silently.

Every expense converts to one base currency using the historical exchange rate on the
expense's own date, not the rate on the day someone reconciles the trip weeks later.
Rates are cached, since a historical rate never changes once published.

At the end, a greedy debtor/creditor match computes the smallest possible number of
payments to settle everyone up, rather than the more common approach where four
people each end up paying each other separately.

## Design choices worth naming

- **Flag, don't guess.** Any extraction the model isn't confident about gets a visible
  flag and a manual check, the same instinct behind the risk engine in the
  [grid bot](/projects/spot-grid-trading-bot/) and the kill criteria in the
  [backtester](/projects/prediction-market-backtester/).
- **Everything stays in one Google account.** No third-party app, no external hosting,
  no bank or card data anywhere in the system, since the only inputs are receipt
  photos and free-text notes.
- **The spreadsheet tab is the source of truth**, not the code. Adding or removing a
  family member is a row edit, not a script change.

It's a smaller project than the trading systems, and a different model provider on
purpose. Structured extraction from a photo is a different shape of problem than
market data, and Gemini was simply the better fit for it: the point of the toolkit
isn't loyalty to one vendor, it's picking whichever tool actually fits the job.
