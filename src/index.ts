import { playerResult } from './utilities.js';

import type { Tiebreak } from '@echecs/tournament';

const progressive: Tiebreak = (player, rounds, _players) => {
  let cumulative = 0;
  let total = 0;
  for (const round of rounds) {
    cumulative += playerResult(player, round.games);
    total += cumulative;
  }
  return total;
};

export { progressive, progressive as tiebreak };

export type {
  Bye,
  CompletedRound,
  Game,
  Pairing,
  Player,
} from '@echecs/tournament';
