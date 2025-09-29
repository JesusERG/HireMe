import { Image, Text, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { Product } from '../../utils/types/Types';

const ListItem = ({ item }: { item: Product }) => {
  return (
    <View style={[styles.mainContainer]}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.thumbnail }} style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.titleText}>{item.title}</Text>
        <Text style={styles.priceText}>${item.price}</Text>
        <Text style={styles.ratingText}>⭐️{item.rating}</Text>
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create(theme => ({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: theme.colors.tertiary,
    padding: 10,
    gap: 10,
    borderBottomColor: theme.colors.black,
    borderBottomWidth: 0.3,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    flex: 3,
    flexWrap: 'wrap',
  },
  titleText: { fontWeight: 'bold', fontSize: 22 },
  priceText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: theme.colors.primary,
  },
  ratingText: {},
  image: {
    width: 100,
    height: 100,
  },
}));
