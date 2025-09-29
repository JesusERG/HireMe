// const onPressPagination = useCallback(
//   (index: number) => {
//     ref.current?.scrollTo({
//       /**
//        * Calculate the difference between the current index and the target index
//        * to ensure that the carousel scrolls to the nearest index
//        */
//       count: index - progress.value,
//       animated: true,
//     });
//   },
//   [progress.value],
// );
// const onPressPagination = (index: number) => {
//   ref.current?.scrollTo({
//     /**
//      * Calculate the difference between the current index and the target index
//      * to ensure that the carousel scrolls to the nearest index
//      */
//     count: index - progress.value,
//     animated: true,
//   });
// };

import { Text, View, Image } from 'react-native';
import { StyleSheet, UnistylesRuntime } from 'react-native-unistyles';
import { useSharedValue, useDerivedValue } from 'react-native-reanimated';
import { useGetProductsQuery } from '../../redux/slices/apis/ecommerceApiSlice';
import Carousel, {
  ICarouselInstance,
  Pagination,
} from 'react-native-reanimated-carousel';
import { useState, useRef } from 'react';
import { Product } from '../../utils/types/Types';

const CarouselSection = () => {
  const [currentProgress, setCurrentProgress] = useState(0);
  const ref = useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);
  const width = UnistylesRuntime.screen.width;
  const {
    data: products,
    isLoading: productsLoading,
    error: productsError,
  } = useGetProductsQuery();

  const paginationProgress = useDerivedValue(() => {
    return progress.value; // safe, inside worklet
  }, [progress]);

  if (productsLoading) return <Text>Loading...</Text>;
  if (productsError) return <Text>Error</Text>;
  return (
    <View style={styles.carouselContainer}>
      <Carousel
        ref={ref}
        width={width}
        data={products.products}
        // onProgressChange={progress}
        onProgressChange={(_, absoluteProgress) => {
          progress.value = absoluteProgress; // keep shared value for animations
          setCurrentProgress(absoluteProgress); // keep React state for logic
        }}
        renderItem={({ item }: { item: Product }) => (
          <View style={styles.carouselImageContainer}>
            <Image
              source={{ uri: item.images[0] }}
              style={styles.carouselImage}
            />
          </View>
        )}
      />
      <Pagination.Basic
        progress={paginationProgress}
        data={products.products}
        dotStyle={styles.dotPaginationStyle}
        containerStyle={styles.paginationContainer}
        onPress={(index: number) => {
          ref.current?.scrollTo({
            count: index - currentProgress,
            animated: true,
          });
        }}
      />
      {/* <Pagination.Basic
        progress={progress}
        data={products.products}
        dotStyle={styles.dotPaginationStyle}
        containerStyle={styles.paginationContainer}
        // onPress={onPressPagination}
        onPress={(index: number) => {
          ref.current?.scrollTo({
            count: index - currentProgress, // ✅ use state instead of .value
            animated: true,
          });
        }}
      /> */}
    </View>
  );
};

export default CarouselSection;
const styles = StyleSheet.create(theme => ({
  carouselContainer: {
    flex: 1,
    margin: 10,
    backgroundColor: theme.colors.secondary,
    opacity: 0.9,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  carouselImageContainer: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationContainer: {
    position: 'absolute',
    bottom: '10%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselImage: {
    height: '100%',
    width: undefined,
    aspectRatio: 1,
  },
  dotPaginationStyle: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 50,
    marginHorizontal: 1,
  },
}));
