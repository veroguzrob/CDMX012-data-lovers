import legends from './mockLol.js' 
import { filterRole, orderAlpha } from '../src/data.js';

describe('test del filtro por rol', () => {
  test('Filtrando los campeones', ()=>{
    expect (filterRole(Object.values(legends.data), 'Tank')).toStrictEqual([        
      {      
        version: '6.24.1',
        id: 'Alistar',
        key: '12',
        name: 'Alistar',
        title: 'the Minotaur',
        img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Alistar.png',
        splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg',
        blurb: "As the mightiest warrior to ever emerge from the Minotaur tribes of the Great Barrier, Alistar defended his tribe from Valoran's many dangers; that is, until the coming of the Noxian army. Alistar was lured from his village by the machinations of ...",
        info: { attack: 6, defense: 9, magic: 5, difficulty: 7 },
        image: {
          full: 'Alistar.png',
          sprite: 'champion0.png',
          group: 'champion',
          x: 144,
          y: 0,
          w: 48,
          h: 48
        },
        tags: [ 'Tank', 'Support' ],
        partype: 'MP',
        stats: {
          hp: 613.36,
          hpperlevel: 106,
          mp: 278.84,
          mpperlevel: 38,
          movespeed: 330,
          armor: 24.38,
          armorperlevel: 3.5,
          spellblock: 32.1,
          spellblockperlevel: 1.25,
          attackrange: 125,
          hpregen: 8.675,
          hpregenperlevel: 0.85,
          mpregen: 8.5,
          mpregenperlevel: 0.8,
          crit: 0,
          critperlevel: 0,
          attackdamage: 61.1116,
          attackdamageperlevel: 3.62,
          attackspeedoffset: 0,
          attackspeedperlevel: 2.125
        }
      },
      {
        version: '6.24.1',
        id: 'Amumu',
        key: '32',
        name: 'Amumu',
        title: 'the Sad Mummy',
        img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Amumu.png',
        splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_0.jpg',
        blurb: "''Solitude can be lonelier than death.''<br><br>A lonely and melancholy soul from ancient Shurima, Amumu roams the world in search of a friend. Cursed by an ancient spell, he is doomed to remain alone forever, as his touch is death and his affection ...",
        info: { attack: 2, defense: 6, magic: 8, difficulty: 3 },
        image: {
          full: 'Amumu.png',
          sprite: 'champion0.png',
          group: 'champion',
          x: 192,
          y: 0,
          w: 48,
          h: 48
        },
        tags: [ 'Tank', 'Mage' ],
        partype: 'MP',
        stats: {
          hp: 613.12,
          hpperlevel: 84,
          mp: 287.2,
          mpperlevel: 40,
          movespeed: 335,
          armor: 23.544,
          armorperlevel: 3.8,
          spellblock: 32.1,
          spellblockperlevel: 1.25,
          attackrange: 125,
          hpregen: 8.875,
          hpregenperlevel: 0.85,
          mpregen: 7.38,
          mpregenperlevel: 0.525,
          crit: 0,
          critperlevel: 0,
          attackdamage: 53.384,
          attackdamageperlevel: 3.8,
          attackspeedoffset: -0.02,
          attackspeedperlevel: 2.18
        }
      }
    ])
  })

  test('Evitar falsos positivos en filtrado por rol', ()=>{
    expect (filterRole(Object.values(legends.data), 'Tank')).not.toStrictEqual([        
      {
        version: "6.24.1",
        id: "Brand",
        key: "63",
        name: "Brand",
        title: "the Burning Vengeance",
        img:
          "https://www.masterypoints.com/assets/img/lol/champion_icons/Brand.png",
        splash:
          "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_0.jpg",
        blurb:
          "In a faraway place known as Lokfar there was a seafaring marauder called Kegan Rodhe. As was his people's way, Kegan sailed far and wide with his fellows, stealing treasures from those unlucky enough to catch their attention. To some, he was a ...",
        info: {
          attack: 2,
          defense: 2,
          magic: 9,
          difficulty: 4
        },
        image: {
          full: "Brand.png",
          sprite: "champion0.png",
          group: "champion",
          x: 96,
          y: 48,
          w: 48,
          h: 48
        },
        tags: ["Mage"],
        partype: "MP",
        stats: {
          hp: 507.68,
          hpperlevel: 76,
          mp: 375.6,
          mpperlevel: 42,
          movespeed: 340,
          armor: 21.88,
          armorperlevel: 3.5,
          spellblock: 30,
          spellblockperlevel: 0,
          attackrange: 550,
          hpregen: 5.42,
          hpregenperlevel: 0.55,
          mpregen: 8.005,
          mpregenperlevel: 0.6,
          crit: 0,
          critperlevel: 0,
          attackdamage: 57.04,
          attackdamageperlevel: 3,
          attackspeedoffset: 0,
          attackspeedperlevel: 1.36
        }
      }
    ])
  })

  test('Comprueba cuantos Tanks esta filtrando', ()=>{
    expect (filterRole(Object.values(legends.data), 'Tank')).toHaveLength(2)
  })

})

describe('Teste del filtro de ordenado', ()=>{
  test('Comprobar que ordena correctamente', ()=>{
    expect (orderAlpha(Object.values(legends.data))).toStrictEqual([        
      {      
        version: '6.24.1',
        id: 'Zyra',
        key: '143',
        name: 'Zyra',
        title: 'Rise of the Thorns',
        img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Zyra.png',
        splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zyra_0.jpg',
        blurb: 'Longing to take control of her fate, the ancient, dying plant Zyra transferred her consciousness into a human body for a second chance at life. Centuries ago, she and her kind dominated the Kumungu Jungle, using thorns and vines to consume any animal ...',
        info: { attack: 4, defense: 3, magic: 8, difficulty: 7 },
        image: {
          full: 'Zyra.png',
          sprite: 'champion4.png',
          group: 'champion',
          x: 0,
          y: 48,
          w: 48,
          h: 48
        },
        tags: [ 'Mage', 'Support' ],
        partype: 'MP',
        stats: {
          hp: 499.32,
          hpperlevel: 74,
          mp: 334,
          mpperlevel: 50,
          movespeed: 340,
          armor: 20.04,
          armorperlevel: 3,
          spellblock: 30,
          spellblockperlevel: 0,
          attackrange: 575,
          hpregen: 5.69,
          hpregenperlevel: 0.5,
          mpregen: 8.5,
          mpregenperlevel: 0.8,
          crit: 0,
          critperlevel: 0,
          attackdamage: 53.376,
          attackdamageperlevel: 3.2,
          attackspeedoffset: 0,
          attackspeedperlevel: 2.11
        }
      },
      {
        version: '6.24.1',
        id: 'Zilean',
        key: '26',
        name: 'Zilean',
        title: 'the Chronokeeper',
        img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Zilean.png',
        splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zilean_0.jpg',
        blurb: 'In the wastelands of Urtistan, there was once a great city. It perished long ago in a terrible Rune War, like most of the lands below the Great Barrier. Nevertheless, one man survived: a sorcerer named Zilean. Being obsessed with time, it was only ...',
        info: { attack: 2, defense: 5, magic: 8, difficulty: 6 },
        image: {
          full: 'Zilean.png',
          sprite: 'champion4.png',
          group: 'champion',
          x: 432,
          y: 0,
          w: 48,
          h: 48
        },
        tags: [ 'Support', 'Mage' ],
        partype: 'MP',
        stats: {
          hp: 499.28,
          hpperlevel: 77,
          mp: 360.8,
          mpperlevel: 60,
          movespeed: 335,
          armor: 19.134,
          armorperlevel: 3.8,
          spellblock: 30,
          spellblockperlevel: 0,
          attackrange: 550,
          hpregen: 5.44,
          hpregenperlevel: 0.5,
          mpregen: 8.5,
          mpregenperlevel: 0.8,
          crit: 0,
          critperlevel: 0,
          attackdamage: 51.64,
          attackdamageperlevel: 3,
          attackspeedoffset: 0,
          attackspeedperlevel: 2.13
        }
      },
      {
        version: '6.24.1',
        id: 'Brand',
        key: '63',
        name: 'Brand',
        title: 'the Burning Vengeance',
        img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Brand.png',
        splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_0.jpg',
        blurb: "In a faraway place known as Lokfar there was a seafaring marauder called Kegan Rodhe. As was his people's way, Kegan sailed far and wide with his fellows, stealing treasures from those unlucky enough to catch their attention. To some, he was a ...",
        info: { attack: 2, defense: 2, magic: 9, difficulty: 4 },
        image: {
          full: 'Brand.png',
          sprite: 'champion0.png',
          group: 'champion',
          x: 96,
          y: 48,
          w: 48,
          h: 48
        },
        tags: [ 'Mage' ],
        partype: 'MP',
        stats: {
          hp: 507.68,
          hpperlevel: 76,
          mp: 375.6,
          mpperlevel: 42,
          movespeed: 340,
          armor: 21.88,
          armorperlevel: 3.5,
          spellblock: 30,
          spellblockperlevel: 0,
          attackrange: 550,
          hpregen: 5.42,
          hpregenperlevel: 0.55,
          mpregen: 8.005,
          mpregenperlevel: 0.6,
          crit: 0,
          critperlevel: 0,
          attackdamage: 57.04,
          attackdamageperlevel: 3,
          attackspeedoffset: 0,
          attackspeedperlevel: 1.36
        }
      },
      {
        version: '6.24.1',
        id: 'Amumu',
        key: '32',
        name: 'Amumu',
        title: 'the Sad Mummy',
        img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Amumu.png',
        splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_0.jpg',
        blurb: "''Solitude can be lonelier than death.''<br><br>A lonely and melancholy soul from ancient Shurima, Amumu roams the world in search of a friend. Cursed by an ancient spell, he is doomed to remain alone forever, as his touch is death and his affection ...",
        info: { attack: 2, defense: 6, magic: 8, difficulty: 3 },
        image: {
          full: 'Amumu.png',
          sprite: 'champion0.png',
          group: 'champion',
          x: 192,
          y: 0,
          w: 48,
          h: 48
        },
        tags: [ 'Tank', 'Mage' ],
        partype: 'MP',
        stats: {
          hp: 613.12,
          hpperlevel: 84,
          mp: 287.2,
          mpperlevel: 40,
          movespeed: 335,
          armor: 23.544,
          armorperlevel: 3.8,
          spellblock: 32.1,
          spellblockperlevel: 1.25,
          attackrange: 125,
          hpregen: 8.875,
          hpregenperlevel: 0.85,
          mpregen: 7.38,
          mpregenperlevel: 0.525,
          crit: 0,
          critperlevel: 0,
          attackdamage: 53.384,
          attackdamageperlevel: 3.8,
          attackspeedoffset: -0.02,
          attackspeedperlevel: 2.18
        }
      },
      {
        version: '6.24.1',
        id: 'Alistar',
        key: '12',
        name: 'Alistar',
        title: 'the Minotaur',
        img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Alistar.png',
        splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg',
        blurb: "As the mightiest warrior to ever emerge from the Minotaur tribes of the Great Barrier, Alistar defended his tribe from Valoran's many dangers; that is, until the coming of the Noxian army. Alistar was lured from his village by the machinations of ...",
        info: { attack: 6, defense: 9, magic: 5, difficulty: 7 },
        image: {
          full: 'Alistar.png',
          sprite: 'champion0.png',
          group: 'champion',
          x: 144,
          y: 0,
          w: 48,
          h: 48
        },
        tags: [ 'Tank', 'Support' ],
        partype: 'MP',
        stats: {
          hp: 613.36,
          hpperlevel: 106,
          mp: 278.84,
          mpperlevel: 38,
          movespeed: 330,
          armor: 24.38,
          armorperlevel: 3.5,
          spellblock: 32.1,
          spellblockperlevel: 1.25,
          attackrange: 125,
          hpregen: 8.675,
          hpregenperlevel: 0.85,
          mpregen: 8.5,
          mpregenperlevel: 0.8,
          crit: 0,
          critperlevel: 0,
          attackdamage: 61.1116,
          attackdamageperlevel: 3.62,
          attackspeedoffset: 0,
          attackspeedperlevel: 2.125
        }
      }
    ])
  })

  test('Evitar un falso ordenado', ()=>{
    expect (orderAlpha(Object.values(legends.data))).not.toStrictEqual([        
      {
        version: "6.24.1",
        id: "Alistar",
        key: "12",
        name: "Alistar",
        title: "the Minotaur",
        img:
          "https://www.masterypoints.com/assets/img/lol/champion_icons/Alistar.png",
        splash:
          "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg",
        blurb:
          "As the mightiest warrior to ever emerge from the Minotaur tribes of the Great Barrier, Alistar defended his tribe from Valoran's many dangers; that is, until the coming of the Noxian army. Alistar was lured from his village by the machinations of ...",
        info: {
          attack: 6,
          defense: 9,
          magic: 5,
          difficulty: 7
        },
        image: {
          full: "Alistar.png",
          sprite: "champion0.png",
          group: "champion",
          x: 144,
          y: 0,
          w: 48,
          h: 48
        },
        tags: ["Tank", "Support"],
        partype: "MP",
        stats: {
          hp: 613.36,
          hpperlevel: 106,
          mp: 278.84,
          mpperlevel: 38,
          movespeed: 330,
          armor: 24.38,
          armorperlevel: 3.5,
          spellblock: 32.1,
          spellblockperlevel: 1.25,
          attackrange: 125,
          hpregen: 8.675,
          hpregenperlevel: 0.85,
          mpregen: 8.5,
          mpregenperlevel: 0.8,
          crit: 0,
          critperlevel: 0,
          attackdamage: 61.1116,
          attackdamageperlevel: 3.62,
          attackspeedoffset: 0,
          attackspeedperlevel: 2.125
        }
      },
      {
        version: "6.24.1",
        id: "Amumu",
        key: "32",
        name: "Amumu",
        title: "the Sad Mummy",
        img:
          "https://www.masterypoints.com/assets/img/lol/champion_icons/Amumu.png",
        splash:
          "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_0.jpg",
        blurb:
          "''Solitude can be lonelier than death.''<br><br>A lonely and melancholy soul from ancient Shurima, Amumu roams the world in search of a friend. Cursed by an ancient spell, he is doomed to remain alone forever, as his touch is death and his affection ...",
        info: {
          attack: 2,
          defense: 6,
          magic: 8,
          difficulty: 3
        },
        image: {
          full: "Amumu.png",
          sprite: "champion0.png",
          group: "champion",
          x: 192,
          y: 0,
          w: 48,
          h: 48
        },
        tags: ["Tank", "Mage"],
        partype: "MP",
        stats: {
          hp: 613.12,
          hpperlevel: 84,
          mp: 287.2,
          mpperlevel: 40,
          movespeed: 335,
          armor: 23.544,
          armorperlevel: 3.8,
          spellblock: 32.1,
          spellblockperlevel: 1.25,
          attackrange: 125,
          hpregen: 8.875,
          hpregenperlevel: 0.85,
          mpregen: 7.38,
          mpregenperlevel: 0.525,
          crit: 0,
          critperlevel: 0,
          attackdamage: 53.384,
          attackdamageperlevel: 3.8,
          attackspeedoffset: -0.02,
          attackspeedperlevel: 2.18
        }
      },
      {
        version: "6.24.1",
        id: "Brand",
        key: "63",
        name: "Brand",
        title: "the Burning Vengeance",
        img:
          "https://www.masterypoints.com/assets/img/lol/champion_icons/Brand.png",
        splash:
          "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_0.jpg",
        blurb:
          "In a faraway place known as Lokfar there was a seafaring marauder called Kegan Rodhe. As was his people's way, Kegan sailed far and wide with his fellows, stealing treasures from those unlucky enough to catch their attention. To some, he was a ...",
        info: {
          attack: 2,
          defense: 2,
          magic: 9,
          difficulty: 4
        },
        image: {
          full: "Brand.png",
          sprite: "champion0.png",
          group: "champion",
          x: 96,
          y: 48,
          w: 48,
          h: 48
        },
        tags: ["Mage"],
        partype: "MP",
        stats: {
          hp: 507.68,
          hpperlevel: 76,
          mp: 375.6,
          mpperlevel: 42,
          movespeed: 340,
          armor: 21.88,
          armorperlevel: 3.5,
          spellblock: 30,
          spellblockperlevel: 0,
          attackrange: 550,
          hpregen: 5.42,
          hpregenperlevel: 0.55,
          mpregen: 8.005,
          mpregenperlevel: 0.6,
          crit: 0,
          critperlevel: 0,
          attackdamage: 57.04,
          attackdamageperlevel: 3,
          attackspeedoffset: 0,
          attackspeedperlevel: 1.36
        }
      },
      {
        version: "6.24.1",
        id: "Zilean",
        key: "26",
        name: "Zilean",
        title: "the Chronokeeper",
        img:
          "https://www.masterypoints.com/assets/img/lol/champion_icons/Zilean.png",
        splash:
          "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zilean_0.jpg",
        blurb:
          "In the wastelands of Urtistan, there was once a great city. It perished long ago in a terrible Rune War, like most of the lands below the Great Barrier. Nevertheless, one man survived: a sorcerer named Zilean. Being obsessed with time, it was only ...",
        info: {
          attack: 2,
          defense: 5,
          magic: 8,
          difficulty: 6
        },
        image: {
          full: "Zilean.png",
          sprite: "champion4.png",
          group: "champion",
          x: 432,
          y: 0,
          w: 48,
          h: 48
        },
        tags: ["Support", "Mage"],
        partype: "MP",
        stats: {
          hp: 499.28,
          hpperlevel: 77,
          mp: 360.8,
          mpperlevel: 60,
          movespeed: 335,
          armor: 19.134,
          armorperlevel: 3.8,
          spellblock: 30,
          spellblockperlevel: 0,
          attackrange: 550,
          hpregen: 5.44,
          hpregenperlevel: 0.5,
          mpregen: 8.5,
          mpregenperlevel: 0.8,
          crit: 0,
          critperlevel: 0,
          attackdamage: 51.64,
          attackdamageperlevel: 3,
          attackspeedoffset: 0,
          attackspeedperlevel: 2.13
        }
      },
      {
        version: "6.24.1",
        id: "Zyra",
        key: "143",
        name: "Zyra",
        title: "Rise of the Thorns",
        img:
          "https://www.masterypoints.com/assets/img/lol/champion_icons/Zyra.png",
        splash:
          "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zyra_0.jpg",
        blurb:
          "Longing to take control of her fate, the ancient, dying plant Zyra transferred her consciousness into a human body for a second chance at life. Centuries ago, she and her kind dominated the Kumungu Jungle, using thorns and vines to consume any animal ...",
        info: {
          attack: 4,
          defense: 3,
          magic: 8,
          difficulty: 7
        },
        image: {
          full: "Zyra.png",
          sprite: "champion4.png",
          group: "champion",
          x: 0,
          y: 48,
          w: 48,
          h: 48
        },
        tags: ["Mage", "Support"],
        partype: "MP",
        stats: {
          hp: 499.32,
          hpperlevel: 74,
          mp: 334,
          mpperlevel: 50,
          movespeed: 340,
          armor: 20.04,
          armorperlevel: 3,
          spellblock: 30,
          spellblockperlevel: 0,
          attackrange: 575,
          hpregen: 5.69,
          hpregenperlevel: 0.5,
          mpregen: 8.5,
          mpregenperlevel: 0.8,
          crit: 0,
          critperlevel: 0,
          attackdamage: 53.376,
          attackdamageperlevel: 3.2,
          attackspeedoffset: 0,
          attackspeedperlevel: 2.11
        }
      }
    ])
  })

  test('Comprueba cuantos campeones esta ordenando', ()=>{
    expect (orderAlpha(Object.values(legends.data))).toHaveLength(5)
  })

})
