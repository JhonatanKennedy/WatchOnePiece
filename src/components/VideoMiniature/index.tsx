import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { images } from '@resources/arcImages';
import { colors } from '@styles/paletteColors';

export type IVideoMiniatureProps = {
  onPress: () => void;
  title: string;
};

export const VideoMiniature = (props: IVideoMiniatureProps) => {
  return (
    <View style={style.container}>
      <TouchableOpacity onPress={props.onPress}>
        <View style={style.imgContainer}>
          <Image source={images.arc1} style={style.img} />
        </View>
        <Text numberOfLines={1} style={style.title}>
          {props.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: 130,
    height: 100,
    borderColor: 'green',
    borderWidth: 2,
    // border: '1px solid green',
    // resizeMode: 'cover',
  },
  imgContainer: {
    width: '100%',
    height: '80%',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  title: {
    color: colors.text.primary,
  },
});
