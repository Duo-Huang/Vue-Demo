const presets = [
    [
        "@babel/preset-env",
        {
            targets: {
                chrome: "58",
                ie: "11",
                firefox: "60",
                chrome: "67",
                safari: "11.1",
            },
            useBuiltIns: "entry",
        },
    ]
];

const plugins = ["@babel/plugin-syntax-dynamic-import", [
    "component",
    {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
    }
]]

module.exports = { presets, plugins };