// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "亲爱的占越", 
        "在这特别的日子", 
        "我为你送上最近的祝福", 
        "生日快乐呀！", //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "願你下雨時身邊有傘",  // 同上...
        "願你每次跑圖都炸花",
        "願你抬頭便有美麗的天空",
        "願你烤的每一片吐司都剛剛好",
        "願你在繁星中抓住最鍾意的那顆",
        "願你嘗試的美食比想像中更好吃",
        "願你在換季的衣服裡發現零錢",
        "願你做過的美夢都不會忘記",
        "願你永遠平安喜樂美麗動人",
        "在每一個瞬間感到幸福",
        "縱使時光流轉",
        "那份心情卻不會改變",
        "感謝你帶給我的每一天❤",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        //"我为你送上最近的祝福": "./imgs/1.png",
        //"願你下雨時身邊有傘": "./imgs/2.png",  
        //"願你每次跑圖都炸花": "./imgs/3.png",
        //"願你抬頭便有美麗的天空": "./imgs/4.png",
        //"願你烤的每一片土司都剛剛好": "./imgs/5.png",
        //"願你在繁星中抓住最鍾意的那顆": "./imgs/6.png",
        //"願你嘗試的美食比想像中更好吃": "./imgs/7.png",
        //"願你在換季的衣服裡發現零錢": "./imgs/8.png",
        //"願你做過的美夢都不會忘記": "./imgs/9.png",
        //"願你永遠平安喜樂美麗動人": "./imgs/10.png",

        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "開始",
        play: "音樂",
        bannar_coming: "横幅~",
        balloons_flying: "好像少點東西...",
        cake_fadein: "蛋糕？",
        light_candle: "蠟燭？",
        wish_message: "生日快樂！",
        story: "A MESSAGE FOR YOU",
    }
};
