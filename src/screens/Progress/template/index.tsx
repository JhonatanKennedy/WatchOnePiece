import { texts } from '@resources/texts';
import { colors } from '@styles/paletteColors';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { progress } = texts;

export const TemplateProgress = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.resumeTitle}>{progress.resumeLabel}</Text>
      <View style={styles.resumeContainer}>
        <Text style={styles.infoText}>
          {progress.episodeActual}
          <Text style={styles.infoLabel}>550 - A volta dos que não foram</Text>
        </Text>
        <Text style={styles.infoText}>
          {progress.progressFull}
          <Text style={styles.infoLabel}>50%</Text>
        </Text>
        <Text style={styles.infoText}>
          {progress.progressCanonical}
          <Text style={styles.infoLabel}>60%</Text>
        </Text>
        <Text style={styles.infoText}>
          {progress.watchHours}
          <Text style={styles.infoLabel}>5330h</Text>
        </Text>
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
  resumeTitle: {
    color: colors.text.primary,
    fontSize: 18,
  },
  resumeContainer: {
    gap: 12,
    backgroundColor: colors.primary20,
    padding: 16,
    borderRadius: 8,
  },
  infoText: {
    color: colors.text.primary,
  },
  infoLabel: {
    fontWeight: 'bold',
  },
});
