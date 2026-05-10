import { playerResult } from './utilities.js';

import type { CompletedRound, Player } from '@echecs/tournament';

function progressive(
  player: string,
  rounds: CompletedRound[],
  _players: Player[],
): number {
  let cumulative = 0;
  let total = 0;
  for (const round of rounds) {
    cumulative += playerResult(player, round.games);
    total += cumulative;
  }
  return total;
}

export { progressive, progressive as tiebreak };

export type {
  Bye,
  CompletedRound,
  Game,
  Pairing,
  Player,
} from '@echecs/tournament';
