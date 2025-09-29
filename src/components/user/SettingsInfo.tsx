import { Pressable, StyleSheet, Text, View } from 'react-native';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';

const SettingsInfo = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>{t('settings')}</Text>
      <View>
        <Text>{t('language')} </Text>
      </View>
      <Pressable onPress={() => i18n.changeLanguage('es')}>
        <Text>{t('changeLanguage')} </Text>
      </Pressable>
    </View>
  );
};

export default SettingsInfo;

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
