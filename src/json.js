const vars = require('./var')

module.exports = [
  {
    name: 'JSON Key - Level 0',
    scope:
      'source.json meta.structure.dictionary.json support.type.property-name.json',
    settings: {
      foreground: vars.common
    }
  },
  {
    name: 'JSON Key - Level 1',
    scope:
      'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
    settings: {
      foreground: '#FFB62C'
    }
  },
  {
    name: 'JSON Key - Level 2',
    scope:
      'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
    settings: {
      foreground: '#F76D47'
    }
  },
  {
    name: 'JSON Key - Level 3',
    scope:
      'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
    settings: {
      foreground: '#E53935'
    }
  },
  {
    name: 'JSON Key - Level 4',
    scope:
      'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
    settings: {
      foreground: '#C17E70'
    }
  },
  {
    name: 'JSON Key - Level 5',
    scope:
      'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
    settings: {
      foreground: '#6182B8'
    }
  },
  {
    name: 'JSON Key - Level 6',
    scope:
      'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
    settings: {
      foreground: '#FF5370'
    }
  },
  {
    name: 'JSON Key - Level 7',
    scope:
      'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
    settings: {
      foreground: '#7C4DFF'
    }
  },
  {
    name: 'JSON Key - Level 8',
    scope:
      'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
    settings: {
      foreground: '#91B859'
    }
  }
]
