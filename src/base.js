const vars = require('./var')

module.exports = [
  {
    name: 'Comment',
    scope: ['comment', 'punctuation.definition.comment'],
    settings: {
      fontStyle: 'italic',
      foreground: '#B6D5E0'
    }
  },
  {
    name: 'Variables',
    scope: ['variable', 'string constant.other.placeholder'],
    settings: {
      foreground: vars.common2
    }
  },
  {
    name: 'Colors',
    scope: ['constant.other.color'],
    settings: {
      foreground: vars.common2
    }
  },
  {
    name: 'Invalid',
    scope: ['invalid', 'invalid.illegal'],
    settings: {
      foreground: vars.common2
    }
  },
  {
    name: 'Invalid deprecated',
    scope: ['invalid.deprecated'],
    settings: {
      fontStyle: 'italic',
      foreground: '#FFB62C'
    }
  },
  {
    name: 'Unimplemented',
    scope: 'invalid.unimplemented',
    settings: {
      foreground: vars.common2
    }
  },
  {
    name: 'Keyword, Storage',
    scope: ['keyword', 'storage.type', 'storage.modifier'],
    settings: {
      foreground: '#FF5370'
    }
  },
  {
    name: 'Keyword, Storage',
    scope: ['storage.type', 'keyword.control'],
    settings: {
      fontStyle: 'italic'
    }
  },

  {
    name: 'Operator, Misc',
    scope: [
      'keyword.control',
      'constant.other.color',
      'meta.tag',
      'punctuation.definition.tag',
      'punctuation.separator.inheritance.php',
      'punctuation.definition.tag.html',
      'punctuation.definition.tag.begin.html',
      'punctuation.definition.tag.end.html',
      'punctuation.section.embedded',
      'keyword.other.template',
      'keyword.other.substitution'
    ],
    settings: {
      foreground: '#FF5370'
    }
  },
  {
    name: 'Operator, Misc',
    scope: [
      'punctuation.definition.generic.begin.wxml',
      'punctuation.definition.generic.end.wxml'
    ],
    settings: {
      foreground: '#f7820c'
    }
  },
  {
    name: 'Keyword Control',
    scope: ['keyword.control'],
    settings: {
      fontStyle: 'italic'
    }
  },
  {
    name: 'Tag',
    scope: ['entity.name.tag', 'meta.tag.sgml', 'markup.deleted.git_gutter'],
    settings: {
      foreground: '#FF5370'
    }
  },
  {
    name: 'Function, Special Method, Block Level',
    scope: [
      'entity.name.function',
      'meta.function-call',
      'variable.function',
      'support.function',
      'keyword.other.special-method',
      'meta.block-level'
    ],
    settings: {
      foreground: '#0099ff'
    }
  },
  {
    name: 'C-related Block Level Variables',
    scope: ['source.cpp meta.block variable.other'],
    settings: {
      foreground: '#FF5370'
    }
  },
  {
    name: 'Variables constant',
    scope: ['variable.other.constant'],
    settings: {
      foreground: '#FF5370'
    }
  },
  {
    name: 'Other Variable, String Link',
    scope: ['support.other.variable', 'string.other.link'],
    settings: {
      foreground: '#FF5370'
    }
  },
  {
    name: 'Number, Constant, Function Argument, Tag Attribute, Embedded',
    scope: [
      'constant.numeric',
      'constant.language',
      'support.constant',
      'constant.character',
      'variable.parameter',
      'keyword.other.unit'
    ],
    settings: {
      fontStyle: 'italic',
      foreground: '#7c4dff'
    }
  },
  {
    name: 'func parameter',
    scope: ['variable.parameter'],
    settings: {
      foreground: '#f5be09',
      fontStyle: 'italic'
    }
  },
  {
    name: 'Number, Function Argument, Tag Attribute, Embedded',
    scope: ['variable.parameter.function.language.special'],
    settings: {
      foreground: '#E53935'
    }
  },
  {
    name: 'Number, Constant, Function Argument, Tag Attribute, Embedded',
    scope: 'constant.character.entity.wxml',
    settings: {
      fontStyle: 'italic',
      foreground: vars.common2
    }
  },
  {
    name: 'String',
    scope: ['string'],
    settings: {
      foreground: '#53c659'
    }
  },
  {
    name: 'Punctuation',
    scope: 'punctuation',
    settings: {
      foreground: vars.common
    }
  },
  {
    name: 'Symbols, Inherited Class, Markup Heading',
    scope: [
      'constant.other.symbol',
      'constant.other.key',
      'entity.other.inherited-class',
      'markup.heading',
      'markup.inserted.git_gutter',
      'meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js'
    ],
    settings: {
      foreground: vars.common2
    }
  },
  {
    name: 'Class, Support',
    scope: [
      'entity.name.class',
      'entity.name.type.class',
      'support.type',
      'support.class',
      'support.orther.namespace.use.php',
      'meta.use.php',
      'support.other.namespace.php',
      'markup.changed.git_gutter',
      'support.type.sys-types'
    ],
    settings: {
      fontStyle: 'bold italic',
      foreground: '#FFB62C'
    }
  },
  {
    name: 'Entity Types',
    scope: ['support.type'],
    settings: {
      foreground: '#8796B0'
    }
  },
  {
    name: 'CSS Class and Support',
    scope: [
      'source.css support.type.property-name',
      'source.sass support.type.property-name',
      'source.scss support.type.property-name',
      'source.less support.type.property-name',
      'source.stylus support.type.property-name',
      'source.postcss support.type.property-name'
    ],
    settings: {
      foreground: '#8796B0'
    }
  },
  {
    name: 'Sub-methods',
    scope: [
      'entity.name.module.js',
      'variable.import.parameter.js',
      'variable.other.class.js'
    ],
    settings: {
      foreground: '#E53935'
    }
  },
  {
    name: 'Language methods',
    scope: ['variable.language'],
    settings: {
      fontStyle: 'italic',
      foreground: '#E53935'
    }
  },
  {
    name: 'entity.name.method.js',
    scope: ['entity.name.method.js'],
    settings: {
      fontStyle: 'italic',
      foreground: '#6182B8'
    }
  },
  {
    name: 'meta.method.js',
    scope: [
      'meta.class-method.js entity.name.function.js',
      'variable.function.constructor'
    ],
    settings: {
      foreground: '#6182B8'
    }
  },
  {
    name: 'Attributes',
    scope: ['entity.other.attribute-name'],
    settings: {
      foreground: '#7C4DFF'
    }
  },
  {
    name: 'Inserted',
    scope: ['markup.inserted'],
    settings: {
      foreground: '#91B859'
    }
  },
  {
    name: 'Deleted',
    scope: ['markup.deleted'],
    settings: {
      foreground: '#E53935'
    }
  },
  {
    name: 'Changed',
    scope: ['markup.changed'],
    settings: {
      foreground: '#7C4DFF'
    }
  },
  {
    name: 'Regular Expressions',
    scope: ['string.regexp'],
    settings: {
      foreground: '#0099ff'
    }
  },
  {
    name: 'Escape Characters',
    scope: ['constant.character.escape'],
    settings: {
      foreground: '#39ADB5'
    }
  },
  {
    name: 'URL',
    scope: ['*url*', '*link*', '*uri*'],
    settings: {
      fontStyle: 'underline'
    }
  },
  {
    name: 'Decorators',
    scope: [
      'tag.decorator.js entity.name.tag.js',
      'tag.decorator.js punctuation.definition.tag.js'
    ],
    settings: {
      fontStyle: 'italic',
      foreground: '#6182B8'
    }
  }
]
