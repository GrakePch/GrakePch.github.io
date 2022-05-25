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
      zh: "Minecraft 作品"
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
        icon: icons["gztime-logo"],
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
        icon: icons["bmap-icon"],
        cover: images["bmap"],
        coverSize: "35%",
        intro: {
          en: "An app icon designed for a map application named Bmap.",
          zh: "为地图应用 Bmap 设计的应用图标。"
        }
      },
      "eaxt-logo": {
        title: {
          en: "Eaxt Logo",
          zh: "Eaxt 标志"
        },
        date: [2017, 1],
        icon: icons["eaxt-logo"],
        cover: images["eaxt-new"],
        coverSize: "75%",
        intro: {
          en: "The app icon/logo is designed for a student project in my high school. ",
          zh: "为高中时期的一个学生项目设计的应用图标/标志。"
        }
      },
      "ethan-logo": {
        title: {
          en: "Ethan Logo",
          zh: "Ethan 标志"
        },
        date: [2018, 9],
        icon: icons["ethan-logo"],
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
        icon: icons["fragmem-icon"],
        cover: images["fragmem"],
        coverSize: "40%",
        intro: {
          en: "An app icon designed for a learning assistance application named FragMem.",
          zh: "为学习辅助应用 碎记 设计的应用图标。"
        }
      },
      "guzhi-studio-logo": {
        title: {
          en: "GuZhi Studio Logo",
          zh: "崮郅工作室标志"
        },
        date: [2017, 2],
        icon: icons["guzhi-studio-logo"],
        cover: images["guzhi_studio"],
        intro: {
          en: "A logo designed for my friend GZTime, used for his studio named GuZhi（崮郅）.",
          zh: "为好友 GZTime 的工作室“崮郅”设计的标志。"
        }
      },
      "mere-news-icon": {
        title: {
          en: "Mere News App Icon",
          zh: "Mere 新闻 应用图标"
        },
        date: [2019, 7],
        icon: icons["mere-news-icon"],
        cover: images["mere_news"],
        coverSize: "50%",
        intro: {
          en: "An app icon designed for a newsletter application named Mere News.",
          zh: "为新闻应用 Mere新闻 设计的应用图标。"
        }
      },
      "will-and-alex-drones-logo": {
        title: {
          en: "Will&Alex Drones Logo",
          zh: "Will&Alex Drones 标志"
        },
        date: [2018, 3],
        icon: icons["will-and-alex-drones-logo"],
        cover: images["will_and_alex_drones_multicolor"],
        coverSize: "50%",
        intro: {
          en: "A logo designed for my friend Will Wu, used for an Instagram account publishing media related to drone designing.",
          zh: "为好友 Will Wu 设计的Instagram账号标志。"
        }
      },
      "genres-logo": {
        title: {
          en: "Genres Website Logo",
          zh: "Genres 网站标志"
        },
        date: [2021, 12],
        icon: icons["genres-logo"],
        cover: images["genres_with_title"],
        coverSize: "70%",
        intro: {
          en: "A logo designed for Genres Website - a student startup project aiming to build a web novel community for both writer and reader.",
          zh: "为 Genres 网站设计的标志。Genres 是一个学生创业项目，致力于打造服务于作者与读者的在线网络小说社区。"
        }
      }
    }
  },
  "midi-works": {
    title: {
      en: "MIDI Works",
      zh: "MIDI 作品",
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