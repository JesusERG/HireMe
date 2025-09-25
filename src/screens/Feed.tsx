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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <View style={{ flex: 2 }}>
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
      <View style={styles.feedContainer}>
        <Text style={styles.text}>What have i been up to?</Text>
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
                    <Text>Jesús González</Text>
                    <Image
                      style={styles.verifiedCheckmark}
                      source={require('../assets/imgs/VerifiedCheckmark.webp')}
                    />
                  </View>
                  <Text>@Jesus.IT.Dev</Text>
                </View>
              </View>
              <View style={styles.commitMessageContainer}>
                <Text>{item}</Text>
              </View>
              <View style={styles.buttonContainer}>
                <Text>💬</Text>
                <Text>❤️</Text>
                <Text>⏎</Text>
                <Text>⎋</Text>
              </View>
            </View>
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create((theme, rt) => ({
  container: {
    backgroundColor: theme.colors.background,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: { xs: 0, md: 10, lg: 25 },
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
  feedContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',

    width: '100%',
  },
  text: {
    fontSize: {
      xs: 22,
      md: 35,
      lg: 55,
    },
  },
  profilePicture: {
    height: 50,
    width: 50,
    borderRadius: '100%',
  },
  userInfoContainer: {
    flex: 1,
    flexDirection: 'row',
    width: rt.screen.width * 0.9,
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
    flex: 1,
    padding: 13,

    width: rt.screen.width,
  },
  commitMessageContainer: { padding: 10 },
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
      lg: 30,
    },
    marginRight: {
      xs: 0,
      md: 0,
      lg: 30,
    },
  },
  mainProfilePicture: {
    height: '100%',
    width: undefined,
    aspectRatio: 1,
    borderRadius: '100%',
  },
  topContainer: {
    flex: 2,
    width: '100%',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
}));

export default Feed;
