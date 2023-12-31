import AsyncStorage from '@react-native-async-storage/async-storage';
import { Repository } from './repository';
import { ListEpisodesUnwatchedService } from './services/listEpisodesUnwatched';
import { arcs } from './repository/arcInfo';
import { episodes } from './repository/episodes';

export class MainEpisodes {
  constructor(private readonly repository: Repository = new Repository(AsyncStorage)) {}

  async loadingDataOnPhone() {
    await this.repository.loadingDataOnApp();
  }

  listAllCanonical() {
    const services = new ListEpisodesUnwatchedService();
    return services.listAllCanonical(episodes, arcs);
  }
}
