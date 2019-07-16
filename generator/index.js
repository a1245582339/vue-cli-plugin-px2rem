module.exports = api => {
    const utils = require('./utils')(api)
    api.render({
        './src/plugins/flexible.js': './template/src/plugins/flexible.js'
    })
    api.injectImports(utils.getMain(), `import './plugins/flexible.js'`)
}