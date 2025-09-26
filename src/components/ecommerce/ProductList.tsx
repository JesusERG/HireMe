import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

const ProductList = () => {
  return (
    <View>
      <Text>ProductList</Text>
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create(theme => ({
  listContainer: {
    padding: 10,
    backgroundColor: 'red',
  },
}));
