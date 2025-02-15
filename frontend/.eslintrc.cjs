module.exports = {
  extends: ['@sveltejs', 'plugin:security/recommended'],
  rules: {
    'security/detect-object-injection': 'error',
    'security/detect-non-literal-fs-filename': 'error',
    'security/detect-possible-timing-attacks': 'warn'
  },
  plugins: ['security']
}; 