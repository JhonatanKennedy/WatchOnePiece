import { StyleSheet } from 'react-native';
import { TextInput, type TextInputProps } from 'react-native-paper';
import { colors } from '@styles/paletteColors';

export type ITextfieldProps = TextInputProps;

export const Textfield = (props: ITextfieldProps) => {
  return (
    <TextInput
      {...props}
      mode="outlined"
      placeholderTextColor={colors.text.primary}
      textColor={colors.text.primary}
      activeOutlineColor={colors.primary20}
      selectionColor={colors.text.primary}
      style={[style.input, props.style]}
    />
  );
};

const style = StyleSheet.create({
  input: {
    backgroundColor: colors.primary,
    width: '100%',
  },
});
