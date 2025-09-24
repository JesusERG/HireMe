import { Text, View } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { StyleSheet } from 'react-native-unistyles';
import { RootStackParamList } from '../../utils/types/Types';

const AlreadyHaveAnAccount = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={styles.signInContainer}>
      <Text style={styles.text}>Already have an account account? </Text>
      <Text
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.textSignUp}
      >
        Sign in Here
      </Text>
    </View>
  );
};

export default AlreadyHaveAnAccount;

const styles = StyleSheet.create(theme => ({
  signInContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  text: {
    fontSize: {
      xs: 12,
      md: 18,
      lg: 25,
    },
  },
  textSignUp: {
    fontSize: {
      xs: 12,
      md: 18,
      lg: 25,
    },
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
}));
