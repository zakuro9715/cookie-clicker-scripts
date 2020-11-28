const automation = {
  clickGolden() {
    setInterval(() => { Game.shimmers.forEach((_, i) => Game.shimmers[i].pop()) }, 500)
  },
  clickCookie() {
    setInterval(() => { Game.ClickCookie(); Game.lastClick=0 }, 1)
  },
  all() {
    automation.clickGolden()
    automation.clickCookie()
  },
}

const mods = {
  cookieMonster() {
    Game.LoadMod('http://aktanusa.github.io/CookieMonster/CookieMonster.js')
  },
  frozenCookies() {
    Game.LoadMod('https://mtarnuhal.github.io/FrozenCookies/frozen_cookies.js')
  }
  cookieGardenHelper() {
    Game.LoadMod('https://rawgit.com/yannprada/cookie-garden-helper/master/cookie-garden-helper.js')
  }
}

function enable(modName) {
  automation.all()
  const mod = mods[modName]
  if (mod) {
    mod()
  } else if (modName && !mod) {
    alert(`Cannot find mod, ${modName}`)
  }
}
