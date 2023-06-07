module.exports = ({ config }) => ({
  ...config,
  output: {
    ...config.output,
    library: 'gjs-blocks-basic',
  },
});