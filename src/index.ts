import { gamesForPlayer } from './utilities.js';

import type { Game } from './types.js';

function progressive(playerId: string, games: Game[]): number {
  const sorted = gamesForPlayer(playerId, games).toSorted(
    (a, b) => a.round - b.round,
  );
  let cumulative = 0;
  let total = 0;
  for (const g of sorted) {
    cumulative += g.whiteId === playerId ? g.result : 1 - g.result;
    total += cumulative;
  }
  return total;
}

function progressiveCut1(playerId: string, games: Game[]): number {
  const sorted = gamesForPlayer(playerId, games).toSorted(
    (a, b) => a.round - b.round,
  );
  if (sorted.length === 0) {
    return 0;
  }
  // Recalculate cumulative starting from round 2 (skip first round entirely)
  let cum = 0;
  let total = 0;
  for (const g of sorted.slice(1)) {
    cum += g.whiteId === playerId ? g.result : 1 - g.result;
    total += cum;
  }
  return total;
}

export { progressive, progressiveCut1 };

export type { Game, Player, Result } from './types.js';
