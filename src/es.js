const vars = require('./var')

module.exports = [
  {
    name: 'Class extends, build-in, dom',
    scope: [
      'support.type.object.console.js',
      'support.type.object.module.js',
      'support.type.object.dom.js',
      'support.constant.math',
      'meta.class.extends.js variable.other.readwrite.js',
      'meta.function-call.static.without-arguments.js variable.other.class.js',
      'meta.property.class.js variable.other.class.js',
      'variable.other.object.ts'
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
    name: 'build-in function',
    scope: [
      'source.js support.function.node.js',
      'meta.group.braces.curly.js support.function',
      'meta.function-call.ts support.function.ts',
      'support.function.builtin.js'
    ],
    settings: {
      fontStyle: 'italic',
      foreground: vars.magenta1
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
      foreground: vars.common
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
      fontStyle: 'bold italic'
    }
  },

  {
    name: 'object keys',
    scope: [
      'constant.other.object.key.js string.unquoted.label.js',
      'constant.other.object.key.js string.quoted.label.js'
    ],
    settings: {
      fontStyle: 'italic bold',
      foreground: vars.common
    }
  }
]
