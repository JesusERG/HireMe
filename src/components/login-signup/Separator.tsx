import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { useTranslation } from 'react-i18next';

const Separator = () => {
  const { t } = useTranslation();
  return (
    <>
      <View style={styles.separator} />
      <Text style={styles.text}> {t('or')} </Text>
      <View style={styles.separator} />
    </>
  );
};

export default Separator;

const styles = StyleSheet.create({
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    flex: 1,
  },
  text: {
    fontSize: {
      xs: 15,
      md: 23,
      lg: 30,
    },
  },
});
