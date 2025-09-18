import { Text, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../utils/types/NavigationTypes';
import { useEffect } from 'react';

const Splash = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();

  useEffect(() => {
    // setTimeout(() => {
    //   navigation.navigate('Feed');
    // }, 5000);
  });
  return (
    <SafeAreaView>
      <Text style={styles.textLogo}>Jesus.It.Dev</Text>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  textLogo: {
    fontSize: 50,
    fontFamily: 'Azeret Mono',
  },
});
