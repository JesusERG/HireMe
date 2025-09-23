// module.exports = {
//   presets: ['module:@react-native/babel-preset'],

//   plugins: [
//     [
//       'react-native-unistyles/plugin',
//       {
//         root: './src',
//       },
//     ],
//     'react-native-worklets/plugin',
//   ],
// };

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
      [
        'react-native-unistyles/plugin',
        {
          root: 'src',
        },
      ],
      // ['react-native-reanimated/plugin'],
      ['react-native-worklets/plugin'],
    ],
  };
};
