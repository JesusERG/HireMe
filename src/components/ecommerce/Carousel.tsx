import { Text, View, FlatList } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import 

const Carousel = () => {

  return (
    <View style={styles.carouselContainer}>

      <FlatList
      data={}
      renderItem={}
      keyExtractor={}
      />
    </View>
  );
};

export default Carousel;
const styles = StyleSheet.create(theme => ({
  carouselContainer: {
    padding: 10,
    backgroundColor: 'red',
  },
}));
