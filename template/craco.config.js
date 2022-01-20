const CracoAlias = require('craco-alias');
const DirectImport = require('babel-plugin-direct-import');

module.exports = {
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                source: 'tsconfig',
                baseUrl: '.',
                tsConfigPath: './tsconfig.paths.json'
            }
        },

        {
            plugin: DirectImport,
            options: {
                modules: ['@mui/material', '@mui/icons-material']
            }
        }
    ]
}