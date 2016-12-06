/*news: {
    _id:1, //MongoId
    id_user:1, //MongoId
    title: "Заголовок", //String
    date_public: 12345, //Unix Time Stamp
    img_url: "persik.png", //Image URL
    description: "Краткий текст новости", //String
    text: "Полный текст новости", //String
    keywords: ["Бугагашка","Ололошка"], //Array of String
    is_moderate: false, //Boolean
    like_count: 999, //Int Number
    is_like: true //Boolean
}
user: {
    name: "axelofan", //String
}*/
const news = [
    {   
        _id: '91caecb02aa7e28e67e17b2e',
        title: 'Блогеры переоделись в ниндзя, чтобы раздать подарки бездомным',
        description: 'Видеоблогер Райан Хига и его друзья переоделись в ниндзя, чтобы раздать подарки бездомным в Лас-Вегасе. Они незаметно оставляли подарочные пакеты с едой, теплой одеждой и одеялами рядом с бездомными.',
        img_url: 'https://meduza.io/image/attachments/images/000/041/438/small/ZJ9sLP2Jf_vtGI2EsgDl2g.jpg',
        like_count: 35,
        is_like:true,
        keywords: ["Бугагашка","Ололошка"],
        date_public:1480599044976,
        user: {
            name: "axelofan"
        }
    },
    {   
        _id: '627073ba172e23b1e51cf768',
        title: 'Блогеры переоделись в ниндзя, чтобы раздать подарки бездомным',
        description: 'Видеоблогер Райан Хига и его друзья переоделись в ниндзя, чтобы раздать подарки бездомным в Лас-Вегасе. Они незаметно оставляли подарочные пакеты с едой, теплой одеждой и одеялами рядом с бездомными.',
        img_url: 'https://meduza.io/image/attachments/images/000/041/438/small/ZJ9sLP2Jf_vtGI2EsgDl2g.jpg',
        like_count: 48,
        is_like:false,
        keywords: ["Бугагашка","Ололошка"],
        date_public:1480494325000,
        user: {
            name: "axelofan"
        }
    },
    {   
        _id: '6f3f6aa4f7b302bf6f4139bf',
        title: 'Блогеры переоделись в ниндзя, чтобы раздать подарки бездомным',
        description: 'Видеоблогер Райан Хига и его друзья переоделись в ниндзя, чтобы раздать подарки бездомным в Лас-Вегасе. Они незаметно оставляли подарочные пакеты с едой, теплой одеждой и одеялами рядом с бездомными.',
        img_url: 'https://meduza.io/image/attachments/images/000/041/438/small/ZJ9sLP2Jf_vtGI2EsgDl2g.jpg',
        like_count: 12,
        is_like:true,
        keywords: ["Бугагашка","Ололошка"],
        date_public:1478766325000,
        user: {
            name: "axelofan"
        }
    },
    {   
        _id: '80ca146a814c1e89f3040c18',
        title: 'Блогеры переоделись в ниндзя, чтобы раздать подарки бездомным',
        description: 'Видеоблогер Райан Хига и его друзья переоделись в ниндзя, чтобы раздать подарки бездомным в Лас-Вегасе. Они незаметно оставляли подарочные пакеты с едой, теплой одеждой и одеялами рядом с бездомными.',
        img_url: 'https://meduza.io/image/attachments/images/000/041/438/small/ZJ9sLP2Jf_vtGI2EsgDl2g.jpg',
        like_count: 4,
        is_like: true,
        keywords: ["Бугагашка","Ололошка"],
        date_public:1480603164166,
        user: {
            name: "axelofan"
        }
    },
    {   
        _id: '7ebc58cbf90703c2c85ae873',
        title: 'Блогеры переоделись в ниндзя, чтобы раздать подарки бездомным',
        description: 'Видеоблогер Райан Хига и его друзья переоделись в ниндзя, чтобы раздать подарки бездомным в Лас-Вегасе. Они незаметно оставляли подарочные пакеты с едой, теплой одеждой и одеялами рядом с бездомными.',
        img_url: 'https://meduza.io/image/attachments/images/000/041/438/small/ZJ9sLP2Jf_vtGI2EsgDl2g.jpg',
        like_count: 0,
        is_like:false,
        keywords: ["Бугагашка","Ололошка"],
        date_public:1480599044976,
        user: {
            name: "axelofan"
        }
    }
];

export default news;