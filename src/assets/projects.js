const icons = function (r) {
  let k = r.keys()
  let l = r.keys().map(r);
  let d = {}
  for (let i = 0; i < l.length; i++) {
    d[k[i].replace(/^.*[\\/]/, '').replace(/\.svg$/, '')] = l[i].default
  }
  return d
}(require.context('../assets/project-icons/', false, /\.svg$/));

const images = function (r) {
  let k = r.keys()
  let l = r.keys().map(r);
  let d = {}
  for (let i = 0; i < l.length; i++) {
    d[k[i].replace(/^.*[\\/]/, '').replace(/\.(png|jpe?g|svg|JPE?G)$/, '')] = l[i].default
  }
  return d
}(require.context('../assets/project-images/', true, /\.(png|jpe?g|svg|JPE?G)$/));

/*
  title: {
      en: 
    "",
    "",
  ],
  date: [,],
  icon: icons[""],
*/

console.log(images)

export const projects = {
  "minecraft-contents": {
    title: {
      en: "Minecraft Contents",
      zh: "Minecraft作品"
    },
    children: {
      "bpext": {
        title: {
          en: "BlockPixel Extend",
          zh: "方块概念扩展"
        },
        date: [2020, 6],
        icon: icons["bpext"],
        cover: images["bpext"],
        intro: {
          en: "Fan-made add-ons of BlockPixel Resourcepack.",
          zh: "方块概念资源包的粉丝作扩展包。"
        }
      },
      "9squares": {
        title: {
          en: "9-Squares Textures",
          zh: "九宫格材质"
        },
        date: [2019, 7],
        icon: icons["9squares"],
        cover: images["9squares"],
        intro: {
          en:
            "Original resourcepack series. (Temporarily stop updating)",
          zh: "原创的资源包系列。（暂停更新）"
        }
      },
    }
  },
  "twisty-puzzle-design": {
    title: {
      en: "Twisty Puzzle Design",
      zh: "魔方设计"
    },
    children: {
      "pengtagon331": {
        title: {
          en: "Pengtagon331",
          zh: "五边形331"
        },
        date: [2017, 4],
        icon: icons["pentagon331"],
        cover: images["pentagon331"],
        intro: {
          en: "A mod of 3x3x1 Super Floppy Cube.",
          zh: "一个3x3x1魔方的外形改造。"
        }
      },
      "bandaged444": {
        title: {
          en: "Bandaged444",
          zh: "四阶捆绑两轴"
        },
        date: [2013, 11],
        icon: icons["bandaged444"],
        cover: images["bandaged444"],
        intro: {
          en: "A bandaged mod of 4x4x4 cube using cardboard.",
          zh: "一个四阶魔方的捆绑改造，用纸板制作。"
        }
      },
      "bandaged333": {
        title: {
          en: "Bandaged333",
          zh: "三阶捆绑两轴"
        },
        date: [2012, 8],
        icon: icons["bandaged333"],
        cover: images["bandaged333"],
        intro: {
          en: "A bandaged mod of 3x3x3 cube using cardboard.",
          zh: "一个三阶魔方的捆绑改造，用纸板制作。"
        }
      }
    }
  },
  "graphic-design": {
    title: {
      en: "Graphic Design",
      zh: "平面设计"
    },
    children: {
      "gztime": {
        title: {
          en: "GZTime logo",
          zh: "GZTime 标志"
        },
        date: [2019, 6],
        cover: images["gztime"],
        intro: {
          en: "A series of logo designed for my friend GZTime.",
          zh: "为好友GZTime设计的标志系列"
        }
      }
    }
  },
  "music-works": {
    title: {
      en: "Music Works",
      zh: "音乐作品",
    },
    children: {
      "bs-rise": {
        title: {
          en: "BlackScore: Rise [Shield Hero OP1]",
          zh: "黑乐谱：Rise [盾之勇者成名录OP1]"
        },
        date: [2020, 8],
        icon: icons["bs-shield-op-rise"],
      },
      "wave_partical": {
        title: {
          en: "Improvisation: Wave-particle",
          zh: "即兴作：波粒二象性",
        },
        date: [2017, 5],
        icon: icons["impr-wave-particle"],
      },
      "permutation": {
        title: {
          en: "Improvisation: Permutation",
          zh: "即兴作：排列组合",
        },
        date: [2017, 3],
        icon: icons["impr-permutation"],
      }
    }
  },
  "misc": {
    title: {
      en: "Miscellaneous",
      zh: "杂项"
    },
    children: {
      "carrack_exodus": {
        title: {
          en: "Carrack: Exodus",
          zh: "克拉克：离家"
        },
        date: [2020, 4],
        icon: icons["carrack"],
        cover: images["carrack"],
      }
    }
  },
}

export default function getProject(projectId) {
  for (let i in projects) {
    for (let j in projects[i].children) {
      if (projectId == j) {
        return {
          categ: i,
          categTitle: projects[i].title,
          projInfo: projects[i].children[j]
        }
      }
    }
  }
  return false
}