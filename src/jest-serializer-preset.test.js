import { transformConfig } from '@backtrack/core/dist/options-file/transform-config';

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
