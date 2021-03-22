const dotenv = require('dotenv');
const fs = require('fs');

const paths = require('./paths');

const NODE_ENV = process.env.NODE_ENV;

function getProcessEnv() {
    const result = {};

    const dotenvFiles = [
        `${paths.appPath}/.env`,
        `${paths.appPath}/.env.local`,
        `${paths.appPath}/.env.${NODE_ENV}.local`,
        `${paths.appPath}/.env.${NODE_ENV}`,
    ].filter(Boolean);

    dotenvFiles.forEach(dotenvFile => {
        if (fs.existsSync(dotenvFile)) {
            const envObj = dotenv.config({path: dotenvFile,}).parsed;
            Object.keys(envObj).forEach(key => {
                process.env[key] = envObj[key];
            });
        }
    });
    result.NODE_ENV = NODE_ENV;
    return result;
}

(() => {
    getProcessEnv();
})();
