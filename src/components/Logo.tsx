import { Text, View } from 'react-native';
import React from 'react';
import Animated, { css } from 'react-native-reanimated';
import Svg, { Path } from 'react-native-svg';
import { StyleSheet } from 'react-native-unistyles';

const Logo = ({ size }: { size: string }) => {
  //Animation
  const rotate = {
    from: {
      transform: [{ scale: 1 }, { translateX: 0 }],
    },
    to: {
      transform: [{ scale: 1.4 }, { translateX: 5 }],
    },
  };

  //Animation Properties
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
  return (
    <View
      style={[
        size === 'large'
          ? styles.containerLarge
          : size === 'small'
          ? styles.containerSmall
          : styles.container,
      ]}
    >
      <View>
        <Text style={styles.textLogo}>Jesus.It.Dev</Text>
      </View>
      <Animated.View style={[cssStyle.rotate]}>
        <Svg height={50} width={50}>
          <Path
            d="M2,8 L5,1 L8,8 L5,11 L2,8"
            stroke="black"
            fill={'none'}
            transform={'scale(4)'}
            strokeWidth={0.5}
          />
          <Path
            d="M4.5,8 L7.5,1 L10.5,8 L7.5,11 L4.5,8"
            stroke="black"
            fill={'none'}
            transform={'scale(4)'}
            strokeWidth={0.5}
          />
        </Svg>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create(theme => ({
  mainContainer: { flex: 1, backgroundColor: theme.colors.background },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [
      {
        scale: 2,
      },
      {
        scale: {
          xs: 0.5,
          md: 1,
          lg: 1.4,
        },
      },
    ],
  },
  containerLarge: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [
      {
        scale: 3,
      },
      {
        scale: {
          xs: 0.5,
          md: 1,
          lg: 1.4,
        },
      },
    ],
  },
  containerSmall: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [
      {
        scale: 1.5,
      },
      {
        scale: {
          xs: 0.7,
          md: 1,
          lg: 1.4,
        },
      },
    ],
  },
  textLogo: {
    fontSize: 30,

    fontFamily: 'AzeretMono-Regular',

    // fontFamily: 'Azeret Mono',
  },
}));

export default Logo;
