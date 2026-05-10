import type { CompletedRound, Game } from '@echecs/tournament';

function gamesForPlayer(player: string, rounds: CompletedRound[]): Game[] {
  return rounds
    .flatMap((r) => r.games)
    .filter((g) => g.white === player || g.black === player);
}

function scoreFor(player: string, game: Game): number {
  if (game.result === 'draw') {
    return 0.5;
  }
  if (game.result === 'none') {
    return 0;
  }
  return (game.result === 'white' && game.white === player) ||
    (game.result === 'black' && game.black === player)
    ? 1
    : 0;
}

function playerResult(player: string, round: Game[]): number {
  for (const g of round) {
    if (g.white === player || g.black === player) {
      return scoreFor(player, g);
    }
  }
  return 0;
}

export { gamesForPlayer, playerResult, scoreFor };
