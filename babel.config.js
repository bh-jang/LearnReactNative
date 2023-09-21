module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [''],
        alias: {
          '@': './src',
          '@components': './src/components',
          '@constant': './src/constants'
        }
      }
    ]
  ]
};
