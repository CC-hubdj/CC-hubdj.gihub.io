const https = require('https')
const {
    insert
} = require('./db')
https.get('https://h5.ele.me/restapi/shopping/v3/restaurants?latitude=23.129112&longitude=113.264385&offset=0&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5', (res) => {
    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => {
        rawData += chunk;
    });
    res.on('end', () => {
        let restaurants = JSON.parse(rawData).items
        console.log(restaurants)
        // 启动数据库
        restaurants.forEach(element => {
            let str = '';
            if (element.restaurant.image_path.indexOf('png') > 0) {
                str = 'png';
            } else {
                str = 'jpeg';
            }
            let url = element.restaurant.image_path.slice(0, 3) + '/' + element.restaurant.image_path.slice(3);
            url = url.slice(0, 1) + '/' + url.slice(1);
            url = `https://cube.elemecdn.com/${url}.${str}?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed`;
            insert('restaurant2', [{
                name: element.restaurant.name,
                business_info: JSON.stringify(element.restaurant.business_info),
                rating: element.restaurant.rating,
                rating_count: element.restaurant.rating_count,
                recent_order_num: element.restaurant.recent_order_num,
                next_business_time: element.restaurant.next_business_time,
                description: element.restaurant.description,
                distance: element.restaurant.distance,
                imgurl: url,
                activities: element.restaurant.activities,
                resNum:element.restaurant
            }])
        });
    });
}).on('error', (e) => {
    console.error(`出现错误: ${e.message}`);
});