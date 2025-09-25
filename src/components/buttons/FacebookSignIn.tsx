import { Pressable, Text, Image, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { useTranslation } from 'react-i18next';

const FacebookSignIn = ({ handler }: { handler: any }) => {
  const { t } = useTranslation();
  return (
    <Pressable style={styles.buttonContainerPrimary} onPress={handler}>
      <View style={styles.facebookLogoContainer}>
        <Image
          style={styles.facebookLogo}
          source={require('../../assets/imgs/FacebookLogo.webp')}
        />
      </View>
      <View style={styles.facebookTextContainer}>
        <Text style={[styles.buttonTextPrimary]}>{t('facebookLogin')}</Text>
      </View>
    </Pressable>
  );
};

export default FacebookSignIn;

const styles = StyleSheet.create(theme => ({
  buttonContainerPrimary: {
    backgroundColor: theme.colors.facebookBlue,
    padding: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    minWidth: 100,
    maxHeight: 80,
    flexDirection: 'row',
  },

  buttonTextPrimary: {
    textAlign: 'left',
    color: theme.colors.white,
    fontSize: {
      xs: 20,
      md: 25,
      lg: 30,
    },
  },

  facebookLogo: {
    width: {
      xs: 50,
      md: 60,
      lg: 70,
    },
    height: {
      xs: 50,
      md: 60,
      lg: 70,
    },
  },
  facebookLogoContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  facebookTextContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
}));
