import { colors } from '@styles/paletteColors';
import { type ReactNode } from 'react';
import {
  StyleSheet,
  type StyleProp,
  type ViewStyle,
  type GestureResponderEvent,
} from 'react-native';
import { Button as ButtonPaper } from 'react-native-paper';

export type IButtonProps = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  onPress?: (e: GestureResponderEvent) => void;
  disabled?: boolean;
};

export const Button = (props: IButtonProps) => {
  return (
    <ButtonPaper
      onPress={props.onPress}
      style={[styles.button, props.style]}
      disabled={props.disabled}
    >
      {props.children}
    </ButtonPaper>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.secondary,
    color: colors.primary,
    borderRadius: 8,
  },
});
