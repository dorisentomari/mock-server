const path = require('path');
const fs = require('fs');

// 根目录
const appDirectory = fs.realpathSync(process.cwd());

// 依据根目录，找到相对文件或相对目录
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
    // 解析 env 环境变量
    dotenv: resolveApp('.env'),
    // 项目根目录
    appPath: resolveApp('.'),
    // 项目打包的目录
    appBuild: resolveApp('build'),
    // package.json 的路径
    appPackageJson: resolveApp('package.json'),
    // src 目录
    appSrc: resolveApp('src'),
    // tsconfig 的路径
    appTsConfig: resolveApp('tsconfig.json'),
    // jsconfig 的路径
    appJsConfig: resolveApp('jsconfig.json'),
    // yarn.lock 文件的路径
    // node_modules 的目录路径
    appNodeModules: resolveApp('node_modules'),
};
