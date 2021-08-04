import { v4 as uuidv4 } from 'uuid';
import ChopS from './audioTest/06_Chop Suey.mp3'
import InTheAnd from './audioTest/08 - In the End.mp3'
import MikeShinoda from "./audioTest/Mike Shinoda - Promises I Can't Keep.mp3"
import Evanescence from "./audioTest/08. Evanescence - Taking Over Me.mp3"

function musiclibrary(){
    return[
        {
            name: 'Lavish',
            cover:'https://chillhop.com/wp-content/uploads/2021/05/732128e1da8fd5f6292ffc1926a2ea840a54f4d0-1024x1024.jpg',
            artist:'Toonorth',
            audio:'https://mp3.chillhop.com/serve.php/?mp3=17933',
            color:['#436897','#252838'],
            id:uuidv4(),
            active: true
        },
        {
            name: 'Simplexity',
            cover:'https://chillhop.com/wp-content/uploads/2021/04/cb0cc6270d7f2e1bb13e44e8832bd5c9b2a61080-1024x1024.jpg',
            artist:'Evil Needle',
            audio:'https://mp3.chillhop.com/serve.php/?mp3=14958',
            color:['#E6A156','#EF464D'],
            id:uuidv4(),
            active: false
        },
        {
            name: 'Coda',
            cover:'https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg',
            artist:'Aarigod',
            audio:'https://mp3.chillhop.com/serve.php/?mp3=13005',
            color:['#B9D276','#19220F'],
            id:uuidv4(),
            active: false
        },

        {
            name: 'Cruising',
            cover:'https://chillhop.com/wp-content/uploads/2021/04/cb0cc6270d7f2e1bb13e44e8832bd5c9b2a61080-1024x1024.jpg',
            artist:'Evil Needle',
            audio:'https://mp3.chillhop.com/serve.php/?mp3=17087',
            color:['#E6A156','#EF464D'],
            id:uuidv4(),
            active: false
        },

        {
            name: 'By Chance',
            cover:'https://chillhop.com/wp-content/uploads/2021/03/74d62bc9370a68e440c1b98eaf650344f0a7faea-1024x1024.jpg',
            artist:'SwuM',
            audio:'https://mp3.chillhop.com/serve.php/?mp3=15224',
            color:['#54422C','#263133'],
            id:uuidv4(),
            active: false
        },
        {
            name: 'Skates',
            cover:'https://chillhop.com/wp-content/uploads/2021/03/74d62bc9370a68e440c1b98eaf650344f0a7faea-1024x1024.jpg',
            artist:'SwuM',
            audio:'https://mp3.chillhop.com/serve.php/?mp3=15226',
            color:['#54422C','#263133'],
            id:uuidv4(),
            active: false
        },
        {
            name: 'Kinsfolk',
            cover:'https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg',
            artist:'Aarigod',
            audio:'https://mp3.chillhop.com/serve.php/?mp3=12997',
            color:['#B9D276','#19220F'],
            id:uuidv4(),
            active: false
        },
        {
            name: 'Dusk',
            cover:'https://chillhop.com/wp-content/uploads/2021/05/732128e1da8fd5f6292ffc1926a2ea840a54f4d0-1024x1024.jpg',
            artist:'Toonorth',
            audio:'https://mp3.chillhop.com/serve.php/?mp3=17925',
            color:['#394E69','#454B61'],
            id:uuidv4(),
            active: false
        },

        {
            name: 'In The End',
            cover:'https://avatars.yandex.net/get-music-content/63210/90e17f29.a.1910404-1/m1000x1000',
            artist:'Linkin Park',
            audio:InTheAnd,
            color:['#D9D7D2','#514E49'],
            id:uuidv4(),
            active: false
        },
        {
            name: 'Chop Suey!',
            cover:'https://avatars.yandex.net/get-music-content/142001/5f909cfc.a.624758-3/m1000x1000',
            artist:'System of a Down',
            audio:ChopS,
            color:['#9C703F','#B6A393'],
            id:uuidv4(),
            active: false
        },
        {
            name: "Promises I Can't Keep",
            cover:'https://avatars.yandex.net/get-music-content/117546/e88313dd.a.6935042-2/m1000x1000',
            artist:'Mike Shinoda',
            audio:MikeShinoda,
            color:['#D0CED1','#49291C'],
            id:uuidv4(),
            active: false
        },
        {
            name: 'Taking Over Me',
            cover:'https://avatars.yandex.net/get-music-content/34131/e07c415d.a.33097-1/m1000x1000',
            artist:'Evanescence',
            audio:Evanescence,
            color:['#D6E8EE','#0E559D'],
            id:uuidv4(),
            active: false
        },


    ]
}

export default musiclibrary
