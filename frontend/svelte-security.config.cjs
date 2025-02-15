module.exports = {
  checks: {
    'no-external-fetch': 'error',
    'no-http-strings': 'error',
    'no-document-query': 'error'
  },
  rules: {
    'secure-csp': (context) => ({
      Literal(node) {
        if (node.value?.includes('unsafe-inline')) {
          context.report('Avoid unsafe-inline in CSP directives');
        }
      }
    })
  }
}; 