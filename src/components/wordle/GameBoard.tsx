import { StyleSheet, Text, View } from 'react-native';
import Tile from './Tile';
// import Loading from '../../components/Loading';
// import Error from '../../screens/Error';
import { useEffect, useState } from 'react';
import { useGetFiveLetterWordsQuery } from '../../redux/slices/apis/wordleApiSlice';

const GameBoard = () => {
  const [currentRow, setCurrentRow] = useState(0);
  const [guess, setGuess] = useState<number>(0);
  const [solution, setSolution] = useState<string>('');

  const { data, error, isLoading } = useGetFiveLetterWordsQuery();

  useEffect(() => {
    if (data) setSolution(data[Math.floor(Math.random() * data.length)]);
  }, [data]);

  console.log('data:', data);
  console.log('solution:', solution);
  if (isLoading)
    return (
      <View style={styles.container}>
        {/* <Loading /> */}
        <Text>Loading...</Text>
      </View>
    );

  if (error)
    return (
      <View style={styles.container}>
        {/* <Error /> */}
        <Text>Error aaa</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      {Array(6)
        .fill('')
        .map((_, outerIndex) => (
          <View key={outerIndex} style={styles.boardContainer}>
            {Array(5)
              .fill('')
              .map((_, innerIndex) => (
                <Tile
                  key={outerIndex.toString() + innerIndex.toString()}
                  solution={solution}
                  index={innerIndex.toString()}
                  currentRow={currentRow}
                  row={outerIndex}
                  setCurrentRow={setCurrentRow}
                  setGuess={setGuess}
                  guess={guess}
                />
              ))}
          </View>
        ))}
    </View>
  );
};

export default GameBoard;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boardContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
});
