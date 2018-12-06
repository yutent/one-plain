const vars = require('./var')

module.exports = [
  {
    name: 'Markdown - Plain',
    scope: ['text.html.markdown', 'punctuation.definition.list_item.markdown'],
    settings: {
      foreground: vars.common2
    }
  },
  {
    name: 'inline code',
    scope: ['markup.inline'],
    settings: {
      foreground: '#ff5370'
    }
  },
  {
    name: 'Bode Block',
    scope: ['markup.fenced_code.block.markdown', 'markup.raw.block'],
    settings: {
      foreground: vars.common
    }
  },

  {
    name: 'Markdown - Heading',
    scope: [
      'markdown.heading',
      'markup.heading',
      'markup.heading entity.name',
      'markup.heading.markdown',
      'punctuation.definition.heading.markdown'
    ],
    settings: {
      foreground: vars.red1,
      fontStyle: 'bold'
    }
  },

  {
    name: 'Markdown - Blockquote',
    scope: ['markup.quote'],
    settings: {
      fontStyle: 'italic',
      foreground: vars.common
    }
  },

  {
    name: 'link & image',
    scope: [
      'markup.underline.link.image.markdown',
      'markup.underline.link.markdown'
    ],
    settings: {
      fontStyle: 'italic',
      foreground: vars.grey2
    }
  },

  {
    name: 'link text & image text',
    scope: [
      'string.other.link.title.markdown',
      'string.other.link.description.markdown'
    ],
    settings: {
      fontStyle: '',
      foreground: vars.blue2
    }
  },

  {
    name: 'Markdown - Fenced Language',
    scope: ['variable.language.fenced.markdown'],
    settings: {
      foreground: '#E7EAEC'
    }
  },
  {
    name: 'Markdown - Separator',
    scope: ['meta.separator'],
    settings: {
      fontStyle: 'bold',
      foreground: '#E7EAEC'
    }
  },
  {
    name: 'Markup - Italic',
    scope: ['markup.italic'],
    settings: {
      fontStyle: 'italic',
      foreground: vars.grey2
    }
  },
  {
    name: 'Markup - Bold',
    scope: ['markup.bold', 'markup.bold string'],
    settings: {
      fontStyle: 'bold',
      foreground: vars.dark1
    }
  },

  {
    name: 'Markup - Bold-Italic',
    scope: ['markup.bold markup.italic', 'markup.italic markup.bold'],
    settings: {
      fontStyle: 'bold italic',
      foreground: vars.dark1
    }
  },

  {
    name: 'delete & insert & underline',
    scope: ['markup.inserted', 'markup.deleted', 'markup.underline'],
    settings: {
      fontStyle: 'underline',
      foreground: vars.common
    }
  },

  {
    name: 'underline',
    scope: ['markup.underline'],
    settings: {
      foreground: vars.red1
    }
  },

  {
    name: 'order list & unorder list',
    scope: ['markup.list'],
    settings: {
      foreground: vars.dark1,
      fontStyle: 'bold'
    }
  },
  {
    name: 'all md sign',
    scope: [
      'punctuation.definition.markdown',
      'punctuation.definition.list.begin.markdown',
      'punctuation.definition.heading.markdown',
      'punctuation.definition.quote.begin.markdown',
      'punctuation.definition.italic.markdown',
      'punctuation.definition.bold.markdown',
      'punctuation.definition.italic.markdown'
    ],
    settings: {
      fontStyle: '',
      foreground: vars.grey1
    }
  }
]
