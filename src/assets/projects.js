const icons = function (r) {
  let k = r.keys()
  let l = r.keys().map(r);
  let d = {}
  for (let i = 0; i < l.length; i++) {
    d[k[i].replace(/^.*[\\/]/, '').replace(/\.svg$/, '')] = l[i].default
  }
  return d
}(require.context('../assets/project-icons/', false, /\.svg$/));

const covers = function (r) {
  let k = r.keys()
  let l = r.keys().map(r);
  let d = {}
  for (let i = 0; i < l.length; i++) {
    d[k[i].replace(/^.*[\\/]/, '').replace(/\.(png|jpe?g|svg)$/, '')] = l[i].default
  }
  return d
}(require.context('../assets/project-images/', false, /\.(png|jpe?g|svg)$/));

/*
  title: [
    "",
    "",
  ],
  date: [,],
  icon: icons[""],
*/

export const projects = {
  "minecraft-contents": {
    title: [
      "Minecraft Contents",
      "Minecraft作品",
    ],
    children: {
      "bpext": {
        title: [
          "BlockPixel Extend",
          "方块概念扩展"
        ],
        date: [2020, 6],
        icon: icons["bpext"],
        cover: covers["bpext"],
        intro: [
          "Fan-made add-ons of BlockPixel Resourcepack.",
          "方块概念资源包的粉丝作扩展包。"
        ]
      },
      "9squares": {
        title: [
          "9-Squares Textures",
          "九宫格材质"
        ],
        date: [2019, 7],
        icon: icons["9squares"],
        cover: covers["9squares"],
        intro: [
          "Original resourcepack series. (Temporarily stop updating)",
          "原创的资源包系列。（暂停更新）"
        ]
      },
    }
  },
  "twisty-puzzle-design": {
    title: [
      "Twisty Puzzle Design",
      "魔方设计"
    ],
    children: {
      "pengtagon331": {
        title: [
          "Pengtagon331",
          "五边形331"
        ],
        date: [2017, 4],
        icon: icons["pentagon331"],
        cover: covers["pentagon331"],
        intro: [
          "A mod of 3x3x1 Super Floppy Cube.",
          "一个3x3x1魔方的外形改造。"
        ]
      },
      "bandaged444": {
        title: [
          "Bandaged444",
          "四阶捆绑两轴"
        ],
        date: [2013, 11],
        icon: icons["bandaged444"],
        cover: covers["bandaged444"],
        intro: [
          "A bandaged mod of 4x4x4 cube using cardboard.",
          "一个四阶魔方的捆绑改造，用纸板制作。"
        ]
      },
      "bandaged333": {
        title: [
          "Bandaged333",
          "三阶捆绑两轴"
        ],
        date: [2012, 8],
        icon: icons["bandaged333"],
        cover: covers["bandaged333"],
        intro: [
          "A bandaged mod of 3x3x3 cube using cardboard.",
          "一个三阶魔方的捆绑改造，用纸板制作。"
        ]
      }
    }
  },
  "graphic-design": {
    title: [
      "Graphic Design",
      "平面设计"
    ],
    children: {
      "gztime": {
        title: [
          "GZTime logo",
          "GZTime 标志"
        ],
        date: [2019, 6],
        cover: covers["gztime"],
        intro: [
          "A series of logo designed for my friend GZTime.",
          "为好友GZTime设计的标志系列"
        ]
      }
    }
  },
  "music-works": {
    title: [
      "Music Works",
      "音乐作品",
    ],
    children: {
      "bs-rise": {
        title: [
          "BlackScore: Rise [Shield Hero OP1]",
          "黑乐谱：Rise [盾之勇者成名录OP1]"
        ],
        date: [2020, 8],
        icon: icons["bs-shield-op-rise"],
      },
      "wave_partical": {
        title: [
          "Improvisation: Wave-particle",
          "即兴作：波粒二象性",
        ],
        date: [2017, 5],
        icon: icons["impr-wave-particle"],
      },
      "permutation": {
        title: [
          "Improvisation: Permutation",
          "即兴作：排列组合",
        ],
        date: [2017, 3],
        icon: icons["impr-permutation"],
      }
    }
  },
  "misc": {
    title: [
      "Miscellaneous",
      "杂项"
    ],
    children: {
      "carrack_exodus": {
        title: [
          "Carrack: Exodus",
          "克拉克：离家"
        ],
        date: [2020, 4],
        icon: icons["carrack"],
        cover: covers["carrack"],
      }
    }
  },
}