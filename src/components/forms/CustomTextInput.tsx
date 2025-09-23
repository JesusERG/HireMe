import { Text, TextInput, View } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native-unistyles';
import { Controller } from 'react-hook-form';

interface customTextInputProps {
  name: string;
  control: any;
  placeholder: string;
  rules: any;
  secureTextEntry: boolean;
}

const CustomTextInput = ({
  name,
  control,
  placeholder,
  rules = {},
  secureTextEntry = false,
}: customTextInputProps) => {
  return (
    <>
      <Controller
        control={control}
        rules={rules}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <>
            <View>
              <TextInput
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

const styles = StyleSheet.create({});
