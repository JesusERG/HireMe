import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { useTranslation } from 'react-i18next';

const LoginTitle = ({ type }: { type: string }) => {
  const { t } = useTranslation();
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>
        {type === 'Login' ? t('loginTitle') : t('signUpTitle')}
      </Text>
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
