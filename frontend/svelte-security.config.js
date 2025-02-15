export default {
  checks: {
    'no-external-fetch': 'error',
    'no-unsafe-dynamic': 'error',
    'no-http-string': 'error',
    'no-dangerous-links': 'warning',
    'no-inline-styles': 'off',
    'no-document-query': 'error'
  },
  rules: {
    'no-external-fetch': (context) => ({
      ImportDeclaration(node) {
        if (node.source.value.startsWith('http:')) {
          context.report('Use HTTPS for all external requests');
        }
      }
    })
  },
  ignore: [
    '**/node_modules/**',
    '**/.svelte-kit/**'
  ]
}; 