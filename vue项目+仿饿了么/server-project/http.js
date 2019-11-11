const http = require('http');// 内置模块

// 第三方模块
const jQuery = require('jquery');//提供DOM操作
//除了自定义模块之外，所有内置模块+第三方模块只需要模块名（它会默认去找node_modules），不需要任何相对模块
// node没有DOM和BOM,需要模拟(安装jdom)
// 前端模块：jquery 可以在浏览器中使用   后端模块：jsdom 在后端使用
const { JSDOM } = require('jsdom');//模拟DOM
const fs = require('fs');//用于读写
const request = require('request');//第三方模块

const mock = (html) => {
    // 模拟出一个window对象
    const { window } = new JSDOM(html);
    let $ = jQuery(window);
    return $;

}


// jq在前端就是一个操作DOM的库，在后端它其实就是一个网页分析库（在后端它可以分析出有价值的东西，然后把它提取出来）
// 请求该网页  http的get请求（一个网址）---返回一个响应头和响应体
http.get('http://www.umei.cc/p/gaoqing/cn/', {
    header: {
        // 请求体，必须在域名为i1.zhiaigou.com发送请求
        'Host': 'i1.zhiaigou.com'
    }
}, (res) => {
    // res流
    // 1、设置相应的数据格式
    res.setEncoding('utf8');
    // 2、用一个空的容器
    let rawData = '';
    // 3、监听数据，数据会一个个片段的形式存到rawData容器，如果数据非常大，建议用这种方式获取
    res.on('data', (chunk) => { rawData += chunk; });
    // 4、监听结束
    res.on('end', () => {
        // fs.writeFile('./index.html', rawData, () => { })
        let $ = mock(rawData);//最终拿到的html结构为rawData
        // 用$去获取图片信息
        $("img").each((index, element) => {
            let src = $(element).attr('src');
            request(src).pipe(fs.createWriteStream('./img/' + index + '.jpg'));//第三方模块下载
            // 下载
            // request({
            //     url:src,
            //     headers:{
            //         // 请求体，必须在域名为i1.zhiaigou.com发送请求
            //         'Host':'i1.zhiaigou.com',
            //         'Upgrade-Insecure-Requests':1
            //     }
            // }).pipe(fs.createWriteStream(`./imgs/${index.jpg}`))
        })
    })
})

// gulp.src('./xxx').pipe().pipe(gulp.dest('./'))文件流

// http.get(img, (res) => {
//     // 读取流
//     res.pipe(fs.createWriteStream('file.jpg'))
// })