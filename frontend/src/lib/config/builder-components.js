export const componentConfigs = {
  hero: {
    fields: [
      { name: 'title', type: 'text', label: 'Heading' },
      { name: 'subtitle', type: 'textarea', label: 'Subheading' },
      { name: 'background', type: 'color', label: 'Background Color' }
    ],
    default: {
      title: 'Welcome to Our Platform',
      subtitle: 'Innovative solutions for modern challenges',
      background: '#ffffff'
    }
  },
  features: {
    fields: [
      { name: 'columns', type: 'number', label: 'Columns', min: 2, max: 4 },
      { name: 'items', type: 'repeater', label: 'Features' }
    ]
  }
}; 