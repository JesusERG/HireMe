import { FlatList, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native-unistyles';
import { TypeAnimation } from 'react-native-type-animation';
import { useGetUserActivityQuery } from '../redux/slices/apis/githubApiSlice';
import { UserActivity } from '../utils/types/Types';
import { useEffect, useState } from 'react';

const Feed = () => {
  const { data, error, isLoading } = useGetUserActivityQuery();
  const [commits, setCommits] = useState<string[]>([]);

  const getCommitsFromUserActivity = (activity: UserActivity[]) => {
    activity.map((item: UserActivity) => {
      if (item.payload.commits) {
        console.log('comit content: ', item.payload.commits);
        item.payload.commits.forEach(commit => {
          console.log(' message: ', commit.message);
          setCommits(prevCommits => [...prevCommits, commit.message]);
        });
      }
    });
    console.log('comits:', commits);
    // const commitsArray = activity.map(
    //   (item: UserActivity) => item.payload.commits,
    // );
    // console.log('coom:', commitsArray);
    // const filteredCommitsArray = commitsArray.filter(
    //   item => {item},
    // );
  };

  useEffect(() => {
    if (data) getCommitsFromUserActivity(data);
  }, [data]);

  if (isLoading)
    return (
      <SafeAreaView edges={['top']} style={styles.safeAreaContainer}>
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
      </SafeAreaView>
    );

  if (error)
    return (
      <SafeAreaView edges={['top']} style={styles.safeAreaContainer}>
        <View style={styles.container}>
          <Text>Error</Text>
        </View>
      </SafeAreaView>
    );

  return (
    <SafeAreaView edges={['top']} style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View
            style={{
              flex: 2,

              justifyContent: 'center',
            }}
          >
            <Image
              style={styles.mainProfilePicture}
              source={require('../assets/imgs/ProfilePicture.webp')}
            />
          </View>
          <View style={styles.titleContainer}>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
              }}
            >
              <Text style={styles.text}>I'm Jesus Gonzalez </Text>
            </View>
            <View style={{ flex: 1 }}>
              <TypeAnimation
                sequence={[
                  { text: 'Mobile Developer' },
                  { text: 'Web Developer' },
                  { text: 'Systems Engineer' },
                  { text: 'Hamburguer Connoisseur' },
                ]}
                loop
                delayBetweenSequence={1000}
                style={styles.text}
              />
            </View>
          </View>
        </View>

        <View style={styles.subTitleContainer}>
          <Text style={styles.text}>What have i been up to?</Text>
        </View>

        <View style={styles.feedContainer}>
          <FlatList
            data={commits}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item, index }) => (
              <View style={styles.commitContainer}>
                <View style={styles.userInfoContainer}>
                  <Image
                    style={styles.profilePicture}
                    source={require('../assets/imgs/ProfilePicture2.webp')}
                  />
                  <View style={styles.userInfo}>
                    <View style={styles.userNameAndStatusContainer}>
                      <Text style={styles.userName}>Jesús González</Text>
                      <Image
                        style={styles.verifiedCheckmark}
                        source={require('../assets/imgs/VerifiedCheckmark.webp')}
                      />
                    </View>
                    <Text style={styles.nameTag}>@Jesus.IT.Dev</Text>
                  </View>
                </View>
                <View style={styles.commitMessageContainer}>
                  <Text style={styles.message}>{item}</Text>
                </View>
                <View style={styles.buttonContainer}>
                  <Text style={styles.icon}>💬</Text>
                  <Text style={styles.icon}>❤️</Text>
                  <Text style={styles.icon}>⏎</Text>
                  <Text style={styles.icon}>⎋</Text>
                </View>
              </View>
            )}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create((theme, rt) => ({
  container: {
    backgroundColor: theme.colors.white,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: { xs: 10, md: 20, lg: 25 },
  },
  safeAreaContainer: {
    backgroundColor: theme.colors.primary,
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    // flexDirection: {
    //   xs: 'column',
    //   md: 'row',
    //   lg: 'row',
    // },
    // flexWrap: 'wrap',
    width: '80%',
  },
  topContainer: {
    flex: {
      xs: 1.6,
      md: 2,
      lg: 2.4,
    },
    width: '100%',
    justifyContent: 'center',
    // flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    borderBottomStartRadius: rt.screen.width * 0.1,
    borderBottomEndRadius: rt.screen.width * 0.1,
    // borderBottomStartRadius: rt.screen.width * 0.15,
    // borderBottomEndRadius: rt.screen.width * 0.15,
    paddingBottom: {
      xs: 0,
      md: 15,
      lg: 30,
    },
    borderColor: theme.colors.black,
    borderWidth: 1,
    borderTopWidth: 0,
  },
  feedContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
    width: '100%',
    borderTopStartRadius: rt.screen.width * 0.1,
    borderTopEndRadius: rt.screen.width * 0.1,
    // borderTopStartRadius: rt.screen.width * 0.15,
    // borderTopEndRadius: rt.screen.width * 0.15,

    paddingHorizontal: rt.isLandscape
      ? 0
      : {
          xs: 0,
          md: 20,
          lg: 40,
        },
    borderColor: theme.colors.black,
    borderTopWidth: 0.3,
    borderLeftWidth: 0.3,
    borderRightWidth: 0.3,
    overflow: 'hidden',
  },
  text: {
    textAlign: 'center',
    fontSize: {
      xs: 22,
      md: 35,
      lg: 55,
    },
  },
  profilePicture: {
    height: {
      xs: rt.isLandscape ? rt.screen.height * 0.2 : rt.screen.width * 0.13,
      md: rt.isLandscape ? rt.screen.height * 0.14 : rt.screen.width * 0.11,
      lg: rt.isLandscape ? rt.screen.height * 0.08 : rt.screen.width * 0.08,
    },
    width: undefined,
    aspectRatio: 1,
    borderRadius: '100%',
  },
  userInfoContainer: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: rt.isLandscape ? '5%' : 0,
  },
  userInfo: {
    flex: 1,
    marginLeft: 10,
    marginTop: 3,
  },
  userNameAndStatusContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  verifiedCheckmark: {
    height: 15,
    width: 15,
  },
  commitContainer: {
    padding: 13,
    minHeight: rt.isLandscape ? rt.screen.height * 0.2 : rt.screen.width * 0.2,
    width: rt.screen.width,
    flex: 1,
  },
  commitMessageContainer: {
    padding: 10,
    flex: 1,
    marginLeft: rt.isLandscape ? '5%' : 0,
  },
  separator: {
    borderBottomColor: theme.colors.inverseSurface,
    borderBottomWidth: 1,
    opacity: 0.3,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: { xs: 'space-around', md: 'space-around', lg: 'flex-end' },
    gap: {
      xs: 0,
      md: 0,
      lg: 60,
    },
    marginRight: {
      lg: '10%',
    },
    marginBottom: {
      lg: '2%',
    },

    // backgroundColor: 'red',
  },
  icon: {
    transform: [
      {
        scale: {
          md: 1.4,
          lg: 2,
        },
      },
    ],
  },
  mainProfilePicture: {
    height: '90%',
    width: undefined,
    aspectRatio: 1,
    borderRadius: '100%',
  },

  userName: {
    fontSize: {
      xs: 15,
      md: 20,
      lg: 30,
    },
    fontWeight: 'bold',
  },
  nameTag: {
    fontSize: {
      xs: 13,
      md: 17,
      lg: 21,
    },
    fontStyle: 'italic',
    opacity: 0.5,
  },
  message: {
    fontSize: {
      xs: 15,
      md: 20,
      lg: 30,
    },
  },
  subTitleContainer: {},
}));

export default Feed;
