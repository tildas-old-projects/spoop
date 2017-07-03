#!/usr/bin/env node
const helper = require('meow')
const color = require('chalk')
const fetch = require('snekfetch')
const cli = helper(`
This is spoop, a spoopy.link CLI.
Usage: $ spoop ${color.green('your link')}
Have fun!
`)
function check(url) {
  fetch.get('https://spoopy.link/json/' + url)
}
function load(url) {
  check(url)
}
load(cli.input[0])
