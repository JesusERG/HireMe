import { Text, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';

const Feed = () => {
  const { theme } = useSelector(state => state.theme);

  console.log('theme: ', theme);

  return (
    <SafeAreaView>
      <Text>Feed</Text>
      <Button title="Change" onPress={() => {}} />
    </SafeAreaView>
  );
};

export default Feed;

// const styles = StyleSheet.create({});
