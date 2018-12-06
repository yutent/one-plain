const vars = require('./var')

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
    name: 'Class extends, console',
    scope: [
      'support.type.object.console.js',
      'support.type.object.module.js',
      'support.constant.math',
      // 'support.type.object.module',
      'meta.class.extends.js > variable.other.readwrite.js'
    ],
    settings: {
      fontStyle: 'bold italic',
      foreground: '#ffb62c'
    }
  },

  {
    name: 'new Class',
    scope: ['new.expr entity.name.type'],
    settings: {
      fontStyle: 'bold',
      foreground: '#ffb62c'
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
    name: 'Build-in props',
    scope: [
      'meta.group.braces.round variable.other.constant',
      'support.type.object.module keyword.operator.accessor',
      'support.constant.property.math.ts'
    ],
    settings: {
      fontStyle: 'italic bold',
      foreground: vars.blue2
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
      foreground: '#e5c07b',
      fontStyle: 'bold'
    }
  }
]
