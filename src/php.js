const vars = require('./var')

module.exports = [
  {
    name: 'PHP Constants',
    scope: [
      'constant.other.php',
      'support.constant.ext.php',
      'support.constant.std.php,support.constant.core.php',
      'support.constant.parser-token.php',
      'constant'
    ],
    settings: {
      foreground: '#ffb62c'
    }
  },
  {
    name: 'Class name php',
    scope: 'variable.other.class.php',
    settings: {
      foreground: '#e06c75'
    }
  },

  // 变量 以及 $this
  {
    name: 'php dollar sign',
    scope: [
      'punctuation.definition.variable.php',
      'variable.language.this.php'
    ],
    settings: {
      foreground: vars.common2
    }
  },

  {
    name: 'php heredoc/nowdoc',
    scope: 'keyword.operator.heredoc.php,keyword.operator.nowdoc.php',
    settings: {
      foreground: '#c678dd'
    }
  },
  {
    name: 'php goto',
    scope: 'entity.name.goto-label.php,support.other.php',
    settings: {
      foreground: '#61AFEF'
    }
  },
  {
    name: 'php logical/bitwise operator',
    scope:
      'keyword.operator.logical.php,keyword.operator.bitwise.php,keyword.operator.arithmetic.php',
    settings: {
      foreground: '#56b6c2'
    }
  },
  {
    name: 'php regexp operator',
    scope: 'keyword.operator.regexp.php',
    settings: {
      foreground: '#c678dd'
    }
  },
  {
    name: 'php comparison',
    scope: 'keyword.operator.comparison.php',
    settings: {
      foreground: '#56b6c2'
    }
  },

  {
    name: 'php instanceof',
    scope: 'keyword.operator.type.php',
    settings: {
      foreground: '#c678dd'
    }
  },

  {
    name: 'php illegal.non-null-typehinted',
    scope: 'invalid.illegal.non-null-typehinted.php',
    settings: {
      foreground: '#f44747'
    }
  },
  {
    name: 'php types',
    scope: [
      [
        'storage.type.php',
        'meta.other.type.phpdoc.php',
        'keyword.other.type.php',
        'keyword.other.array.phpdoc.php'
      ]
    ],
    settings: {
      foreground: '#ffb62c',
      fontStyle: 'bold italic'
    }
  },
  {
    name: 'php call-function',
    scope: [
      'meta.function-call.php',
      'meta.function-call.object.php',
      'meta.function-call.static.php'
    ],
    settings: {
      foreground: '#61AFEF'
    }
  },
  {
    name: 'laravel blade tag',
    scope: [
      'text.html.laravel-blade',
      'source.php.embedded.line.html',
      'entity.name.tag.laravel-blade'
    ],
    settings: {
      foreground: '#c678dd'
    }
  },
  {
    name: 'laravel blade @',
    scope: [
      'text.html.laravel-blade',
      'source.php.embedded.line.html',
      'support.constant.laravel-blade'
    ],
    settings: {
      foreground: '#c678dd'
    }
  },
  {
    name: 'use statement for other classes',
    scope: [
      'support.other.namespace.use.php',
      'support.other.namespace.use-as.php',
      'support.other.namespace.php',
      'entity.other.alias.php',
      'meta.interface.php'
    ],
    settings: {
      foreground: '#E5C07B'
    }
  }
]
