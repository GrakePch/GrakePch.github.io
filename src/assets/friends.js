import {
  mdiWeb,
  mdiGithub,
  mdiTwitter,
  mdiInstagram,
  mdiYoutube
} from '@mdi/js';
import iconBili from "../assets/svgs/bilibili.svg";

// Backup avatars
import will_wu from "../assets/friends/will_wu_1024x1024.png";
import jakob_zero from "../assets/friends/jakob_zero_400x400.jpg";


export const friends = {
  "C6H5-NO2": {
    avatar: "https://avatars.githubusercontent.com/u/19368807?v=4",
    links: [
      ["Website", "https://c6h5-no2.github.io/", mdiWeb],
      ["Github", "https://github.com/C6H5-NO2", mdiGithub]
    ],
  },
  "Ethan Shen": {
    avatar: "https://avatars.githubusercontent.com/u/42264778?v=4",
    links: [
      ["Website", "https://ethans.me/", mdiWeb],
      ["Github", "https://github.com/nczitzk", mdiGithub]
    ],
  },
  "GZTime": {
    avatar: "https://avatars.githubusercontent.com/u/28180262?v=4",
    links: [
      ["Website", "https://blog.gztime.cc/", mdiWeb],
      ["Github", "https://github.com/GZTimeWalker", mdiGithub]
    ],
    descrip: "Walking on the Time Axis.",
  },
  "HurryPeng": {
    avatar: "https://avatars.githubusercontent.com/u/25132396?v=4",
    links: [
      ["Github", "https://github.com/HurryPeng", mdiGithub]
    ],
  },
  "Pairman": {
    avatar: "https://avatars.githubusercontent.com/u/18365163?v=4",
    links: [
      ["Website", "https://pairman.github.io/PTP/", mdiWeb],
      ["Github", "https://github.com/Pairman", mdiGithub]
    ],
  },
  "Jakob.zero": {
    avatar: jakob_zero,
    links: [
      ["Website", "https://blockpixel.net/", mdiWeb],
      ["Twitter", "https://twitter.com/Jakob_zero", mdiTwitter]
    ],
  },
  "Will Wu": {
    avatar: will_wu,
    links: [
      ["Youtube", "https://www.youtube.com/channel/UCADPoa0cMPc_twrxZQMHHhw", mdiYoutube],
      ["Instagram", "https://www.instagram.com/willandalexdrones/", mdiInstagram]
    ],
  },
  "Lapernum": {
    avatar: "https://avatars.githubusercontent.com/u/64993946?v=4",
    links: [
      ["bilibili", "https://space.bilibili.com/57234212", iconBili],
      ["Youtube", "https://www.youtube.com/channel/UCPEzUOCC_9COTUwx4HA5_Gw", mdiYoutube],
      ["Imgur", "https://imgur.com/user/laboner6/posts"]
    ],
    descrip: "A Star Citizen Loving Photography."
  }
}