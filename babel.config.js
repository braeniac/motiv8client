module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      'nativewind/babel',
    ],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@assets': './assets',
          },
        },
      ],
      'react-native-reanimated/plugin'
    ], // Keep this as the last plugin
  };
};
