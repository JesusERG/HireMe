import { View, FlatList } from 'react-native';
import { StyleSheet, UnistylesRuntime } from 'react-native-unistyles';
// import { useGetProductsQuery } from '../../redux/slices/apis/ecommerceApiSlice';
import ListItem from './ListItem';
import { useState } from 'react';
import { Product } from '../../utils/types/Types';

const ProductList = ({ data }: { data: Product[] }) => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = (event: any) => {
    if (event.nativeEvent.contentOffset.y <= 10) setOffsetY(0);
    if (
      event.nativeEvent.contentOffset.y > 10 &&
      event.nativeEvent.contentOffset.y < UnistylesRuntime.screen.height / 6
    ) {
      const { contentOffset } = event.nativeEvent;
      console.log('Scroll Y position:', contentOffset.y);
      setOffsetY(contentOffset.y * 3);
    }

    if (offsetY > UnistylesRuntime.screen.height / 6) return;
    const { contentOffset } = event.nativeEvent;
    console.log('Scroll Y position:', contentOffset.y);
    setOffsetY(contentOffset.y * 3);
  };

  // if (isLoading) return <Text>Loading...</Text>;
  // if (error) return <Text>Error</Text>;

  return (
    <View
      style={
        offsetY ? styles.mainContainerScroll(offsetY) : styles.mainContainer
      }
    >
      <FlatList
        data={data}
        renderItem={({ item }) => <ListItem item={item} />}
        keyExtractor={item => item.id.toString()}
        onScroll={handleScroll}
      />
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create(theme => ({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  mainContainerScroll: (offsetY: number) => ({
    position: 'absolute',
    top: -offsetY,
    left: 0,
    right: 0,
    bottom: 0,
  }),
  listContainer: {
    flex: 1,
  },
}));
