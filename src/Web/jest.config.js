module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: [
        "js",
        "ts",
        "json"
    ],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.test.json',
            isolatedModules: true
        }
    },
    verbose: true,
    cacheDirectory: '.jest/cache'
};