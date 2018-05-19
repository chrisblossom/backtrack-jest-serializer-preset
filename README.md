# @backtrack/jest-serializer-preset

[![npm](https://img.shields.io/npm/v/@backtrack/jest-serializer-preset.svg?label=npm%20version)](https://www.npmjs.com/package/@backtrack/jest-serializer-preset)
[![Linux Build Status](https://img.shields.io/circleci/project/github/chrisblossom/backtrack-jest-serializer-preset/master.svg?label=linux%20build)](https://circleci.com/gh/chrisblossom/backtrack-jest-serializer-preset/tree/master)
[![Windows Build Status](https://img.shields.io/appveyor/ci/chrisblossom/backtrack-jest-serializer-preset/master.svg?label=windows%20build)](https://ci.appveyor.com/project/chrisblossom/backtrack-jest-serializer-preset/branch/master)
[![Code Coverage](https://img.shields.io/coveralls/github/chrisblossom/backtrack-jest-serializer-preset/master.svg)](https://coveralls.io/github/chrisblossom/backtrack-jest-serializer-preset?branch=master)

## About

Jest Snapshot Serializer for [backtrack](https://github.com/chrisblossom/backtrack) presets. Included with [`@backtrack/preset-preset`](https://github.com/chrisblossom/backtrack-preset-preset).

## Features

*   Removes file hashes from destination copy object

## Installation

`npm install --save-dev @backtrack/jest-serializer-preset`

## Usage

```js
// jest.config.js

'use strict';

module.exports = {
    snapshotSerializers: ['@backtrack/jest-serializer-preset'],
};
```

```js
// individual tests
const backtrackJestSerializerPreset = require('@backtrack/jest-serializer-preset');

expect.addSnapshotSerializer(backtrackJestSerializerPreset);
```
