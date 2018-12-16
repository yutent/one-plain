const vars = require('./var')

module.exports = [
  {
    name: 'HTML Attributes',
    scope: [
      'text.html.basic entity.other.attribute-name.html',
      'text.html.basic entity.other.attribute-name',
      'text.xhtml.basic entity.other.attribute-name.xhtml',
      'text.xhtml.basic entity.other.attribute-name'
    ],
    settings: {
      fontStyle: 'italic',
      foreground: vars.yellow1
    }
  },
  {
    name: 'CSS Class & ID',
    scope: [
      'entity.other.attribute-name.class',
      'entity.other.attribute-name.id.css'
    ],
    settings: {
      foreground: vars.yellow1
    }
  },
  {
    name: 'scss variable',
    scope: [
      'meta.property-value.scss variable.scss',
      'meta.at-rule.mixin.scss variable.scss',
      'meta.definition.variable.scss variable.scss'
    ],
    settings: {
      foreground: vars.red1 + 'cb'
    }
  },
  {
    name: 'scss color value',
    scope: ['constant.other.color.rgb-value.hex.css'],
    settings: {
      fontStyle: 'underline',
      foreground: vars.magenta1
    }
  },
  {
    name: 'CSS url',
    scope: [
      'meta.property-value.css variable.parameter.url.css',
      'meta.property-value.scss variable.parameter.url.scss',
      'meta.property-value.scss keyword.operator.css',
      'meta.property-value.scss string.quoted.single.scss'
    ],
    settings: {
      foreground: '#53c659'
    }
  },
  {
    name: 'directive',
    scope: [
      'text.html.derivative meta.attribute.unrecognized entity.other.attribute-name.html'
    ],
    settings: {
      foreground: vars.yellow1
    }
  },
  {
    name: "directive's value",
    scope: [
      'text.html.derivative meta.attribute.unrecognized string.quoted.double.html'
    ],
    settings: {
      foreground: vars.magenta1
    }
  },
  {
    name: 'hexadecimal & character',
    scope: [
      'constant.character.entity.named',
      'constant.character.entity.named punctuation.definition.entity.html',
      'constant.character.entity.numeric.hexadecimal.html',
      'constant.character.entity.numeric.hexadecimal.html punctuation.definition.entity.html'
    ],
    settings: {
      foreground: vars.blue1
    }
  }
]
