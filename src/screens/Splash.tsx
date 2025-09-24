import { useNavigation, NavigationProp } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../utils/types/Types';
import { useEffect } from 'react';
import { StyleSheet } from 'react-native-unistyles';
import Logo from '../components/Logo';

const Splash = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 1800);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Logo size="medium" />
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create(theme => ({
  mainContainer: { flex: 1, backgroundColor: theme.colors.background },
}));
