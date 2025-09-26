import { TextInput, Text, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

const SearchBar = () => {
  return (
    <View style={styles.searchBarContainer}>
      <>
        <Text> 🔍</Text>
        <TextInput style={styles.searchBar} placeholder="Search" />
      </>
      <Text>🎙️</Text>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create(theme => ({
  searchBarContainer: {
    padding: '3%',
    backgroundColor: theme.colors.primary,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchBar: {
    fontSize: {
      xs: 15,
      md: 17,
      lg: 20,
    },
    width: '90%',
  },
}));
