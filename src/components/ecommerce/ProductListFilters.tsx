import { Text, View, Pressable } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

const ProductListFilters = ({ setFilter }: any) => {
  const handleToggleFilter = (filter: string) => {
    switch (filter) {
      case 'ratingAsc':
        setFilter((prevFilter: string) =>
          prevFilter === 'ratingAsc' ? 'ratingDesc' : 'ratingAsc',
        );
        break;
      case 'priceAsc':
        setFilter((prevFilter: string) =>
          prevFilter === 'priceAsc' ? 'priceDesc' : 'priceAsc',
        );
        break;
      case 'discountAsc':
        setFilter((prevFilter: string) =>
          prevFilter === 'discountAsc' ? 'discountDesc' : 'discountAsc',
        );
        break;
      case 'ratingDesc':
        setFilter((prevFilter: string) =>
          prevFilter === 'ratingDesc' ? 'ratingAsc' : 'ratingDesc',
        );
        break;
      case 'priceDesc':
        setFilter((prevFilter: string) =>
          prevFilter === 'priceDesc' ? 'priceAsc' : 'priceDesc',
        );
        break;
      case 'discountDesc':
        setFilter((prevFilter: string) =>
          prevFilter === 'discountDesc' ? 'discountAsc' : 'discountDesc',
        );
        break;
    }
  };
  return (
    <View style={styles.mainContainer}>
      <Pressable
        style={styles.filterContainer}
        onPress={() => handleToggleFilter('ratingAsc')}
      >
        <Text>⭐️ Rating</Text>
      </Pressable>
      <Pressable
        style={styles.filterContainer}
        onPress={() => handleToggleFilter('priceAsc')}
      >
        <Text>💲 Price</Text>
      </Pressable>
      <Pressable
        style={styles.filterContainer}
        onPress={() => handleToggleFilter('discountAsc')}
      >
        <Text>‼️ Discount</Text>
      </Pressable>
    </View>
  );
};

export default ProductListFilters;

const styles = StyleSheet.create(theme => ({
  mainContainer: {
    flex: 1,
    width: '90%',
    flexDirection: 'row',
    // backgroundColor: 'blue',
    justifyContent: 'space-around',
    gap: '10%',
  },
  filterContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    borderColor: 'black',
    borderWidth: 0.3,
    borderRadius: 20,
  },
}));
