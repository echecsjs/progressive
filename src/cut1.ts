import { playerResult } from './utilities.js';

import type { Tiebreak } from '@echecs/tournament';

const progressiveCut1: Tiebreak = (player, rounds, _players) => {
  let cumulative = 0;
  let total = 0;
  for (const round of rounds.slice(1)) {
    cumulative += playerResult(player, round.games);
    total += cumulative;
  }
  return total;
};

export { progressiveCut1, progressiveCut1 as tiebreak };

export type {
  Bye,
  CompletedRound,
  Game,
  Pairing,
  Player,
} from '@echecs/tournament';
