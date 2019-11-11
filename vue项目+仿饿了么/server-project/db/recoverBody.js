const https = require('https')
const {
    insert
} = require('./db')
https.get('https://h5.ele.me/restapi/member/gifts/suggest', (res) => {
    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => {
        rawData += chunk;
    });
    res.on('end', () => {
        let RecoverBody = JSON.parse(rawData)
        console.log(RecoverBody)
        // 启动数据库
        RecoverBody.forEach(element => {
            let str = '';
            if (element.image_hash.indexOf('png') > 0) {
                str = 'png';
            } else {
                str = 'jpeg';
            }
            let url = element.image_hash.slice(0, 3) + '/' + element.image_hash.slice(3);
            url = url.slice(0, 1) + '/' + url.slice(1);
            url = `https://cube.elemecdn.com/${url}.${str}?x-oss-process=image/format,webp`;
            insert('recoverBody', [{
                corner_marker: element.corner_marker,
                imgurl: url,
                original_price: element.original_price,
                points_required: element.points_required,
                title: element.title,
            }])
        });
    });
}).on('error', (e) => {
    console.error(`出现错误: ${e.message}`);
});