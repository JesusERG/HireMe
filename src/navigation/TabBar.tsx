import { View } from 'react-native';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { Text, PlatformPressable } from '@react-navigation/elements';
import { StyleSheet } from 'react-native-unistyles';

function TabBar({ state, descriptors, navigation }: any) {
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();

  return (
    <View style={styles.container}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <PlatformPressable
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabSection}
          >
            {label === 'Feed' ? (
              <Text style={{ color: isFocused ? colors.primary : colors.text }}>
                📥
              </Text>
            ) : label === 'Wordle' ? (
              <Text style={{ color: isFocused ? colors.primary : colors.text }}>
                📖
              </Text>
            ) : label === 'Ecommerce' ? (
              <Text style={{ color: isFocused ? colors.primary : colors.text }}>
                🛍️
              </Text>
            ) : (
              <Text style={{ color: isFocused ? colors.primary : colors.text }}>
                👤
              </Text>
            )}

            <Text style={{ color: isFocused ? colors.primary : colors.text }}>
              {label}
            </Text>
          </PlatformPressable>
        );
      })}
    </View>
  );
}

export default TabBar;

const styles = StyleSheet.create((theme, rt) => ({
  container: {
    flexDirection: 'row',
    height: rt.screen.height * 0.05,
    alignItems: 'center',
  },
  tabSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
