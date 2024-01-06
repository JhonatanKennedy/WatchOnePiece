import { type AsyncStorageStatic } from '@react-native-async-storage/async-storage';

export class Repository {
  constructor(private readonly AsyncStorage: AsyncStorageStatic) {}

  async loadingDataOnApp(): Promise<number[] | null> {
    try {
      const episodes = await this.AsyncStorage.getItem('episodes');

      if (!episodes) {
        await this.AsyncStorage.setItem('episodes', JSON.stringify([]));
        return [];
      }

      return JSON.parse(episodes);
    } catch (err) {
      console.error('Erro ao carregar os dados:', err);

      return null;
    }
  }

  async getAllWatchedEpisodes(): Promise<number[] | null> {
    try {
      const storedData = await this.AsyncStorage.getItem('episodes');
      if (!storedData) {
        return [];
      }
      return JSON.parse(storedData);
    } catch (err) {
      console.error('Erro ao carregar os dados:', err);
      return null;
    }
  }

  async resetAllEpisodes(): Promise<void> {
    await this.AsyncStorage.setItem('episodes', JSON.stringify([]));
  }
}
