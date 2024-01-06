import { TextInput } from 'react-native-paper';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Textfield } from '@components/Textfield';
import { colors } from '@styles/paletteColors';
import { VideoMiniature } from '@components/VideoMiniature';
import { texts } from '@resources/texts';
import { type IEpisodeCompleteType } from '@domain/episodes/type';
import { useState } from 'react';
const { home } = texts;

export type ITemplateHomeProps = {
  onSearch: (value: string) => void;
  allEpisodes: IEpisodeCompleteType[];
  nextEpisodes: IEpisodeCompleteType[];
  onChooseEpisode: (episode: IEpisodeCompleteType) => void;
};

export const TemplateHome = (props: ITemplateHomeProps) => {
  const [searchValue, setSearchValue] = useState<string>('');

  return (
    <SafeAreaView style={styles.container}>
      <Textfield
        value={searchValue}
        onChangeText={(value) => {
          setSearchValue(value);
          props.onSearch(value);
        }}
        placeholder={home.searchPlaceholder}
        right={
          <TextInput.Icon
            icon={() => <Ionicons name="search-outline" color={colors.text.primary} size={20} />}
          />
        }
      />

      <Text style={styles.lastWatchTitle}>{home.lastWatchedLabel}</Text>

      <View>
        <FlatList
          data={props.nextEpisodes}
          keyExtractor={(episode) => `episode top - ${episode.number}`}
          renderItem={({ item }) => (
            <View style={{ marginHorizontal: 4 }}>
              <VideoMiniature
                title={item.title}
                image={item.image}
                onPress={() => props.onChooseEpisode(item)}
              />
            </View>
          )}
          horizontal={true}
        />
      </View>
      <Text style={styles.episodesTitle}>{home.episodesLabel}</Text>
      <FlatList
        data={props.allEpisodes}
        keyExtractor={(episode) => `episode - ${episode.number}`}
        renderItem={({ item }) => (
          <View style={{ margin: 4 }}>
            <VideoMiniature
              title={item.title}
              image={item.image}
              onPress={() => props.onChooseEpisode(item)}
            />
          </View>
        )}
        numColumns={3}
        contentContainerStyle={{ marginHorizontal: 2 }}
      />
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
  episodesTitle: {
    color: colors.text.primary,
    fontSize: 16,
  },
});
