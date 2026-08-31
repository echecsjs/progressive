import { describe, expect, it } from 'vitest';

import { progressiveCut2 } from '../cut2.js';

import type { CompletedRound, Player } from '@echecs/tournament';

const PLAYERS: Player[] = [
  { id: 'A', points: 2.5, rank: 1 },
  { id: 'B', points: 1.5, rank: 2 },
  { id: 'C', points: 1.5, rank: 3 },
  { id: 'D', points: 0.5, rank: 4 },
];

const ROUNDS: CompletedRound[] = [
  {
    byes: [],
    games: [
      { black: 'B', result: 'white', white: 'A' },
      { black: 'D', result: 'draw', white: 'C' },
    ],
  },
  {
    byes: [],
    games: [
      { black: 'C', result: 'draw', white: 'A' },
      { black: 'D', result: 'white', white: 'B' },
    ],
  },
  {
    byes: [],
    games: [
      { black: 'D', result: 'white', white: 'A' },
      { black: 'C', result: 'draw', white: 'B' },
    ],
  },
];

describe('progressiveCut2', () => {
  it('cuts the two lowest cumulative scores', () => {
    expect(progressiveCut2('A', ROUNDS, PLAYERS)).toBe(2.5);
  });

  it('handles a player with a zero first round', () => {
    expect(progressiveCut2('B', ROUNDS, PLAYERS)).toBe(1.5);
  });

  it('returns 0 for a player with fewer than three rounds', () => {
    expect(progressiveCut2('A', [ROUNDS[0] as CompletedRound], PLAYERS)).toBe(
      0,
    );
  });
});
