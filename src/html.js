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
      foreground: '#FFB62C'
    }
  },
  {
    name: 'CSS Classes',
    scope: ['entity.other.attribute-name.class'],
    settings: {
      foreground: '#FFB62C'
    }
  },
  {
    name: "CSS ID's",
    scope: ['source.sass keyword.control'],
    settings: {
      foreground: '#6182B8'
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
