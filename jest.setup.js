import 'whatwg-fetch'; // <-- yarn add whatwg-fetch


module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
}
