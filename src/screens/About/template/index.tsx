import { colors } from '@styles/paletteColors';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const TemplateAbout = () => {
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
