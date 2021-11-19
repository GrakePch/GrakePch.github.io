function importAllSvg(r) {
  let k = r.keys()
  let l = r.keys().map(r);
  let d = {}
  for (let i = 0; i < l.length; i++) {
    d[k[i].replace(/^.*[\\/]/, '').replace(/\.svg$/, '')] = l[i]
  }
  return d
}

function importAllImg(r) {
  let k = r.keys()
  let l = r.keys().map(r);
  let d = {}
  for (let i = 0; i < l.length; i++) {
    d[k[i].replace(/^.*[\\/]/, '').replace(/\.(png|jpe?g|svg)$/, '')] = l[i]
  }
  return d
}


const icons = importAllSvg(require.context('../assets/project-icons/', false, /\.svg$/));
const covers = importAllImg(require.context('../assets/project-covers/', false, /\.(png|jpe?g|svg)$/));

/*
  title: [
    "",
    "",
  ],
  date: [,],
  icon: icons[""].default,
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
        icon: icons["bpext"].default,
      },
      "9squares": {
        title: [
          "9-Squares Textures",
          "九宫格材质"
        ],
        date: [2019, 7],
        icon: icons["9squares"].default,
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
        icon: icons["pentagon331"].default,
        cover: covers["pentagon331"].default,
        intro: "A mod of 3x3x1 Super Floppy Cube.",
      },
      "bandaged444": {
        title: [
          "Bandaged444",
          "四阶捆绑两轴"
        ],
        date: [2013, 11],
        icon: icons["bandaged444"].default,
        cover: covers["bandaged444"].default,
        intro: "A bandaged mod of 4x4x4 cube using cardboard.",
      },
      "bandaged333": {
        title: [
          "Bandaged333",
          "三阶捆绑两轴"
        ],
        date: [2012, 8],
        icon: icons["bandaged333"].default,
        cover: covers["bandaged333"].default,
        intro: "A bandaged mod of 3x3x3 cube using cardboard.",
      }
    }
  },
  "graphical-design": {
    title: [
      "Graphical Design",
      "平面设计"
    ],
    children: {
      "gztime": {
        title: [
          "GZTime logo",
          "GZTime 标志"
        ],
        date: [2019, 6],
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
        icon: icons["bs-shield-op-rise"].default,
      },
      "wave_partical": {
        title: [
          "Improvisation: Wave-particle",
          "即兴作：波粒二象性",
        ],
        date: [2017, 5],
        icon: icons["impr-wave-particle"].default,
      },
      "permutation": {
        title: [
          "Improvisation: Permutation",
          "即兴作：排列组合",
        ],
        date: [2017, 3],
        icon: icons["impr-permutation"].default,
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
        icon: icons["carrack"].default,
        cover: covers["carrack"].default,
      }
    }
  },
}