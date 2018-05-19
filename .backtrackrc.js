'use strict';

module.exports = {
    presets: [['@backtrack/node-module', { flow: false }]],

    config: {
        jest: {
            snapshotSerializers: ['./'],
        },
    },
};
