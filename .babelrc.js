
module.exports = {
  plugins: [
    [
      'babel-plugin-polyfill-corejs3',
      {
        method: 'usage-pure',
        version: '3.20',
      },
    ],
  ],
};
