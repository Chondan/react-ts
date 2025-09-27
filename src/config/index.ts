const environment = process.env.REACT_APP_NODE_ENV;

export const config = {
    common: {
        environment,
    },
    greeting: process.env.REACT_APP_GREETING,
};
