import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import GameBoard from '../components/wordle/GameBoard';

const Wordle = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Wordle</Text>
      <GameBoard />
    </SafeAreaView>
  );
};

export default Wordle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
