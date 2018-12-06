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
  }
]
