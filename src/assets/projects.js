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
          en: "9-Squares Texture",
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
      "gztime-logo": {
        title: {
          en: "GZTime Logo",
          zh: "GZTime 标志"
        },
        date: [2021, 1],
        cover: images["gztime"],
        intro: {
          en: "A series of logo designed for my friend GZTime.",
          zh: "为好友 GZTime 设计的标志系列。"
        }
      },
      "bmap-icon": {
        title: {
          en: "Bmap App Icon",
          zh: "Bmap 应用图标"
        },
        date: [2019, 7],
        cover: images["bmap"],
        coverHalfSized: true,
        intro: {
          en: "An app icon designed for Bmap.",
          zh: "为 Bmap 设计的应用图标。"
        }
      },
      "eaxt-logo": {
        title: {
          en: "Eaxt Logo",
          zh: "Eaxt 标志"
        },
        date: [2017, 1],
        cover: images["eaxt"],
        coverHalfSized: true,
      },
      "ethan-logo": {
        title: {
          en: "Ethan Logo",
          zh: "Ethan 标志"
        },
        date: [2018, 9],
        cover: images["ethan-logo-title"],
        intro: {
          en: "A logo designed for my friend Ethan.",
          zh: "为好友 Ethan 设计的标志。"
        }
      },
      "fragmem-icon": {
        title: {
          en: "FragMem App Icon",
          zh: "碎记 应用图标"
        },
        date: [2018, 9],
        cover: images["fragmem"],
        coverHalfSized: true,
        intro: {
          en: "An app icon designed for FragMem.",
          zh: "为 碎记 设计的应用图标。"
        }
      },
      "guzhi-studio-logo": {
        title: {
          en: "GuZhi Studio Logo",
          zh: "崮郅工作室标志"
        },
        date: [2017, 2],
        cover: images["guzhi_studio"],
      },
      "mere-news-icon": {
        title: {
          en: "Mere News App Icon",
          zh: "Mere 新闻 应用图标"
        },
        date: [2019, 7],
        cover: images["mere_news"],
        coverHalfSized: true,
      },
      "will-and-alex-drones-logo": {
        title: {
          en: "Will&AlexDrones Logo",
          zh: "Will&AlexDrones 标志"
        },
        date: [2018, 3],
        cover: images["will_and_alex_drones_multicolor"],
        coverHalfSized: true,
      },
      "genres-logo": {
        title: {
          en: "Genres Website Logo",
          zh: "Genres 网站标志"
        },
        date: [2021, 12],
        cover: images["genres_light"],
        coverHalfSized: true,
      }
    }
  },
  "midi-works": {
    title: {
      en: "MIDI Works",
      zh: "MIDI作品",
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
      "wave-partical": {
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
  "short-film": {
    title: {
      en: "Short Film",
      zh: "微电影"
    },
    children: {
      "carrack-exodus": {
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