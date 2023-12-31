import { colors } from '@styles/paletteColors';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const TemplateSettings = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>assa</Text>
      </View>
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
});

//possiveis opções
//ver todos episodios
//ver apenas episódios canonicos
//apos passar episódio permitir o autoplay automatico
//volume do video padrão
