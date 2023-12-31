import { type AsyncStorageStatic } from '@react-native-async-storage/async-storage';

export class Repository {
  constructor(private readonly AsyncStorage: AsyncStorageStatic) {}

  async loadingDataOnApp() {
    try {
      const storedData = await this.AsyncStorage.getItem('episodes');

      if (!storedData) {
        await this.AsyncStorage.setItem('episodes', JSON.stringify([]));
      }
    } catch (err) {
      console.error('Erro ao carregar os dados:', err);
    }
  }

  async getAllWatchedEpisodes(): Promise<number[]> {
    const storedData = await this.AsyncStorage.getItem('episodes');
    if (storedData) {
      return JSON.parse(storedData);
    }
    return [];
  }

  async resetAllEpisodes(): Promise<void> {
    await this.AsyncStorage.setItem('episodes', JSON.stringify([]));
  }
}
