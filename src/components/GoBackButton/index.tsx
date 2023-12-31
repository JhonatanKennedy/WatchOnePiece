import { colors } from '@styles/paletteColors';
import { type GestureResponderEvent, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

type IGoBackButtonProps = {
  onPress: (event: GestureResponderEvent) => void;
};

export const GoBackButton = (props: IGoBackButtonProps) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={{ marginLeft: 15 }}>
      <Text>
        <Ionicons name="arrow-back-outline" size={24} color={colors.text.primary} />
      </Text>
    </TouchableOpacity>
  );
};
