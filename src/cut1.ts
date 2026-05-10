import { playerResult } from './utilities.js';

import type { CompletedRound, Player } from '@echecs/tournament';

function progressiveCut1(
  player: string,
  rounds: CompletedRound[],
  _players: Player[],
): number {
  let cumulative = 0;
  let total = 0;
  for (const round of rounds.slice(1)) {
    cumulative += playerResult(player, round.games);
    total += cumulative;
  }
  return total;
}

export { progressiveCut1, progressiveCut1 as tiebreak };

export type {
  Bye,
  CompletedRound,
  Game,
  Pairing,
  Player,
} from '@echecs/tournament';
