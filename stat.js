#! /usr/bin/env node

const fs = require('fs')

const stat = fs.statSync('./file')

console.log(stat)
