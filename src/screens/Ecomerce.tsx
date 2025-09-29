import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../components/ecommerce/SearchBar';
import CarouselSection from '../components/ecommerce/CarouselSection';
import Category from '../components/ecommerce/Category';
import ProductList from '../components/ecommerce/ProductList';
import ProductListFilters from '../components/ecommerce/ProductListFilters';
import { useGetProductsQuery } from '../redux/slices/apis/ecommerceApiSlice';
import { Product } from '../utils/types/Types';

import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from 'react-native-reanimated';

// This is the default configuration
configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false, // Reanimated runs in strict mode by default
});

const Ecomerce = () => {
  const [userSearch, setUserSearch] = useState<string>('');
  const [filter, setFilter] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [productList, setProductList] = useState<Product[]>([]);
  const [filteredList, setFilteredList] = useState<Product[]>([]);

  const {
    data: products,
    isLoading,
    error,
  } = useGetProductsQuery(undefined, {});

  useEffect(() => {
    if (products) {
      setProductList(products.products);
      setFilteredList(products.products);
    }
  }, [products]);

  //Search filter
  useEffect(() => {
    if (userSearch) {
      // setProductList(filteredList);
      setFilteredList(
        productList.filter((item: any) =>
          item.title.toLowerCase().includes(userSearch.toLowerCase()),
        ),
      );
    }
  }, [userSearch]);

  //Category
  useEffect(() => {
    if (category !== '') {
      setFilteredList(
        productList.filter((item: any) =>
          item.category.toLowerCase().includes(category.toLowerCase()),
        ),
      );
    }
  }, [category]);

  //Filter
  useEffect(() => {
    if (filter !== '') {
      // setProductList(filteredList);
      // switch (filter) {
      //   case 'rating':
      //     const sortedList = products.products.sort(
      //       (a: Product, b: Product) => a.rating - b.rating,
      //     );
      //     // setFilteredList(sortedList);
      //     break;
      //   case 'price':
      //     setFilteredList(
      //       products.products.sort(
      //         (a: Product, b: Product) => a.price - b.price,
      //       ),
      //     );
      //     break;
      //   case 'discount':
      //     setFilteredList(
      //       products.products.sort(
      //         (a: Product, b: Product) =>
      //           a.discountPercentage - b.discountPercentage,
      //       ),
      //     );
      //     break;

      //   default:
      //     break;
      // }
      console.log('entreeeeee');

      let sortedList = [...productList].sort((a: Product, b: Product) => {
        switch (filter) {
          case 'ratingDesc':
            return b.rating - a.rating;
          case 'ratingAsc':
            return a.rating - b.rating;
          case 'priceDesc':
            return b.price - a.price;
          case 'priceAsc':
            return a.price - b.price;
          case 'discountDesc':
            return b.discountPercentage - a.discountPercentage;
          case 'discountAsc':
            return a.discountPercentage - b.discountPercentage;
          default:
            return 0;
        }
      });
      console.log('saliiiii');
      console.log('sortedList:', sortedList);
      setFilteredList(sortedList);
    }
  }, [filter]);

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error</Text>;

  console.log('userSearch:', userSearch);
  console.log('silter:', filter);
  console.log('category:', category);

  const dataToRender =
    userSearch || category || filter ? filteredList : products.products;

  console.log('dataToRender:', dataToRender);

  return (
    <SafeAreaView edges={['top']} style={styles.mainContainer}>
      <View style={styles.searchBarContainer}>
        <SearchBar userSearch={userSearch} setUserSearch={setUserSearch} />
      </View>
      <View style={styles.carouselContainer}>
        <CarouselSection />
      </View>
      <View style={styles.categoryContainer}>
        <Category setCategory={setCategory} />
      </View>
      <View style={styles.listFilterContainer}>
        <ProductListFilters setFilter={setFilter} />
      </View>
      <View style={styles.productListContainer}>
        <ProductList data={dataToRender} />
      </View>
    </SafeAreaView>
  );
};

export default Ecomerce;

const styles = StyleSheet.create(theme => ({
  mainContainer: {
    flex: 1,
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
  carouselContainer: {
    flex: 4,
  },
  categoryContainer: { flex: 1 },
  listFilterContainer: {
    flex: 0.6,
    marginVertical: 10,
    backgroundColor: 'red',
  },
  productListContainer: {
    flex: 5,
    width: '100%',
    backgroundColor: 'red',
  },
}));
