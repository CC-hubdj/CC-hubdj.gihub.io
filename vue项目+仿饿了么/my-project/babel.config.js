module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset'
    ],
    // 引入组件
    // babel-plugin-import 是一款 babel 插件，它会在编译过程中将 import 的写法自动转换为按需引入的方式
    plugins: [
        ['import', {
            libraryName: 'vant',
            libraryDirectory: 'es',
            style: true
        }, 'vant']
    ]
}