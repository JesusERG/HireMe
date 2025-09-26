import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../components/ecommerce/SearchBar';
import Carousel from '../components/ecommerce/Carousel';
import ProductList from '../components/ecommerce/ProductList';

const Ecomerce = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.searchBarContainer}>
        <SearchBar />
      </View>
      <View style={styles.carouselContainer}>
        <Carousel />
      </View>
      <View style={styles.productListContainer}>
        <ProductList />
      </View>
    </SafeAreaView>
  );
};

export default Ecomerce;

const styles = StyleSheet.create(theme => ({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
  },
  searchBarContainer: {
    flex: {
      xs: 0.5,
      md: 0.6,
      lg: 0.7,
    },
    width: '95%',
  },
  carouselContainer: { flex: 4, width: '95%' },
  productListContainer: { flex: 5 },
}));
