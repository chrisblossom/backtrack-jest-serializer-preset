'use strict';

module.exports = {
	presets: [
		[
			'@backtrack/node',
			{ mode: 'module', syntax: 'node' },
		],
	],

	config: {
		jest: {
			snapshotSerializers: ['./lib/jest-serializer-preset.js'],
		},
	},
};
