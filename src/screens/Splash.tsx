import { Text, Button } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../utils/types/NavigationTypes';

const Splash = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  return (
    <SafeAreaView>
      <Text>Splash</Text>
      <Button
        title="Navigate"
        onPress={() => {
          navigation.navigate('Feed');
        }}
      />
    </SafeAreaView>
  );
};

export default Splash;

// const styles = StyleSheet.create({});
