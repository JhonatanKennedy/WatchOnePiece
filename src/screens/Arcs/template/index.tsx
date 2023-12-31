import { Textfield } from '@components/Textfield';
import { VideoMiniature } from '@components/VideoMiniature';
import { type IArcType } from '@resources/arcInfo';
import { texts } from '@resources/texts';
import { colors } from '@styles/paletteColors';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { arcs } = texts;

export type ITemplateArcsProps = {
  searchValue: string;
  onChange: (value: string) => void;
  arcs: IArcType[];
  onSelectArc: (id: string) => void;
};

export const TemplateArcs = (props: ITemplateArcsProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Textfield
        value={props.searchValue}
        onChangeText={(value) => props.onChange(value)}
        placeholder={arcs.searchPlaceholder}
        right={
          <TextInput.Icon
            icon={() => <Ionicons name="search-outline" color={colors.text.primary} size={20} />}
          />
        }
      />

      <Text style={styles.arcListLabel}>{arcs.arcListLabel}</Text>

      <ScrollView>
        <View style={styles.arcsContainer}>
          {props.arcs.map((arc) => (
            <View style={styles.videoMiniatureContainer} key={arc.id}>
              <VideoMiniature
                image={arc.image}
                onPress={() => props.onSelectArc(arc.id)}
                title={`${arc.id} - ${arc.title}`}
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
  arcListLabel: {
    color: colors.text.primary,
    fontSize: 16,
  },
  arcsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  videoMiniatureContainer: {
    marginBottom: 8,
  },
});
