/**
 * 米白色主题
 * @author yutent<yutent@doui.cc>
 * @date 2018/12/01 13:33:44
 */

'use strict'

const fs = require('iofs')
const path = require('path')

const colors = require('./src/colors')

const base = require('./src/base')
const es = require('./src/es')
const php = require('./src/php')
const html = require('./src/html')
const markdown = require('./src/markdown')
const json = require('./src/json')
const tokenColors = [].concat(base, html, es, php, markdown, json)

for (let it of tokenColors) {
  if (Array.isArray(it.scope)) {
    it.scope = it.scope.join(', ')
  }
}

const theme = {
  name: '米白色主题',
  type: 'light',
  colors,
  tokenColors
}

fs.echo(JSON.stringify(theme, '', 2), path.join('./themes', 'color-theme.json'))
console.log('Build complete...')
