module.exports = {
  'env': {
    'browser': true,
    'es2020': true,
    'node': true,
  },
  'extends': [
    'google',
  ],
  'parserOptions': {
    'ecmaVersion': 11,
    'sourceType': 'module',
  },
  'parser': 'babel-eslint',
  'rules': {
    'arrow-parens': 'off',
    'comma-dangle': 'off',
    'require-jsdoc': 'off'
  },
};


