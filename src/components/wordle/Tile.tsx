import { StyleSheet, TextInput, View } from 'react-native';
import { useState } from 'react';

const Tile = ({
  solution,
  index,
  currentRow,
  row,
  setCurrentRow,
  guess,
  setGuess,
}: {
  solution: string;
  index: string;
  currentRow: number;
  row: number;
  setCurrentRow: React.Dispatch<React.SetStateAction<number>>;
  guess: number;
  setGuess: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [letter, setLetter] = useState<string>('');

  const handleInput = (text: string) => {
    if (text.trim() === '') return;
    setLetter(text);
    setGuess((prev: number) => prev + 1);
    if (guess === 4) {
      setCurrentRow(row + 1);
      setGuess(0);
    }
  };

  return (
    <View
      style={[
        currentRow === row && guess === Number(index)
          ? styles.active
          : letter
          ? solution.includes(letter)
            ? letter === solution[Number(index)]
              ? styles.correct
              : styles.maybe
            : styles.incorrect
          : styles.container,
      ]}
    >
      <TextInput
        style={styles.letter}
        maxLength={1}
        value={letter}
        onChangeText={text => {
          handleInput(text);
        }}
        editable={letter ? false : currentRow === row ? true : false}
      />
    </View>
  );
};

export default Tile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e3e3e3',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50,
    marginHorizontal: 2,
  },
  letter: {
    width: '100%',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  correct: {
    backgroundColor: 'green',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50,
    marginHorizontal: 2,
  },
  incorrect: {
    backgroundColor: 'red',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50,
    marginHorizontal: 2,
  },
  maybe: {
    backgroundColor: 'yellow',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50,
    marginHorizontal: 2,
  },
  default: {
    backgroundColor: '#e3e3e3',
  },
  active: {
    backgroundColor: '#fff',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50,
    marginHorizontal: 2,
  },
});
