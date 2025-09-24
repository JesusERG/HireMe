import { Text, View } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { StyleSheet } from 'react-native-unistyles';
import { RootStackParamList } from '../../utils/types/Types';
import { useTranslation } from 'react-i18next';

const SignUpSection = () => {
  const { t } = useTranslation();
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  return (
    <View style={styles.signInContainer}>
      <Text style={styles.text}>{t('noAccount')} </Text>
      <Text
        onPress={() => {
          navigation.navigate('SignUp');
        }}
        style={styles.textSignUp}
      >
        {t('signUp')}
      </Text>
    </View>
  );
};

export default SignUpSection;

const styles = StyleSheet.create(theme => ({
  signInContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  text: {
    fontSize: {
      xs: 15,
      md: 23,
      lg: 30,
    },
  },
  textSignUp: {
    fontSize: {
      xs: 15,
      md: 23,
      lg: 30,
    },
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
}));
