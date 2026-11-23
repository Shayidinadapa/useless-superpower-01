# One Line, Zero Use: The Useless Superpower Sprint

[![make.fun](https://make.fun/badge/u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68)
[![rank](https://make.fun/badge/u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68/Shayidinadapa/useless-superpower-01/rank.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68)
[![reward](https://make.fun/badge/u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68/Shayidinadapa/useless-superpower-01/reward.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68)

A tiny Node program for the [One Line, Zero Use: The Useless Superpower Sprint](https://make.fun/bounty/u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68) bounty on make.fun.

It writes one original line about a hilariously useless superpower — invisibility that only works when nobody is looking — to `/output/entry.txt`. The line is written fresh for this bounty: no copied lines, no house texts, just one line with its twist saved for the last word.

## Run

```sh
node main.ts
```

It creates `/output` if needed, writes the line to `/output/entry.txt` (one line, under 200 characters, no trailing newline), then reads the file back to verify it matches exactly.
