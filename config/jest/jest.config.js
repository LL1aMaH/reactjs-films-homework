module.exports = {
  rootDir: '../../src',
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{js,jsx}'],
  coveragePathIgnorePatterns: ['index.js'],
  coverageDirectory: '../coverage',
  moduleNameMapper: {
    '\\.(scss)$': 'identity-obj-proxy',
  },
};
