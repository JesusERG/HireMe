import { Text, TextInput, View } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native-unistyles';
import { Controller } from 'react-hook-form';

interface customTextInputProps {
  name: string;
  control: any;
  placeholder: string;
  secureTextEntry: boolean;
}

const CustomTextInput = ({
  name,
  control,
  placeholder,
  secureTextEntry = false,
}: customTextInputProps) => {
  return (
    <>
      <Controller
        control={control}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder={placeholder}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry={secureTextEntry}
              />
            </View>

            {error && <Text>{error.message}</Text>}
          </>
        )}
        name={name}
      />
    </>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create(theme => ({
  textInputContainer: {
    flexDirection: 'row',
    minWidth: 200,
    height: {
      xs: 45,
      md: 55,
      lg: 70,
    },
    // maxWidth: 700,
  },
  textInput: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: theme.colors.secondaryFixed,
    flex: 1,
  },
}));
