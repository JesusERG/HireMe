import { StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';

const UserInfo = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>{t('userInformation')}</Text>
      <View>
        <Text>{t('username')} </Text>
      </View>
      <View>
        <Text>Email </Text>
      </View>
      <View>
        <Text>{t('password')} </Text>
      </View>
      <View>
        <Text>{t('changeProfilePicture')} </Text>
      </View>
    </View>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
