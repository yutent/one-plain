module.exports = [
  {
    name: 'ES7 Bind Operator',
    scope: ['source.js constant.other.object.key.js string.unquoted.label.js'],
    settings: {
      fontStyle: 'italic',
      foreground: '#E53935'
    }
  },
  {
    name: 'js/ts italic',
    scope: [
      'entity.other.attribute-name.js',
      'entity.other.attribute-name.ts',
      'entity.other.attribute-name.jsx',
      'entity.other.attribute-name.tsx'
    ],
    settings: {
      fontStyle: 'italic'
    }
  },

  {
    name: 'math js/ts',
    scope: 'support.constant.math',
    settings: {
      foreground: '#ffb62c',
      fontStyle: 'bold italic'
    }
  },

  {
    name: 'math property js/ts',
    scope: 'support.constant.property.math',
    settings: {
      foreground: '#7c4dff'
    }
  },

  // ts 类型
  {
    name: 'ts primitive/builtin types',
    scope: [
      'support.type.primitive.ts',
      'support.type.builtin.ts',
      'support.type.primitive.tsx',
      'support.type.builtin.tsx',
      'entity.name.type.module',
      'entity.name.type'
    ],
    settings: {
      foreground: '#E5C07B',
      fontStyle: 'bold'
    }
  }
]
