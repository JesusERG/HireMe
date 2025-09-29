import { StyleSheet, Text, View, Image, Pressable, Button } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

const UserTopContainer = () => {
  const { t } = useTranslation();
  const [response, setResponse] = useState<any>(null);
  const onButtonPress = useCallback((options: any) => {
    console.log('preesssded');
    ImagePicker.launchImageLibrary(options, setResponse);
  }, []);
  return (
    <View style={styles.mainContainer}>
      <Pressable
        style={styles.coverPressable}
        onPress={() => {
          onButtonPress({});
        }}
      >
        <Image
          style={styles.mainProfilePicture}
          source={
            response
              ? response?.assets[0]
              : require('../../assets/imgs/ProfilePicture.webp')
          }
        />
      </Pressable>

      <Text style={styles.greetingText}>{t('hi')}</Text>
    </View>
  );
};

export default UserTopContainer;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  mainProfilePicture: {
    width: 200,
    height: 200,
    borderRadius: '100%',
  },
  greetingText: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  coverPressable: {
    width: 200,
    height: 200,
    borderRadius: '100%',
    zIndex: 10,
  },
});
