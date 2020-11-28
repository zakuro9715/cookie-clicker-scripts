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
