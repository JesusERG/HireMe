import { Pressable, Text, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { useTranslation } from 'react-i18next';

const PaymentInfo = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>{t('paymentInformation')}</Text>
      <View>
        <Text>{t('cardNumber')}</Text>
      </View>
      <View>
        <Text>{t('cvv')} </Text>
      </View>
      <Pressable style={styles.button}>
        <Text>{t('expirationDate')}</Text>
      </Pressable>
    </View>
  );
};

export default PaymentInfo;

const styles = StyleSheet.create(theme => ({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: 10,
    borderRadius: 5,
  },
}));
