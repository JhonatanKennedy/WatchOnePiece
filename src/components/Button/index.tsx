import { colors } from '@styles/paletteColors';
import { type ReactNode } from 'react';
import { StyleSheet, type StyleProp, type ViewStyle } from 'react-native';
import { Button as ButtonPaper } from 'react-native-paper';

export type IButtonProps = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};

export const Button = (props: IButtonProps) => {
  return <ButtonPaper style={[styles.button, props.style]}>{props.children}</ButtonPaper>;
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.secondary,
    color: colors.primary,
    borderRadius: 8,
  },
});
