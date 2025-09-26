// eslint-disable-next-line @typescript-eslint/no-require-imports, no-undef
const { alias } = require('react-app-rewire-alias');

// eslint-disable-next-line no-undef
module.exports = function override(config) {
    alias({
        '@src': 'src/',
        '@components': 'src/components',
        '@pages': 'src/pages',
        '@redux': 'src/redux',
    })(config);
    return config;
};
