import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

const RecoverySection = () => {
  return (
    <View style={styles.recoveryContainer}>
      <Text style={styles.text}>Remember Me</Text>
      <Text style={styles.text}>Forgot your password?</Text>
    </View>
  );
};

export default RecoverySection;

const styles = StyleSheet.create({
  recoveryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: {
      xs: 15,
      md: 17,
      lg: 20,
    },
  },
});
