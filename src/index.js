#!/usr/bin/env node

const commander = require('commander');

import { types } from './template'

types.forEach(type => {
    commander.version('1.0.0', '-v, --version')
    .command(`${type} <name>`)
    .action((name) => {
        console.log('name', name)
    })
})

commander.parse(process.argv);