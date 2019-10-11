export const MOBX = 'mobx';
export const REDUX = 'redux';
export const types = [MOBX, REDUX];

const fs = require('fs');
const { spawn } = require('child_process');

function buildTpl(type, name) {
    if (fs.existsSync(name)) {
        return console.error(`project ${name} has existed`);
    }

}
module.exports = function(type, name) {
    switch (type) {
        case MOBX:
        case REDUX:
            buildTpl(type, name);
            break;
        default:
            console.error("don't support this command");
    }
}