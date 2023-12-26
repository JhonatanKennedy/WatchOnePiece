import { TextInput } from 'react-native-paper';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Textfield } from '@components/Textfield';
import { colors } from '@styles/paletteColors';
import { VideoPlayer } from '@components/VideoPlayer';
import { VideoMiniature } from '@components/VideoMiniature';

export type ITemplateHomeProps = {
  searchValue: string;
  onChange: (value: string) => void;
};

export const TemplateHome = (props: ITemplateHomeProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Textfield
        value={props.searchValue}
        onChangeText={(value) => props.onChange(value)}
        placeholder="Pesquise por número do episódio"
        right={
          <TextInput.Icon
            icon={() => <Ionicons name="search-outline" color={colors.text.primary} size={20} />}
          />
        }
      />
      <VideoPlayer url="https://lightspeedst.net/s2/mp4/one-piece/sd/820.mp4" volume={0.5} />
      <ScrollView horizontal>
        <VideoMiniature
          onPress={() => console.log('clickei')}
          title="1 - Eu sou Luffy! O homem que será o Rei dos Piratas!"
        />
        <VideoMiniature
          onPress={() => console.log('clickei')}
          title="1 - Eu sou Luffy! O homem que será o Rei dos Piratas!"
        />
        <VideoMiniature
          onPress={() => console.log('clickei')}
          title="1 - Eu sou Luffy! O homem que será o Rei dos Piratas!"
        />
        <VideoMiniature
          onPress={() => console.log('clickei')}
          title="1 - Eu sou Luffy! O homem que será o Rei dos Piratas!"
        />
        <VideoMiniature
          onPress={() => console.log('clickei')}
          title="1 - Eu sou Luffy! O homem que será o Rei dos Piratas!"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingHorizontal: 12,
  },
});
