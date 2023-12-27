import { TextInput } from 'react-native-paper';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Textfield } from '@components/Textfield';
import { colors } from '@styles/paletteColors';
import { VideoMiniature } from '@components/VideoMiniature';
import { texts } from '@resources/texts';
import { arcs } from '@resources/arcImages';

const { home } = texts;

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
        placeholder={home.searchPlaceholder}
        right={
          <TextInput.Icon
            icon={() => <Ionicons name="search-outline" color={colors.text.primary} size={20} />}
          />
        }
      />

      <Text style={styles.lastWatchTitle}>{home.lastWatchedLabel}</Text>

      <ScrollView horizontal style={styles.scrollViewContainer}>
        <View style={styles.lastWatchedContainer}>
          <VideoMiniature
            image={arcs[0].image}
            onPress={() => console.log('clickei')}
            title="1 - Eu sou Luffy! O homem que será o Rei dos Piratas!"
          />
          <VideoMiniature
            image={arcs[0].image}
            onPress={() => console.log('clickei')}
            title="1 - Eu sou Luffy! O homem que será o Rei dos Piratas!"
          />
          <VideoMiniature
            image={arcs[0].image}
            onPress={() => console.log('clickei')}
            title="1 - Eu sou Luffy! O homem que será o Rei dos Piratas!"
          />
          <VideoMiniature
            image={arcs[0].image}
            onPress={() => console.log('clickei')}
            title="1 - Eu sou Luffy! O homem que será o Rei dos Piratas!"
          />
          <VideoMiniature
            image={arcs[0].image}
            onPress={() => console.log('clickei')}
            title="1 - Eu sou Luffy! O homem que será o Rei dos Piratas!"
          />
        </View>
      </ScrollView>

      <Text style={styles.episodesTitle}>{home.episodesLabel}</Text>

      <ScrollView>
        <View style={styles.episodesContainer}>
          {new Array(20).fill(1).map((_, index) => (
            <View style={styles.videoMiniatureContainer} key={index}>
              <VideoMiniature
                image={arcs[0].image}
                onPress={() => console.log('clickei')}
                title={`${index + 1} - Eu sou Luffy! O homem que será o Rei dos Piratas!`}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingHorizontal: 12,
    gap: 12,
  },
  lastWatchTitle: {
    color: colors.text.primary,
    fontSize: 16,
  },
  scrollViewContainer: {
    maxHeight: 100,
  },
  lastWatchedContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
  },
  episodesTitle: {
    color: colors.text.primary,
    fontSize: 16,
  },
  episodesContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  videoMiniatureContainer: {
    marginBottom: 8,
  },
});
