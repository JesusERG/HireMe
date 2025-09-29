import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native-unistyles';
import { useState } from 'react';
import UserInfo from '../components/user/UserInfo';
import PaymentInfo from '../components/user/PaymentInfo';
import SettingsInfo from '../components/user/SettingsInfo';
import ModalUser from '../components/user/ModalUser';
import { useTranslation } from 'react-i18next';
import UserTopContainer from '../components/user/UserTopContainer';

const User = () => {
  const { t } = useTranslation();
  const [modalVisible, setModalVisible] = useState<[boolean, string]>([
    false,
    '',
  ]);

  const handleDelete = () => {
    console.log('User deleted ✅');
    setModalVisible([false, '']);
  };
  return (
    <SafeAreaView edges={['top']} style={styles.mainContainer}>
      <View style={styles.userSectionContainer}>
        <View style={styles.informationContainer}>
          <UserTopContainer />
        </View>
        <View style={styles.optionsContainer}>
          <Pressable
            style={styles.option}
            onPress={() => setModalVisible([true, 'user'])}
          >
            <Text style={styles.optionText}>👤 {t('user')}</Text>
          </Pressable>
          <Pressable
            style={styles.option}
            onPress={() => setModalVisible([true, 'payment'])}
          >
            <Text style={styles.optionText}>💳 {t('payment')}</Text>
          </Pressable>
          <Pressable
            style={styles.option}
            onPress={() => setModalVisible([true, 'settings'])}
          >
            <Text style={styles.optionText}>⚙ {t('settings')}</Text>
          </Pressable>
          <Pressable style={styles.option}>
            <Text style={styles.optionText}>🚪 {t('logout')}</Text>
          </Pressable>
        </View>
      </View>
      <ModalUser
        visible={modalVisible[0]}
        content={
          modalVisible[1] === 'user' ? (
            <UserInfo />
          ) : modalVisible[1] === 'payment' ? (
            <PaymentInfo />
          ) : (
            modalVisible[1] === 'settings' && <SettingsInfo />
          )
        }
        onConfirm={handleDelete}
        onCancel={() => setModalVisible([false, ''])}
      />
    </SafeAreaView>
  );
};

export default User;

const styles = StyleSheet.create(theme => ({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  userSectionContainer: {
    flex: 1,
  },
  informationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionsContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.secondary,
    gap: 10,
  },
  option: {
    height: '15%',
    width: '80%',
    padding: 10,
    justifyContent: 'center',
    zIndex: 10,
    backgroundColor: theme.colors.tertiary,
  },
  optionText: {
    fontSize: 30,
  },
}));
