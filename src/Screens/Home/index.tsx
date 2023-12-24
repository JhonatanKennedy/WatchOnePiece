import { ResizeMode, Video } from 'expo-av';
import { Button, StyleSheet, View } from 'react-native';

const url = 'https://lightspeedst.net/s2/mp4/one-piece/sd/820.mp4';

export const Home = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Video
        volume={0}
        source={{ uri: url }}
        useNativeControls
        isLooping
        resizeMode={ResizeMode.CONTAIN}
        style={{ width: 300, height: 200 }}
      />
      <Button title="teste" />
    </View>
  );
};

const colors = {
  primary: '#20242a',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
});

// vai começar com o ultimo assistido
// vai ter um scroll pro lado dos ultimos assistido
// vai ter busca
// vai ter pagina de progresso junto com os arcos
// tentar salvar onde o video parou
// pagina sobre mim
