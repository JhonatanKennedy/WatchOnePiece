import { type IArcType, type IEpisodeType, type IEpisodeCompleteType } from '../type';

export class ListEpisodesUnwatchedService {
  listAllCanonical(list: IEpisodeType[], arcs: IArcType[]): IEpisodeCompleteType[] {
    const episodesList = [];

    for (const arc of arcs) {
      const { episodes, image } = arc;
      for (let i = episodes[0]; i <= episodes[episodes.length - 1]; i++) {
        episodesList.push({
          ...list[i],
          title: `${list[i].number} - ${list[i].title}`,
          image,
        });
      }
    }

    return episodesList;
  }
}
