# Progressive

[![npm](https://img.shields.io/npm/v/@echecs/progressive)](https://www.npmjs.com/package/@echecs/progressive)
[![Test](https://github.com/mormubis/progressive/actions/workflows/test.yml/badge.svg)](https://github.com/mormubis/progressive/actions/workflows/test.yml)
[![Coverage](https://codecov.io/gh/mormubis/progressive/branch/main/graph/badge.svg)](https://codecov.io/gh/mormubis/progressive)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

**Progressive** is a TypeScript library implementing the Progressive Score
tiebreak for chess tournaments, following the
[FIDE Tiebreak Regulations](https://handbook.fide.com/chapter/TieBreakRegulations032026)
(section 7.5). Zero runtime dependencies.

## Installation

```bash
npm install @echecs/progressive
```

## Quick Start

```typescript
import { progressive } from '@echecs/progressive';

const games = [
  { blackId: 'B', result: 1, round: 1, whiteId: 'A' }, // A wins → running: 1
  { blackId: 'C', result: 0.5, round: 2, whiteId: 'A' }, // draw → running: 1.5
  { blackId: 'A', result: 0, round: 3, whiteId: 'D' }, // A loses → running: 1.5
];

const score = progressive('A', games);
// 1 + 1.5 + 1.5 = 4
```

## API

All functions accept `(playerId: string, games: Game[])` and return `number`.
They are drop-in compatible with the shared `Tiebreak` type
`(playerId: string, games: Game[], players: Player[]) => number`.

### `progressive(playerId, games)`

**FIDE section 7.5** — Progressive score. Accumulates the player's running score
after each round, then sums all those running totals. Games are sorted by round
number before accumulating. A player who scores 1, 0.5, 1 across three rounds
produces a progressive score of `1 + 1.5 + 2.5 = 5`.

### `progressiveCut1(playerId, games)`

**FIDE section 7.5** — Progressive score excluding the first round. Computes the
progressive score starting from round 2, skipping the first round's result
entirely. Returns `0` when no games have been played.

## Contributing

Contributions are welcome. Please open an issue at
[github.com/mormubis/progressive/issues](https://github.com/mormubis/progressive/issues).
