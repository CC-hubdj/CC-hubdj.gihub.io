const https = require('https')
const {
    insert
} = require('./db')
https.get('https://h5.ele.me/pizza/shopping/restaurants/E6097128983499271907/batch_shop?code=0.6361353443197786&extras=%5B%22activities%22%2C%22albums%22%2C%22license%22%2C%22identification%22%2C%22qualification%22%5D&terminal=h5&latitude=23.130061&longitude=113.264499', (res) => {
    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => {
        rawData += chunk;
    });
    res.on('end', () => {
        let menu = JSON.parse(rawData).menu;
        console.log(menu)
        insert('menu', [...menu])
    });
}).on('error', (e) => {
    console.error(`出现错误: ${e.message}`);
});