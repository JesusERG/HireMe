import { Text, StyleSheet, View } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../utils/types/navigationTypes';
import { useEffect, useState } from 'react';
import Animated, { css } from 'react-native-reanimated';
import Svg, { Path } from 'react-native-svg';

const Splash = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();

  const [isToggled, setIsToggle] = useState(false);
  const rotate = {
    from: {
      transform: [{ scale: 1 }, { translateX: 0 }],
    },
    to: {
      transform: [{ scale: 1.6 }, { translateX: 5 }],
    },
  };

  const cssStyle = css.create({
    rotate: {
      animationName: rotate,
      animationDuration: '1000ms',
      animationDelay: '200ms',
      animationTimingFunction: 'ease-in',
      animationDirection: 'alternate',
      animationIterationCount: 'infinite',
    },
  });

  useEffect(() => {
    setIsToggle(true);
    setTimeout(() => {
      navigation.navigate('Feed');
    }, 1800);
  }, [navigation]);

  console.log('State: ', isToggled);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.textLogo}>Jesus.It.Dev</Text>
        <Animated.View style={[isToggled ? cssStyle.rotate : null]}>
          <Svg height={50} width={50}>
            {/* <Path
              d="M 48.85,34.1 L 35.82 11.92 C 35.65,11.63,35.35 11.459999999999999,35.01 11.459999999999999  C 34.669999999999995 11.45999999999999 34.37 11.639999999999999 34.199999999999996 11.92 L 30,19.08 L 25.79 11.929999999999998 C 25.619999999999997 11.639999999999999 25.32 11.469999999999997 24.98,11.469999999999997 C 24.64,11.469999999999997 24.34 11.649999999999997 24.17 11.929999999999998 L 11.15,34.1 C 10.93 34.47 10.99,34.93 11.290000000000001 35.230000000000004 L 24.32 48.260000000000005 C 24.5 48.440000000000005 24.740000000000002 48.53000000000001 24.98 48.53000000000001 C 25.22 48.53000000000001 25.46 48.440000000000005 25.64,48.260000000000005 L 30,43.91 L 34.35 48.26 C 34.53 48.44 34.77 48.53 35.01 48.53 C 35.24999999999999 48.53,35.489999999999995,48.44,35.669999999999995,48.26 L 48.699999999999996 35.23 C 49.01,34.93 49.07 34.46 48.85 34.1 z M 24.99 46.28 L 13.13 34.42 L 24.990000000000002 14.240000000000002 L 28.92 20.92 L 21.17 34.1 C 20.950000000000003 34.47 21.01 34.93 21.310000000000002 35.230000000000004 L 28.67 42.59 L 24.99 46.28 z M 30 22.77 L 36.85 34.42 L 30 41.27 L 23.15 34.42 L 30 22.77 z M 35.01 46.28 L 31.319999999999997 42.59 L 38.68 35.230000000000004 C 38.98 34.93000000000001 39.04 34.46 38.82 34.1 L 31.08 20.93 L 35.01 14.25 L 46.87 34.43 L 35.01 46.28 z "
              stroke="black"
            /> */}
            {/* <View style={styles.animationContainer}>
            <View style={styles.animationLeft}> */}
            <Path
              d="M2,8 L5,1 L8,8 L5,11 L2,8"
              stroke="black"
              fill={'none'}
              transform={'scale(4)'}
              strokeWidth={0.5}
            />
            {/* </View>
            <View style={styles.animationRight}> */}
            {/* <Path
            d="M4,8 L7,1 L10,8 L7,11 L4,8"
            stroke="black"
            fill={'none'}
            transform={'scale(1)'}
            strokeWidth={0.5}
          /> */}
            <Path
              d="M4.5,8 L7.5,1 L10.5,8 L7.5,11 L4.5,8"
              stroke="black"
              fill={'none'}
              transform={'scale(4)'}
              strokeWidth={0.5}
            />
            {/* </View>
          </View> */}
            {/* <Path
            d="M5,8 L8,1 L11,8 L8,11 L5,8"
            stroke="black"
            fill={'none'}
            transform={'scale(1)'}
            strokeWidth={0.5}
          /> */}
          </Svg>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  mainContainer: { flex: 1 },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLogo: {
    fontSize: 30,
    fontFamily: 'Azeret Mono',
  },
});
