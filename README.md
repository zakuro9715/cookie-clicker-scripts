# cookie-clicker-scripts

Scripts for CookieClicker / Cookie Clicker 用スクリプト集

# Install

`Game.LoadMod('https://cdn.jsdelivr.net/npm/@zakuro9715/cookie-clicker-scripts')`

# Scripts / スクリプト

Paste it to F12 console

インストールしてから下のスクリプトを開発者コンソールに張り付ける。

# EnableReccommended / おすすめ設定

`enable()` or `enable('cookieMonster' /* or mod name */)`

## Automation / 自動化

- auto click         : `automation.clickCookie()`
- auto click golden  : `automation.clickGolden()`
- autosave           : `automation.save(/* interval second */)`
- all / すべて有効化 : `automation.all()`

## Mod

- CookieMonster      : `mods.cookieMonster()`
- FrozenCookies      : `mods.frozenCookies()`
- CookieGardenHelper : `mods.cookieGardenHelper()`
