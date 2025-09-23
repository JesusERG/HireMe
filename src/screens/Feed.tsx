import { Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native-unistyles';

const Feed = () => {
  return (
    <SafeAreaView>
      <Text>Feed</Text>
      <Button title="Change" onPress={() => {}} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create(theme => ({
  container: {
    backgroundColor: theme.colors.background,
  },
}));

export default Feed;

// const styles = StyleSheet.create({});
