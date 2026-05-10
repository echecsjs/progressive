import { describe, expect, it } from 'vitest';

import { progressiveCut1 } from '../cut1.js';
import { progressive } from '../index.js';

import type { CompletedRound, Player } from '@echecs/tournament';

const PLAYERS: Player[] = [
  { id: 'A', points: 2.5, rank: 1 },
  { id: 'B', points: 1, rank: 3 },
  { id: 'C', points: 0, rank: 4 },
  { id: 'D', points: 2.5, rank: 2 },
];

const ROUNDS: CompletedRound[] = [
  {
    byes: [],
    games: [
      { black: 'B', result: 'white', white: 'A' },
      { black: 'D', result: 'black', white: 'C' },
    ],
  },
  {
    byes: [],
    games: [
      { black: 'D', result: 'draw', white: 'A' },
      { black: 'B', result: 'black', white: 'C' },
    ],
  },
  {
    byes: [],
    games: [
      { black: 'C', result: 'white', white: 'A' },
      { black: 'B', result: 'white', white: 'D' },
    ],
  },
];

describe('progressive', () => {
  it('returns sum of cumulative scores after each round', () => {
    expect(progressive('A', ROUNDS, PLAYERS)).toBe(5);
  });

  it('handles player with no games', () => {
    expect(progressive('A', [], PLAYERS)).toBe(0);
  });
});

describe('progressiveCut1', () => {
  it('sums cumulative scores from round 2 onwards', () => {
    expect(progressiveCut1('A', ROUNDS, PLAYERS)).toBe(2);
  });

  it('handles player with no games', () => {
    expect(progressiveCut1('A', [], PLAYERS)).toBe(0);
  });
});
