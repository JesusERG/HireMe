import { Pressable, Text } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native-unistyles';

const PrimaryButton = ({
  title,
  handler,
  type,
}: {
  title: string;
  handler: any;
  type: string;
}) => {
  return (
    <Pressable
      style={[
        type === 'primary'
          ? styles.buttonContainerPrimary
          : styles.buttonContainerSecondary,
      ]}
      onPress={handler}
    >
      <Text style={[styles.buttonTextPrimary]}>{title}</Text>
    </Pressable>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create(theme => ({
  buttonContainerPrimary: {
    backgroundColor: theme.colors.primary,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    // maxWidth: 700,
    minWidth: 100,
    maxHeight: 80,
  },
  buttonContainerSecondary: {
    backgroundColor: theme.colors.secondary,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    // maxWidth: 700,
    minWidth: 100,
  },
  buttonTextPrimary: {
    color: theme.colors.white,
    fontSize: {
      xs: 20,
      md: 25,
      lg: 35,
    },
  },
}));
