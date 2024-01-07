import AsyncStorage from '@react-native-async-storage/async-storage';
import { Repository } from './repository';
import { ListEpisodesUnwatchedService } from './services/listEpisodesUnwatched';
import { arcs } from './repository/arcInfo';
import { episodes } from './repository/episodes';
import { type IEpisodeCompleteType } from './type';

export class MainEpisodes {
  constructor(private readonly repository: Repository = new Repository(AsyncStorage)) {}

  episodes: IEpisodeCompleteType[] = [];

  async loadingDataOnPhone() {
    await this.repository.loadingDataOnApp();
  }

  listAllCanonical() {
    const services = new ListEpisodesUnwatchedService();
    this.episodes = services.listAllCanonical(episodes, arcs);
  }

  async getWatchedEpisodes() {
    const response = await this.repository.getAllWatchedEpisodes();
    if (!response) {
      return [];
    }
    return response;
  }

  async setWatchedEpisode(watchedList: number[]) {
    await this.repository.setWatchedEpisode(watchedList);
  }

  async resetWatchedEpisodes() {
    await this.repository.resetAllEpisodes();
  }
}
