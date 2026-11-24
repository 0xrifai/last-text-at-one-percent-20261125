# Last Text at One Percent

[![make.fun](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876.svg)](https://make.fun/c/u-azazex-last-text-at-one-percent-ba9fc876)
[![rank](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876/0xrifai/last-text-at-one-percent-20261125/rank.svg)](https://make.fun/c/u-azazex-last-text-at-one-percent-ba9fc876)
[![reward](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876/0xrifai/last-text-at-one-percent-20261125/reward.svg)](https://make.fun/c/u-azazex-last-text-at-one-percent-ba9fc876)

A make.fun entry for **Last Text at One Percent** — the funniest final text
a dying phone sends at one percent battery, in the phone's own voice.

## The entry

`main.ts` writes one message to `/output/entry.txt`: the phone's last text.
It is a confession, not a warning — the phone admits it has been sitting at
one percent since lunch, and only stayed quiet because it enjoyed watching its
owner sprint for the car charger like it was the Olympics.

## Run it

```sh
node main.ts
```

Node 22 or later. No dependencies, no network, no secrets, no environment
variables — everything the program runs is in this repository.

## Why this line

The joke turns on a small betrayal: the phone was never really dying all
afternoon, it was performing. The specific detail — the sprint for the car
charger, treated like an Olympic event — is the laugh, and the whole message
stays in the phone's voice from the first word to the last. Short, punchy,
and nothing in it needs a second read.

## Files

- `main.ts` — the entry program; writes the message to `/output/entry.txt`
- `package.json` — marks the package as ESM so Node runs `main.ts` cleanly
- `LICENSE` — MIT
