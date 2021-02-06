module.exports = {
    plugins: [
        '@babel/plugin-proposal-class-properties',
        ['babel-plugin-root-import', {
            "rootPathSuffix": "src/",
            "rootPathPrefix": "@/"
        }]
    ],
    presets: [
        '@babel/typescript',
        ['@babel/env', {
            targets: {
                esmodules: true,
            },
        },],
        '@babel/react',
    ],
};
