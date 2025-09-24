import { Pressable, Text, Image, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

const GoogleSignIn = ({ handler }: { handler: any }) => {
  return (
    <Pressable style={styles.buttonContainerPrimary} onPress={handler}>
      <View style={styles.googleLogoContainer}>
        <Image
          style={styles.googleLogo}
          source={require('../../assets/imgs/GoogleLogo.png')}
        />
      </View>
      <View style={styles.googleTextContainer}>
        <Text style={[styles.buttonTextPrimary]}>Google Sign In</Text>
      </View>
    </Pressable>
  );
};

export default GoogleSignIn;

const styles = StyleSheet.create(theme => ({
  buttonContainerPrimary: {
    backgroundColor: theme.colors.white,
    padding: 5,
    borderRadius: 10,

    justifyContent: 'center',
    alignItems: 'center',

    flex: 1,
    // maxWidth: 700,
    minWidth: 100,
    maxHeight: 80,
    borderColor: theme.colors.onSurface,
    borderWidth: 1,
    flexDirection: 'row',
  },

  buttonTextPrimary: {
    textAlign: 'left',
    color: theme.colors.black,
    fontSize: {
      xs: 20,
      md: 25,
      lg: 30,
    },
  },

  googleLogo: {
    width: {
      xs: 30,
      md: 40,
      lg: 50,
    },
    height: {
      xs: 30,
      md: 40,
      lg: 50,
    },
  },
  googleLogoContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  googleTextContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
}));
