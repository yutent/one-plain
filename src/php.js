const vars = require('./var')

module.exports = [
  {
    name: 'Class name php',
    scope: [
      'support.function.construct.php',
      'variable.other.php',
      'keyword.operator.logical.php',
      'punctuation.definition.variable.php',
      'string.quoted.single.php',
      'constant.numeric.decimal.php',
      'support.function.array.php',
      'support.function.mbstring.php',

      'variable.other.global.safer.php',
      'support.function.datetime.php'
    ],
    settings: {
      foreground: '#a7beca',
      fontStyle: 'italic'
    }
  },
  {
    name: 'Class name php',
    scope: [
      'punctuation.section.embedded.begin.php',
      'punctuation.section.embedded.end.php',
      'punctuation.terminator.statement.php',
      'punctuation.definition.begin.bracket.round.php',
      'punctuation.definition.end.bracket.round.php',
      'punctuation.definition.arguments.begin.bracket.round.php',
      'punctuation.definition.arguments.end.bracket.round.php',
      'punctuation.terminator.expression.php',
      'punctuation.section.array.begin.php',
      'punctuation.section.array.end.php',
      'punctuation.definition.string.begin.php',
      'punctuation.definition.string.end.php',
      'keyword.control.if.php',
      'keyword.control.elseif.php',
      'keyword.control.endif.php',
      'keyword.control.foreach.php',
      'keyword.control.endforeach.php',
      'keyword.control.import.include.php'
    ],
    settings: {
      foreground: vars.grey1,
      fontStyle: 'italic'
    }
  },
  {
    name: 'Class name php',
    scope: [
      'keyword.operator.comparison.php',
      'keyword.operator.ternary.php',
      'keyword.operator.assignment.php',
      'keyword.operator.string.php',
      'keyword.operator.key.php'
    ],
    settings: {
      foreground: vars.plain3,
      fontStyle: 'italic'
    }
  }
]
