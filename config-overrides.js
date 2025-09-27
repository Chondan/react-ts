// eslint-disable-next-line @typescript-eslint/no-require-imports, no-undef
const { alias } = require('react-app-rewire-alias');

// eslint-disable-next-line no-undef
module.exports = function override(config) {
    alias({
        '@components': 'src/components',
        '@config': 'src/config',
        '@redux': 'src/redux',
        '@src': 'src/',
    })(config);
    return config;
};
