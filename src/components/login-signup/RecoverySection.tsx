import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { useTranslation } from 'react-i18next';

const RecoverySection = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.recoveryContainer}>
      <Text style={styles.text}>{t('rememberMe')}</Text>
      <Text style={styles.text}>{t('forgotPassword')}</Text>
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
