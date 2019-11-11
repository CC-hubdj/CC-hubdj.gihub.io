const https = require('https')
const {
    insert
} = require('./db')
https.get('https://h5.ele.me/pizza/shopping/restaurants/E6097128983499271907/batch_shop?code=0.954267677052562&extras=%5B%22activities%22%2C%22albums%22%2C%22license%22%2C%22identification%22%2C%22qualification%22%5D&terminal=h5&latitude=23.130061&longitude=113.264499', (res) => {
    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => {
        rawData += chunk;
    });
    res.on('end', () => {
        let recommend = JSON.parse(rawData).recommend[0].items;
        console.log(recommend)
        // 启动数据库
        recommend.forEach(element => {
            let str = '';
            if (element.image_path.indexOf('png') > 0) {
                str = 'png';
            } else {
                str = 'jpeg';
            }
            let url = element.image_path.slice(0, 3) + '/' + element.image_path.slice(3);
            url = url.slice(0, 1) + '/' + url.slice(1);
            // console.log(url)
            url = `https://cube.elemecdn.com/${url}.${str}?x-oss-process=image/resize,m_lfit,w_240/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp`;
            insert('recommend', [{
                imgurl: url,
                shopName: element.name,
                tips: element.tips,
                lowest_price: element.lowest_price,
            }])
        });
    });
}).on('error', (e) => {
    console.error(`出现错误: ${e.message}`);
});