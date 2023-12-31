import { type IArcType, type IEpisodeType, type IEpisodeUnwatched } from '../type';

export class ListEpisodesUnwatchedService {
  listAllCanonical(list: IEpisodeType[], arcs: IArcType[]): IEpisodeUnwatched[] {
    const episodesList = [];

    for (const arc of arcs) {
      const { episodes, image } = arc;
      for (let i = episodes[0]; i <= episodes[episodes.length - 1]; i++) {
        episodesList.push({
          ...list[i],
          image,
        });
      }
    }

    // depois filtrar com quem nao foi assistido por agora vou só mostrar todos os canonicos

    return episodesList;
  }
}
