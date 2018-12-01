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
    name: 'Markup - Italic',
    scope: ['markup.italic'],
    settings: {
      fontStyle: 'italic',
      foreground: '#FF5370'
    }
  },
  {
    name: 'Markup - Bold',
    scope: ['markup.bold', 'markup.bold string'],
    settings: {
      fontStyle: 'bold',
      foreground: '#FF5370'
    }
  },

  {
    name: 'Markup - Bold-Italic',
    scope: [
      'markup.bold markup.italic',
      'markup.italic markup.bold',
      'markup.quote markup.bold',
      'markup.bold markup.italic string',
      'markup.italic markup.bold string',
      'markup.quote markup.bold string'
    ],
    settings: {
      fontStyle: 'bold',
      foreground: '#FF5370'
    }
  },
  {
    name: 'Markup - Underline',
    scope: ['markup.underline'],
    settings: {
      fontStyle: 'underline',
      foreground: '#F76D47'
    }
  },

  {
    name: 'Markup - Quote',
    scope: ['markup.quote'],
    settings: {
      fontStyle: 'italic'
    }
  },
  {
    name: 'Markup - Raw Block',
    scope: ['markup.raw.block'],
    settings: {
      foreground: '#7C4DFF'
    }
  },

  {
    name: 'Markup - Table',
    scope: ['markup.table'],
    settings: {
      foreground: '#90A4AE'
    }
  }
]
