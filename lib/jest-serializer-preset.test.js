'use strict';

const {
	transformConfig,
} = require('@backtrack/core/dist/options-file/transform-config');
const { test: testFn } = require('./jest-serializer-preset');

describe('serializer', () => {
	test('removes hash from files dest object', () => {
		const backtrackConfig = {
			packageJson: { outside: true },
			files: [
				{ src: '__sandbox__/file1.js', dest: 'package.json' },
				{ src: '__sandbox__/file2.js', dest: '.babelrc.js' },
			],
		};

		const result = transformConfig(backtrackConfig, __dirname);

		expect(result).toMatchSnapshot();
	});
});

describe('test', () => {
	const baseFiles = {
		files: [
			'package.json',
			'.babelrc.js',
		],
		absolute: {
			'package.json': 'backtrack-jest-serializer-preset/package.json',
			'.babelrc.js': 'backtrack-jest-serializer-preset/.babelrc.js',
		},
		hash: {
			'package.json':
				'8ecbd0ea1db68b7e5e44874b579d104a1d65d654276dcf089738018edab680a0',
			'.babelrc.js': '',
		},
		allowChanges: { 'package.json': false, '.babelrc.js': false },
		ignoreUpdates: { 'package.json': false, '.babelrc.js': false },
	};

	test('handles dest files', () => {
		const result = testFn(baseFiles);

		expect(result).toEqual(true);
	});

	test('handles null obj', () => {
		const obj = null;

		const result = testFn(obj);

		expect(result).toEqual(false);
	});

	test('handles null files', () => {
		const obj = {
			...baseFiles,
			files: null,
		};

		const result = testFn(obj);

		expect(result).toEqual(false);
	});

	test('handles string files', () => {
		const obj = {
			...baseFiles,
			files: 'some string',
		};

		const result = testFn(obj);

		expect(result).toEqual(false);
	});

	test('handles plain object files', () => {
		const obj = {
			...baseFiles,
			files: {},
		};

		const result = testFn(obj);

		expect(result).toEqual(false);
	});
});
