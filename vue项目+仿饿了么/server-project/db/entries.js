const https = require('https')
const {
    insert
} = require('./db')
// 爬取数据插入到数据库
https.get('https://h5.ele.me/restapi/shopping/v2/entries?latitude=23.130061&longitude=113.264499&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template&terminal=h5', (res) => {
    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => {
        rawData += chunk;
    });
    res.on('end', () => {
        let entries = JSON.parse(rawData)[0].entries
        console.log(entries)
        entries.forEach(element => {
            let url = element.image_hash.slice(0, 3) + '/' + element.image_hash.slice(3);
            url = url.slice(0, 1) + '/' + url.slice(1);
            url = `https://cube.elemecdn.com/${url}.jpeg?
          x-oss-process=image/format,webp/resize,w_120,h_120,m_fixed`;
            insert('elm1', [{
                name: element.name,
                imgurl: url
            }])
        });
    });
}).on('error', (e) => {
    console.error(`出现错误: ${e.message}`);
});