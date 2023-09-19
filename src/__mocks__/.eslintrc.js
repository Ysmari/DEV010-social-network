module.exports = {
  env: {
    jest: true // Indicar que estamos utilizando Jest
  },
  plugins: ['jest'],
  extends: ['eslint:recommended', 'plugin:jest/recommended'],
  rules: {
    // Puedes personalizar las reglas de ESLint para Jest aquí
  }
}
