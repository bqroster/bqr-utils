module.exports = {
    verbose: true,
    roots: [
        "<rootDir>/__tests__"
    ],
    "moduleFileExtensions": [
        "js",
        "json"
    ],
    "transform": {
        "^.+\\.js$": "babel-jest"
    },
    "moduleDirectories": ["node_modules"],
    "moduleNameMapper": {
      '^@utils$': '<rootDir>/src/index.js',
    }
};