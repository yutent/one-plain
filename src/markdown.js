module.exports = [
  {
    name: 'Markdown - Plain',
    scope: ['text.html.markdown', 'punctuation.definition.list_item.markdown'],
    settings: {
      foreground: '#90A4AE'
    }
  },
  {
    name: 'Markdown - Markup Raw Inline',
    scope: ['text.html.markdown markup.inline.raw.markdown'],
    settings: {
      foreground: '#7C4DFF'
    }
  },
  {
    name: 'Markdown - Markup Raw Inline Punctuation',
    scope: [
      'text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown'
    ],
    settings: {
      foreground: '#E7EAEC'
    }
  },
  {
    name: 'Markdown - Heading',
    scope: [
      'markdown.heading',
      'markup.heading | markup.heading entity.name',
      'markup.heading.markdown punctuation.definition.heading.markdown'
    ],
    settings: {
      foreground: '#91B859'
    }
  },

  {
    name: 'Markdown - Blockquote',
    scope: ['markup.quote punctuation.definition.blockquote.markdown'],
    settings: {
      foreground: '#E7EAEC'
    }
  },

  {
    name: 'Markdown - Link',
    scope: ['string.other.link.title.markdown'],
    settings: {
      foreground: '#6182B8'
    }
  },
  {
    name: 'Markdown - Link Description',
    scope: ['string.other.link.description.title.markdown'],
    settings: {
      foreground: '#7C4DFF'
    }
  },
  {
    name: 'Markdown - Link Anchor',
    scope: ['constant.other.reference.link.markdown'],
    settings: {
      foreground: '#FFB62C'
    }
  },

  {
    name: 'Markdown - Fenced Bode Block Variable',
    scope: [
      'markup.fenced_code.block.markdown',
      'markup.inline.raw.string.markdown'
    ],
    settings: {
      foreground: '#90A4AE'
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
  }
]
