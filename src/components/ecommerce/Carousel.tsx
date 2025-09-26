import { Text, View, FlatList, Image } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import {
  useGetCategoriesQuery,
  useGetProductsQuery,
} from '../../redux/slices/apis/ecommerceApiSlice';

const Carousel = () => {
  const {
    data: categories,
    isLoading: categoriesLoading,
    error: categoriesError,
  } = useGetCategoriesQuery();
  const {
    data: products,
    isLoading: productsLoading,
    error: productsError,
  } = useGetProductsQuery();

  console.log('categories:', categories);
  console.log('products:', products);

  if (categoriesLoading || productsLoading) return <Text>Loading...</Text>;
  if (categoriesError || productsError) return <Text>Error</Text>;

  return (
    <View style={styles.carouselContainer}>
      <FlatList
        data={products.products}
        renderItem={({ item, index }) => (
          <>
            <Image
              style={styles.carouselImage}
              source={{ uri: item.images[0] }}
            />
          </>
        )}
        keyExtractor={item => String(item.id)}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Carousel;
const styles = StyleSheet.create(theme => ({
  carouselContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: 'red',
  },
  carouselImage: {
    height: '100%',
    width: undefined,
    aspectRatio: 1,
  },
}));
