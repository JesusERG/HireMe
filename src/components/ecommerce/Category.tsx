import { Text, View, FlatList, Pressable } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { useGetCategoriesQuery } from '../../redux/slices/apis/ecommerceApiSlice';

const Category = ({ setCategory }: { setCategory: any }) => {
  const { data, isLoading, error } = useGetCategoriesQuery();

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error</Text>;

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.listItemContainer}>
            <Pressable onPress={() => setCategory(item.slug)}>
              <Text>{item.name}</Text>
            </Pressable>
          </View>
        )}
        horizontal
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default Category;

const styles = StyleSheet.create((theme, rt) => ({
  listContainer: {
    flex: 1,
    marginLeft: rt.screen.width * 0.02,
  },
  listItemContainer: {
    backgroundColor: theme.colors.tertiary,
    width: rt.screen.width * 0.3,
  },
  separator: {
    width: rt.screen.width * 0.03,
  },
}));
