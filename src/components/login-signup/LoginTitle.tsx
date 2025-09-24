import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

const LoginTitle = ({ type }: { type: string }) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Enter you {type} information</Text>
    </View>
  );
};

export default LoginTitle;

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: {
      xs: 22,
      md: 35,
      lg: 55,
    },
  },
});
