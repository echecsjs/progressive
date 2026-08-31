import { playerResult } from './utilities.js';

import type { Tiebreak } from '@echecs/tournament';

const progressiveCut2: Tiebreak = (player, rounds, _players) => {
  const cumulativeScores: number[] = [];
  let cumulative = 0;
  for (const round of rounds) {
    cumulative += playerResult(player, round.games);
    cumulativeScores.push(cumulative);
  }
  const sorted = cumulativeScores.toSorted((a, b) => a - b);
  return sorted.slice(2).reduce((sum, value) => sum + value, 0);
};

export { progressiveCut2, progressiveCut2 as tiebreak };

export type {
  Bye,
  CompletedRound,
  Game,
  Pairing,
  Player,
} from '@echecs/tournament';
