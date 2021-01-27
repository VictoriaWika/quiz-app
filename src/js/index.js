console.clear()

const header = document.querySelector('h1')
const home = document.querySelector('[data-js=home]')
const bookmark = document.querySelector('[data-js=bookmark]')
const create = document.querySelector('[data-js=create]')
const settings = document.querySelector('[data-js=settings]')
const navHome = document.querySelector('[data-js=iconHome]')
const navBookmark = document.querySelector('[data-js=iconBookmark]')
const navCreate = document.querySelector('[data-js=iconCreate]')
const navSettings = document.querySelector('[data-js=iconSettings]')

/* function change() {
  var img1 = './icons/bookmark.svg',
    img2 = './icons/marked.svg'
  var imgElement = document.getElementById('test')

  imgElement.src = imgElement.src === img1 ? img2 : img1

https://jsfiddle.net/guspersson/s8qLg7ur/

} */

navHome.addEventListener('click', () => {
  header.textContent = 'Quiz App'
  document.querySelector('[data-js=iconHome]').src =
    'data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PGc+PHBhdGggZD0ibTE1MCAyNTZjMC04LjI4NC02LjcxNi0xNS0xNS0xNXMtMTUgNi43MTYtMTUgMTV2MzQuODU5aC0zMHYtMzQuODU5YzAtOC4yODQtNi43MTYtMTUtMTUtMTVzLTE1IDYuNzE2LTE1IDE1djM0Ljg1OWgtMzB2LTM0Ljg1OWMwLTguMjg0LTYuNzE2LTE1LTE1LTE1cy0xNSA2LjcxNi0xNSAxNXYyNTZoMTUwLjE2OHptLTYwIDExMC4yNDZjMCA4LjI4NC02LjcxNiAxNS0xNSAxNXMtMTUtNi43MTYtMTUtMTV2LTEzLjg2NGMwLTguMjg0IDYuNzE2LTE1IDE1LTE1czE1IDYuNzE2IDE1IDE1eiIvPjxwYXRoIGQ9Im00OTcgMjQxYy04LjI4NCAwLTE1IDYuNzE2LTE1IDE1djM0Ljg1OWgtMzB2LTM0Ljg1OWMwLTguMjg0LTYuNzE2LTE1LTE1LTE1cy0xNSA2LjcxNi0xNSAxNXYzNC44NTloLTMwdi0zNC44NTljMC04LjI4NC02LjcxNi0xNS0xNS0xNXMtMTUgNi43MTYtMTUgMTVsLS4xMzMgMjU2aDE1MC4xMzN2LTI1NmMwLTguMjg0LTYuNzE2LTE1LTE1LTE1em0tNDUgMTI1LjI0NmMwIDguMjg0LTYuNzE2IDE1LTE1IDE1cy0xNS02LjcxNi0xNS0xNXYtMTMuODY0YzAtOC4yODQgNi43MTYtMTUgMTUtMTVzMTUgNi43MTYgMTUgMTV6Ii8+PC9nPjxnPjxnPjxwYXRoIGQ9Im0zMTkuNjAyIDE3OC4yMzQtNDguNjAyLTg0LjE5di02NC4wNDRoMjAuMzgyYy0xLjM1MSAyLjI1Mi0yLjE0MiA0Ljg3OC0yLjE0MiA3LjY5NSAwIDguMjg0IDYuNzE2IDE1IDE1IDE1aDQ4LjEwNGM4LjI4NCAwIDE1LTYuNzE2IDE1LTE1cy02LjcxNi0xNS0xNS0xNWgtMjMuNjFjMS4zNTEtMi4yNTIgMi4xNDItNC44NzggMi4xNDItNy42OTUgMC04LjI4NC02LjcxNi0xNS0xNS0xNWgtNTkuODc2Yy04LjI4NCAwLTE1IDYuNzE2LTE1IDE1djc5LjA0NGwtNDguNjAyIDg0LjE5MWgxMjcuMjA0eiIvPjxwYXRoIGQ9Im0zMTkuNjY4IDIwOC4yMzRoLTEyNy4zMzZ2MTA5LjUyNGgxMjcuMzM2em0tNDguNjY4IDYzLjkyYzAgOC4yODQtNi43MTYgMTUtMTUgMTVzLTE1LTYuNzE2LTE1LTE1di0xMy44NjRjMC04LjI4NCA2LjcxNi0xNSAxNS0xNXMxNSA2LjcxNiAxNSAxNXoiLz48L2c+PGc+PHBhdGggZD0ibTI1NiA0NTEuOTYyYy04LjI4MSAwLTE1LjAxOSA2LjczNy0xNS4wMTkgMTUuMDE5djQ1LjAxOWgzMC4wMzd2LTQ1LjAxOWMuMDAxLTguMjgxLTYuNzM3LTE1LjAxOS0xNS4wMTgtMTUuMDE5eiIvPjxwYXRoIGQ9Im0xODAuMTY4IDM0Ny43NTl2MTY0LjI0MWgzMC44MTR2LTQ1LjAxOWMwLTI0LjgyMyAyMC4xOTUtNDUuMDE5IDQ1LjAxOS00NS4wMTkgMjQuODIzIDAgNDUuMDE5IDIwLjE5NSA0NS4wMTkgNDUuMDE5djQ1LjAxOWgzMC44NDl2LTE2NC4yNDF6Ii8+PC9nPjwvZz48L2c+PC9zdmc+'

  document.querySelector('[data-js=iconBookmark]').src =
    'data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibTQxNC41IDBoLTMxN2MtMzcuMjIgMC02Ny41IDMwLjI4LTY3LjUgNjcuNXY0NDQuNWwxNzMuNS04Ni43NSAxNzMuNSA4Ni43NXYtMjQxaDEwNXYtMjAzLjVjMC0zNy4yMi0zMC4yOC02Ny41LTY3LjUtNjcuNXptLTY3LjUgNjcuNXYzOTUuOTU5bC0xNDMuNS03MS43NS0xNDMuNSA3MS43NXYtMzk1Ljk1OWMwLTIwLjY3OCAxNi44MjItMzcuNSAzNy41LTM3LjVoMjYwLjljLTcuMTk3IDEwLjczMi0xMS40IDIzLjYzNi0xMS40IDM3LjV6bTEwNSAxNzMuNWgtNzV2LTE3My41YzAtMjAuNjc4IDE2LjgyMi0zNy41IDM3LjUtMzcuNXMzNy41IDE2LjgyMiAzNy41IDM3LjV6Ii8+PC9nPjwvc3ZnPg=='

  document.querySelector('[data-js=iconCreate]').src =
    'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyLjAwMSA1MTIuMDAxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIuMDAxIDUxMi4wMDE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNDk2LjA2Myw2Mi4yOTlsLTQ2LjM5Ni00Ni40Yy0yMS4xOTktMjEuMTk5LTU1LjY4OS0yMS4xOTgtNzYuODg4LDBDMzUyLjgyLDM1Ljg2LDQ3Ljk2NCwzNDAuNzM5LDI3LjU5MSwzNjEuMTEzDQoJCQljLTIuMTcsMi4xNy0zLjYyNCw1LjA1NC00LjE0Miw3Ljg3NUwwLjI1MSw0OTQuMjY4Yy0wLjg5OSw0Ljg1NywwLjY0OSw5Ljg0Niw0LjE0MiwxMy4zMzljMy40OTcsMy40OTcsOC40ODcsNS4wNDIsMTMuMzM4LDQuMTQzDQoJCQlMMTQzLDQ4OC41NDljMi44OTUtMC41NCw1Ljc0MS0yLjAwOCw3Ljg3NS00LjE0M2wzNDUuMTg4LTM0NS4yMTRDNTE3LjMxMSwxMTcuOTQ0LDUxNy4zMTQsODMuNTUsNDk2LjA2Myw2Mi4yOTl6IE0zMy43MjEsNDc4LjI3Ng0KCQkJbDE0LjAzMy03NS43ODRsNjEuNzQ2LDYxLjc1TDMzLjcyMSw0NzguMjc2eiBNMTQwLjI2OSw0NTIuNTg1TDU5LjQxLDM3MS43MjFMMzU0LjYyLDc2LjQ4OGw4MC44NTksODAuODY1TDE0MC4yNjksNDUyLjU4NXoNCgkJCSBNNDc0Ljg1LDExNy45NzlsLTE4LjE1OSwxOC4xNjFsLTgwLjg1OS04MC44NjVsMTguMTU5LTE4LjE2MWM5LjUwMS05LjUwMiwyNC45Ni05LjUwMywzNC40NjMsMGw0Ni4zOTYsNDYuNA0KCQkJQzQ4NC4zNzUsOTMuMDM5LDQ4NC4zNzUsMTA4LjQ1Myw0NzQuODUsMTE3Ljk3OXoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=='

  document.querySelector('[data-js=iconSettings]').src =
    'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyLjAwMSA1MTIuMDAxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIuMDAxIDUxMi4wMDE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNDk2Ljk4NiwxMDMuODU0SDMyMi42MzFjLTEuODQ1LTQuMjk2LTQuNTE3LTguMzE5LTguMDItMTEuODIxbC0yNy41NTgtMjcuNTU4Yy03LjE2Ny03LjE2OC0xNi42OTgtMTEuMTE2LTI2LjgzNi0xMS4xMTYNCgkJCWMtMTAuMTM3LDAtMTkuNjY3LDMuOTQ4LTI2LjgzNiwxMS4xMTVsLTI3LjU1OCwyNy41NThjLTMuNTAyLDMuNTAyLTYuMTc1LDcuNTI1LTguMDIsMTEuODIxSDE1LjAxNQ0KCQkJQzYuNzIzLDEwMy44NTMsMCwxMTAuNTc1LDAsMTE4Ljg2N2MwLDguMjkyLDYuNzIzLDE1LjAxNiwxNS4wMTUsMTUuMDE2aDE4Mi43OWMxLjg0NSw0LjI5Niw0LjUxNyw4LjMxOSw4LjAyLDExLjgyMQ0KCQkJbDI3LjU1OCwyNy41NThjNy4xNjgsNy4xNjgsMTYuNjk5LDExLjExNSwyNi44MzYsMTEuMTE1YzEwLjEzOCwwLDE5LjY2OC0zLjk0OCwyNi44MzYtMTEuMTE1bDI3LjU1OC0yNy41NTgNCgkJCWMzLjUwMi0zLjUwMiw2LjE3NS03LjUyNSw4LjAyLTExLjgyMWgxNzQuMzU0YzguMjkyLDAsMTUuMDE1LTYuNzIzLDE1LjAxNS0xNS4wMTVTNTA1LjI3OSwxMDMuODU0LDQ5Ni45ODYsMTAzLjg1NHoNCgkJCSBNMjkzLjM3OSwxMjQuNDcybC0yNy41NTgsMjcuNTU4Yy0xLjQ5NiwxLjQ5Ni0zLjQ4NSwyLjMyLTUuNjAyLDIuMzJjLTIuMTE3LDAtNC4xMDYtMC44MjQtNS42MDItMi4zMmwtMjcuNTU4LTI3LjU1OA0KCQkJYy0zLjA4OS0zLjA5LTMuMDg5LTguMTE2LDAtMTEuMjA1bDI3LjU1OC0yNy41NTdjMS40OTYtMS40OTYsMy40ODUtMi4zMiw1LjYwMi0yLjMyYzIuMTE3LDAsNC4xMDYsMC44MjQsNS42MDIsMi4zMg0KCQkJbDI3LjU1OCwyNy41NThDMjk2LjQ2OCwxMTYuMzU3LDI5Ni40NjgsMTIxLjM4MywyOTMuMzc5LDEyNC40NzJ6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00OTYuOTg1LDI0Mi45ODlIMjA0LjEwOWMtMS44NzgtNC4zNTgtNC41ODUtOC4zNjUtOC4wNDItMTEuODIxbC0yNy41NTctMjcuNTU4DQoJCQljLTcuMTY4LTcuMTY4LTE2LjY5OS0xMS4xMTUtMjYuODM2LTExLjExNWMtMTAuMTM4LDAtMTkuNjY4LDMuOTQ4LTI2LjgzNiwxMS4xMTVsLTI3LjU1OCwyNy41NTgNCgkJCWMtMy41MDIsMy41MDItNi4xNzUsNy41MjUtOC4wMiwxMS44MjFIMTUuMDE1QzYuNzIzLDI0Mi45ODksMCwyNDkuNzExLDAsMjU4LjAwM3M2LjcyMywxNS4wMTUsMTUuMDE1LDE1LjAxNWg2NC4yNDcNCgkJCWMxLjg0NSw0LjI5Niw0LjUxNyw4LjMxOSw4LjAyLDExLjgyMWwyNy41NTgsMjcuNTU4YzcuMTY3LDcuMTY4LDE2LjY5OCwxMS4xMTYsMjYuODM2LDExLjExNg0KCQkJYzEwLjEzNywwLDE5LjY2Ny0zLjk0OCwyNi44MzYtMTEuMTE2bDI3LjU1Ny0yNy41NTdjMy40NTYtMy40NTYsNi4xNjQtNy40NjMsOC4wNDItMTEuODIxaDI5Mi44NzYNCgkJCWM4LjI5MiwwLDE1LjAxNS02LjcyMywxNS4wMTUtMTUuMDE1QzUxMi4wMDEsMjQ5LjcxMiw1MDUuMjc3LDI0Mi45ODksNDk2Ljk4NSwyNDIuOTg5eiBNMTc0LjgzNCwyNjMuNjA2bC0yNy41NTcsMjcuNTU3DQoJCQljLTEuNDk2LDEuNDk2LTMuNDg1LDIuMzItNS42MDIsMi4zMmMtMi4xMTcsMC00LjEwNi0wLjgyNC01LjYwMi0yLjMybC0yNy41NTgtMjcuNTU4Yy0zLjA4OS0zLjA4OS0zLjA4OS04LjExNSwwLTExLjIwNA0KCQkJbDI3LjU1OC0yNy41NThjMS40OTYtMS40OTYsMy40ODUtMi4zMiw1LjYwMi0yLjMyYzIuMTE3LDAsNC4xMDYsMC44MjQsNS42MDIsMi4zMmwyNy41NTcsMjcuNTU4DQoJCQljMS40OTYsMS40OTYsMi4zMiwzLjQ4NSwyLjMyLDUuNjAxQzE3Ny4xNTQsMjYwLjExOSwxNzYuMzMsMjYyLjEwOSwxNzQuODM0LDI2My42MDZ6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00OTYuOTg1LDM3OC4xMmgtNzQuMjU3Yy0xLjg0NS00LjI5Ni00LjUxNy04LjMxOS04LjAyLTExLjgyMWwtMjcuNTU4LTI3LjU1OGMtNy4xNjctNy4xNjgtMTYuNjk4LTExLjExNi0yNi44MzYtMTEuMTE2DQoJCQljLTEwLjEzNywwLTE5LjY2NywzLjk0OC0yNi44MzYsMTEuMTE1bC0yNy41NTgsMjcuNTU4Yy0zLjUwMiwzLjUwMi02LjE3NSw3LjUyNS04LjAyLDExLjgyMUgxNS4wMTUNCgkJCUM2LjcyMywzNzguMTE5LDAsMzg0Ljg0MiwwLDM5My4xMzRjMCw4LjI5Miw2LjcyMywxNS4wMTUsMTUuMDE1LDE1LjAxNWgyODIuODg4YzEuODQ1LDQuMjk2LDQuNTE3LDguMzE5LDguMDIsMTEuODIxDQoJCQlsMjcuNTU4LDI3LjU1OGM3LjE2OCw3LjE2OCwxNi42OTksMTEuMTE1LDI2LjgzNiwxMS4xMTVjMTAuMTM4LDAsMTkuNjY4LTMuOTQ4LDI2LjgzNi0xMS4xMTVsMjcuNTU4LTI3LjU1OA0KCQkJYzMuNTAyLTMuNTAyLDYuMTc1LTcuNTI1LDguMDItMTEuODIxaDc0LjI1N2M4LjI5MiwwLDE1LjAxNS02LjcyMywxNS4wMTUtMTUuMDE1QzUxMi4wMDEsMzg0Ljg0Miw1MDUuMjc3LDM3OC4xMiw0OTYuOTg1LDM3OC4xMnoNCgkJCSBNMzkzLjQ3NiwzOTguNzM3bC0yNy41NTgsMjcuNTU4Yy0xLjQ5NiwxLjQ5Ni0zLjQ4NSwyLjMyLTUuNjAyLDIuMzJjLTIuMTE3LDAtNC4xMDYtMC44MjQtNS42MDItMi4zMmwtMjcuNTU4LTI3LjU1OA0KCQkJYy0zLjA4OS0zLjA4OS0zLjA4OS04LjExNSwwLTExLjIwNGwyNy41NTgtMjcuNTU3YzEuNDk2LTEuNDk2LDMuNDg1LTIuMzIsNS42MDItMi4zMmMyLjExNywwLDQuMTA2LDAuODI0LDUuNjAyLDIuMzINCgkJCWwyNy41NTgsMjcuNTU4QzM5Ni41NjUsMzkwLjYyMiwzOTYuNTY1LDM5NS42NDgsMzkzLjQ3NiwzOTguNzM3eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K'

  home.hidden = false
  bookmark.hidden = true
  create.hidden = true
  settings.hidden = true

  /* navHome.classList.add('active')
  navBookmark.classList.remove('active')
  navCreate.classList.remove('active')
  navSettings.classList.remove('active') */
})

navBookmark.addEventListener('click', () => {
  header.textContent = 'Bookmarks'
  document.querySelector('[data-js=iconHome]').src =
    'data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibTI1NiAyMzMuMjljLTguMjg0IDAtMTUgNi43MTYtMTUgMTV2MTMuODY0YzAgOC4yODQgNi43MTYgMTUgMTUgMTVzMTUtNi43MTYgMTUtMTV2LTEzLjg2NGMwLTguMjg0LTYuNzE2LTE1LTE1LTE1eiIvPjxwYXRoIGQ9Im02MCAzNTIuMzgydjEzLjg2NGMwIDguMjg0IDYuNzE2IDE1IDE1IDE1czE1LTYuNzE2IDE1LTE1di0xMy44NjRjMC04LjI4NC02LjcxNi0xNS0xNS0xNXMtMTUgNi43MTYtMTUgMTV6Ii8+PHBhdGggZD0ibTQyMiAzNTIuMzgydjEzLjg2NGMwIDguMjg0IDYuNzE2IDE1IDE1IDE1czE1LTYuNzE2IDE1LTE1di0xMy44NjRjMC04LjI4NC02LjcxNi0xNS0xNS0xNXMtMTUgNi43MTYtMTUgMTV6Ii8+PHBhdGggZD0ibTQ5NyAyNDFjLTguMjg0IDAtMTUgNi43MTYtMTUgMTV2MTcuODE2aC0zMHYtMTcuODE2YzAtOC4yODQtNi43MTYtMTUtMTUtMTVzLTE1IDYuNzE2LTE1IDE1djE3LjgxNmgtMzB2LTE3LjgxNmMwLTguMjg0LTYuNzE2LTE1LTE1LTE1cy0xNSA2LjcxNi0xNSAxNXYzMi44MTYgMzguNTY1aC0zMS4xMjV2LTE0Mi42NTRjMC0yLjYxNS0uNzAzLTUuMjM2LTIuMDA5LTcuNTAybC01Ny44NjYtMTAwLjIzOHYtNDYuOTg3aDIwLjM4MmMtMS4zNTEgMi4yNTItMi4xNDIgNC44NzgtMi4xNDIgNy42OTUgMCA4LjI4NCA2LjcxNiAxNSAxNSAxNWg0OC4xMDRjOC4yODQgMCAxNS02LjcxNiAxNS0xNXMtNi43MTYtMTUtMTUtMTVoLTIzLjYxYzEuMzUxLTIuMjUyIDIuMTQyLTQuODc4IDIuMTQyLTcuNjk1IDAtOC4yODQtNi43MTYtMTUtMTUtMTVoLTU5Ljg3NmMtOC4yODQgMC0xNSA2LjcxNi0xNSAxNXY2MS45ODdsLTU3LjA2NyA5OC44NTVjLTEuODM1IDIuNDg5LTIuOTMzIDUuNTU0LTIuOTMzIDguODgzdjE0Mi42NTdoLTMxdi0zOC41NjUtMzIuODE3YzAtOC4yODQtNi43MTYtMTUtMTUtMTVzLTE1IDYuNzE2LTE1IDE1djE3LjgxNmgtMzB2LTE3LjgxNmMwLTguMjg0LTYuNzE2LTE1LTE1LTE1cy0xNSA2LjcxNi0xNSAxNXYxNy44MTZoLTMwdi0xNy44MTZjMC04LjI4NC02LjcxNi0xNS0xNS0xNXMtMTUgNi43MTYtMTUgMTV2MjQxYzAgOC4yODQgNi43MTYgMTUgMTUgMTVoNDgyYzguMjg0IDAgMTUtNi43MTYgMTUtMTV2LTI0MWMwLTguMjg0LTYuNzE2LTE1LTE1LTE1em0tMjQxLTEyOS45OTIgMzMuODk1IDU4LjcxNmgtNjcuNzkxem0tNDUgODguNzE3aDg5Ljg3NXYxMjcuNjU3aC04OS44NzV6bTE1MSAxNTcuNjU3djEyNC42MThoLTYwLjk4MXYtMTUuMDE5YzAtMjQuODIzLTIwLjE5NS00NS4wMTktNDUuMDE5LTQ1LjAxOS0yNC44MjMgMC00NS4wMTkgMjAuMTk1LTQ1LjAxOSA0NS4wMTl2MTUuMDE5aC02MC45ODF2LTEyNC42MTh6bS05MC45ODEgMTI0LjYxOGgtMzAuMDM3di0xNS4wMTljMC04LjI4MSA2LjczNy0xNS4wMTkgMTUuMDE5LTE1LjAxOSA4LjI4MSAwIDE1LjAxOSA2LjczNyAxNS4wMTkgMTUuMDE5djE1LjAxOXptLTE1MS4wMTkgMGgtOTB2LTE3OC4xODRoOTB6bTM2MiAwaC05MHYtMTc4LjE4NGg5MHoiLz48L2c+PC9zdmc+'

  document.querySelector('[data-js=iconBookmark]').src =
    'data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibTQyOS41IDMwLjUzNmMtMjguOTk1IDAtNTIuNSAyMy41MDUtNTIuNSA1Mi41djE4OC41aDEwNXYtMTg4LjVjMC0yOC45OTUtMjMuNTA1LTUyLjUtNTIuNS01Mi41eiIvPjxwYXRoIGQ9Im04Mi41IDBjLTI4Ljk5NSAwLTUyLjUgMjMuNTA1LTUyLjUgNTIuNXY0NTkuNWwxNTguNS03OS4yNSAxNTguNSA3OS4yNXYtNDU5LjVjMC0yOC45OTUgMjMuNTA1LTUyLjUgNTIuNS01Mi41eiIvPjwvZz48L3N2Zz4='

  document.querySelector('[data-js=iconCreate]').src =
    'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyLjAwMSA1MTIuMDAxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIuMDAxIDUxMi4wMDE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNDk2LjA2Myw2Mi4yOTlsLTQ2LjM5Ni00Ni40Yy0yMS4xOTktMjEuMTk5LTU1LjY4OS0yMS4xOTgtNzYuODg4LDBDMzUyLjgyLDM1Ljg2LDQ3Ljk2NCwzNDAuNzM5LDI3LjU5MSwzNjEuMTEzDQoJCQljLTIuMTcsMi4xNy0zLjYyNCw1LjA1NC00LjE0Miw3Ljg3NUwwLjI1MSw0OTQuMjY4Yy0wLjg5OSw0Ljg1NywwLjY0OSw5Ljg0Niw0LjE0MiwxMy4zMzljMy40OTcsMy40OTcsOC40ODcsNS4wNDIsMTMuMzM4LDQuMTQzDQoJCQlMMTQzLDQ4OC41NDljMi44OTUtMC41NCw1Ljc0MS0yLjAwOCw3Ljg3NS00LjE0M2wzNDUuMTg4LTM0NS4yMTRDNTE3LjMxMSwxMTcuOTQ0LDUxNy4zMTQsODMuNTUsNDk2LjA2Myw2Mi4yOTl6IE0zMy43MjEsNDc4LjI3Ng0KCQkJbDE0LjAzMy03NS43ODRsNjEuNzQ2LDYxLjc1TDMzLjcyMSw0NzguMjc2eiBNMTQwLjI2OSw0NTIuNTg1TDU5LjQxLDM3MS43MjFMMzU0LjYyLDc2LjQ4OGw4MC44NTksODAuODY1TDE0MC4yNjksNDUyLjU4NXoNCgkJCSBNNDc0Ljg1LDExNy45NzlsLTE4LjE1OSwxOC4xNjFsLTgwLjg1OS04MC44NjVsMTguMTU5LTE4LjE2MWM5LjUwMS05LjUwMiwyNC45Ni05LjUwMywzNC40NjMsMGw0Ni4zOTYsNDYuNA0KCQkJQzQ4NC4zNzUsOTMuMDM5LDQ4NC4zNzUsMTA4LjQ1Myw0NzQuODUsMTE3Ljk3OXoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=='

  document.querySelector('[data-js=iconSettings]').src =
    'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyLjAwMSA1MTIuMDAxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIuMDAxIDUxMi4wMDE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNDk2Ljk4NiwxMDMuODU0SDMyMi42MzFjLTEuODQ1LTQuMjk2LTQuNTE3LTguMzE5LTguMDItMTEuODIxbC0yNy41NTgtMjcuNTU4Yy03LjE2Ny03LjE2OC0xNi42OTgtMTEuMTE2LTI2LjgzNi0xMS4xMTYNCgkJCWMtMTAuMTM3LDAtMTkuNjY3LDMuOTQ4LTI2LjgzNiwxMS4xMTVsLTI3LjU1OCwyNy41NThjLTMuNTAyLDMuNTAyLTYuMTc1LDcuNTI1LTguMDIsMTEuODIxSDE1LjAxNQ0KCQkJQzYuNzIzLDEwMy44NTMsMCwxMTAuNTc1LDAsMTE4Ljg2N2MwLDguMjkyLDYuNzIzLDE1LjAxNiwxNS4wMTUsMTUuMDE2aDE4Mi43OWMxLjg0NSw0LjI5Niw0LjUxNyw4LjMxOSw4LjAyLDExLjgyMQ0KCQkJbDI3LjU1OCwyNy41NThjNy4xNjgsNy4xNjgsMTYuNjk5LDExLjExNSwyNi44MzYsMTEuMTE1YzEwLjEzOCwwLDE5LjY2OC0zLjk0OCwyNi44MzYtMTEuMTE1bDI3LjU1OC0yNy41NTgNCgkJCWMzLjUwMi0zLjUwMiw2LjE3NS03LjUyNSw4LjAyLTExLjgyMWgxNzQuMzU0YzguMjkyLDAsMTUuMDE1LTYuNzIzLDE1LjAxNS0xNS4wMTVTNTA1LjI3OSwxMDMuODU0LDQ5Ni45ODYsMTAzLjg1NHoNCgkJCSBNMjkzLjM3OSwxMjQuNDcybC0yNy41NTgsMjcuNTU4Yy0xLjQ5NiwxLjQ5Ni0zLjQ4NSwyLjMyLTUuNjAyLDIuMzJjLTIuMTE3LDAtNC4xMDYtMC44MjQtNS42MDItMi4zMmwtMjcuNTU4LTI3LjU1OA0KCQkJYy0zLjA4OS0zLjA5LTMuMDg5LTguMTE2LDAtMTEuMjA1bDI3LjU1OC0yNy41NTdjMS40OTYtMS40OTYsMy40ODUtMi4zMiw1LjYwMi0yLjMyYzIuMTE3LDAsNC4xMDYsMC44MjQsNS42MDIsMi4zMg0KCQkJbDI3LjU1OCwyNy41NThDMjk2LjQ2OCwxMTYuMzU3LDI5Ni40NjgsMTIxLjM4MywyOTMuMzc5LDEyNC40NzJ6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00OTYuOTg1LDI0Mi45ODlIMjA0LjEwOWMtMS44NzgtNC4zNTgtNC41ODUtOC4zNjUtOC4wNDItMTEuODIxbC0yNy41NTctMjcuNTU4DQoJCQljLTcuMTY4LTcuMTY4LTE2LjY5OS0xMS4xMTUtMjYuODM2LTExLjExNWMtMTAuMTM4LDAtMTkuNjY4LDMuOTQ4LTI2LjgzNiwxMS4xMTVsLTI3LjU1OCwyNy41NTgNCgkJCWMtMy41MDIsMy41MDItNi4xNzUsNy41MjUtOC4wMiwxMS44MjFIMTUuMDE1QzYuNzIzLDI0Mi45ODksMCwyNDkuNzExLDAsMjU4LjAwM3M2LjcyMywxNS4wMTUsMTUuMDE1LDE1LjAxNWg2NC4yNDcNCgkJCWMxLjg0NSw0LjI5Niw0LjUxNyw4LjMxOSw4LjAyLDExLjgyMWwyNy41NTgsMjcuNTU4YzcuMTY3LDcuMTY4LDE2LjY5OCwxMS4xMTYsMjYuODM2LDExLjExNg0KCQkJYzEwLjEzNywwLDE5LjY2Ny0zLjk0OCwyNi44MzYtMTEuMTE2bDI3LjU1Ny0yNy41NTdjMy40NTYtMy40NTYsNi4xNjQtNy40NjMsOC4wNDItMTEuODIxaDI5Mi44NzYNCgkJCWM4LjI5MiwwLDE1LjAxNS02LjcyMywxNS4wMTUtMTUuMDE1QzUxMi4wMDEsMjQ5LjcxMiw1MDUuMjc3LDI0Mi45ODksNDk2Ljk4NSwyNDIuOTg5eiBNMTc0LjgzNCwyNjMuNjA2bC0yNy41NTcsMjcuNTU3DQoJCQljLTEuNDk2LDEuNDk2LTMuNDg1LDIuMzItNS42MDIsMi4zMmMtMi4xMTcsMC00LjEwNi0wLjgyNC01LjYwMi0yLjMybC0yNy41NTgtMjcuNTU4Yy0zLjA4OS0zLjA4OS0zLjA4OS04LjExNSwwLTExLjIwNA0KCQkJbDI3LjU1OC0yNy41NThjMS40OTYtMS40OTYsMy40ODUtMi4zMiw1LjYwMi0yLjMyYzIuMTE3LDAsNC4xMDYsMC44MjQsNS42MDIsMi4zMmwyNy41NTcsMjcuNTU4DQoJCQljMS40OTYsMS40OTYsMi4zMiwzLjQ4NSwyLjMyLDUuNjAxQzE3Ny4xNTQsMjYwLjExOSwxNzYuMzMsMjYyLjEwOSwxNzQuODM0LDI2My42MDZ6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00OTYuOTg1LDM3OC4xMmgtNzQuMjU3Yy0xLjg0NS00LjI5Ni00LjUxNy04LjMxOS04LjAyLTExLjgyMWwtMjcuNTU4LTI3LjU1OGMtNy4xNjctNy4xNjgtMTYuNjk4LTExLjExNi0yNi44MzYtMTEuMTE2DQoJCQljLTEwLjEzNywwLTE5LjY2NywzLjk0OC0yNi44MzYsMTEuMTE1bC0yNy41NTgsMjcuNTU4Yy0zLjUwMiwzLjUwMi02LjE3NSw3LjUyNS04LjAyLDExLjgyMUgxNS4wMTUNCgkJCUM2LjcyMywzNzguMTE5LDAsMzg0Ljg0MiwwLDM5My4xMzRjMCw4LjI5Miw2LjcyMywxNS4wMTUsMTUuMDE1LDE1LjAxNWgyODIuODg4YzEuODQ1LDQuMjk2LDQuNTE3LDguMzE5LDguMDIsMTEuODIxDQoJCQlsMjcuNTU4LDI3LjU1OGM3LjE2OCw3LjE2OCwxNi42OTksMTEuMTE1LDI2LjgzNiwxMS4xMTVjMTAuMTM4LDAsMTkuNjY4LTMuOTQ4LDI2LjgzNi0xMS4xMTVsMjcuNTU4LTI3LjU1OA0KCQkJYzMuNTAyLTMuNTAyLDYuMTc1LTcuNTI1LDguMDItMTEuODIxaDc0LjI1N2M4LjI5MiwwLDE1LjAxNS02LjcyMywxNS4wMTUtMTUuMDE1QzUxMi4wMDEsMzg0Ljg0Miw1MDUuMjc3LDM3OC4xMiw0OTYuOTg1LDM3OC4xMnoNCgkJCSBNMzkzLjQ3NiwzOTguNzM3bC0yNy41NTgsMjcuNTU4Yy0xLjQ5NiwxLjQ5Ni0zLjQ4NSwyLjMyLTUuNjAyLDIuMzJjLTIuMTE3LDAtNC4xMDYtMC44MjQtNS42MDItMi4zMmwtMjcuNTU4LTI3LjU1OA0KCQkJYy0zLjA4OS0zLjA4OS0zLjA4OS04LjExNSwwLTExLjIwNGwyNy41NTgtMjcuNTU3YzEuNDk2LTEuNDk2LDMuNDg1LTIuMzIsNS42MDItMi4zMmMyLjExNywwLDQuMTA2LDAuODI0LDUuNjAyLDIuMzINCgkJCWwyNy41NTgsMjcuNTU4QzM5Ni41NjUsMzkwLjYyMiwzOTYuNTY1LDM5NS42NDgsMzkzLjQ3NiwzOTguNzM3eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K'

  home.hidden = true
  bookmark.hidden = false
  create.hidden = true
  settings.hidden = true

  /* navHome.classList.remove('active')
  navBookmark.classList.add('active')
  navCreate.classList.remove('active')
  navSettings.classList.remove('active') */
})

navCreate.addEventListener('click', () => {
  header.textContent = 'Create'

  document.querySelector('[data-js=iconHome]').src =
    'data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibTI1NiAyMzMuMjljLTguMjg0IDAtMTUgNi43MTYtMTUgMTV2MTMuODY0YzAgOC4yODQgNi43MTYgMTUgMTUgMTVzMTUtNi43MTYgMTUtMTV2LTEzLjg2NGMwLTguMjg0LTYuNzE2LTE1LTE1LTE1eiIvPjxwYXRoIGQ9Im02MCAzNTIuMzgydjEzLjg2NGMwIDguMjg0IDYuNzE2IDE1IDE1IDE1czE1LTYuNzE2IDE1LTE1di0xMy44NjRjMC04LjI4NC02LjcxNi0xNS0xNS0xNXMtMTUgNi43MTYtMTUgMTV6Ii8+PHBhdGggZD0ibTQyMiAzNTIuMzgydjEzLjg2NGMwIDguMjg0IDYuNzE2IDE1IDE1IDE1czE1LTYuNzE2IDE1LTE1di0xMy44NjRjMC04LjI4NC02LjcxNi0xNS0xNS0xNXMtMTUgNi43MTYtMTUgMTV6Ii8+PHBhdGggZD0ibTQ5NyAyNDFjLTguMjg0IDAtMTUgNi43MTYtMTUgMTV2MTcuODE2aC0zMHYtMTcuODE2YzAtOC4yODQtNi43MTYtMTUtMTUtMTVzLTE1IDYuNzE2LTE1IDE1djE3LjgxNmgtMzB2LTE3LjgxNmMwLTguMjg0LTYuNzE2LTE1LTE1LTE1cy0xNSA2LjcxNi0xNSAxNXYzMi44MTYgMzguNTY1aC0zMS4xMjV2LTE0Mi42NTRjMC0yLjYxNS0uNzAzLTUuMjM2LTIuMDA5LTcuNTAybC01Ny44NjYtMTAwLjIzOHYtNDYuOTg3aDIwLjM4MmMtMS4zNTEgMi4yNTItMi4xNDIgNC44NzgtMi4xNDIgNy42OTUgMCA4LjI4NCA2LjcxNiAxNSAxNSAxNWg0OC4xMDRjOC4yODQgMCAxNS02LjcxNiAxNS0xNXMtNi43MTYtMTUtMTUtMTVoLTIzLjYxYzEuMzUxLTIuMjUyIDIuMTQyLTQuODc4IDIuMTQyLTcuNjk1IDAtOC4yODQtNi43MTYtMTUtMTUtMTVoLTU5Ljg3NmMtOC4yODQgMC0xNSA2LjcxNi0xNSAxNXY2MS45ODdsLTU3LjA2NyA5OC44NTVjLTEuODM1IDIuNDg5LTIuOTMzIDUuNTU0LTIuOTMzIDguODgzdjE0Mi42NTdoLTMxdi0zOC41NjUtMzIuODE3YzAtOC4yODQtNi43MTYtMTUtMTUtMTVzLTE1IDYuNzE2LTE1IDE1djE3LjgxNmgtMzB2LTE3LjgxNmMwLTguMjg0LTYuNzE2LTE1LTE1LTE1cy0xNSA2LjcxNi0xNSAxNXYxNy44MTZoLTMwdi0xNy44MTZjMC04LjI4NC02LjcxNi0xNS0xNS0xNXMtMTUgNi43MTYtMTUgMTV2MjQxYzAgOC4yODQgNi43MTYgMTUgMTUgMTVoNDgyYzguMjg0IDAgMTUtNi43MTYgMTUtMTV2LTI0MWMwLTguMjg0LTYuNzE2LTE1LTE1LTE1em0tMjQxLTEyOS45OTIgMzMuODk1IDU4LjcxNmgtNjcuNzkxem0tNDUgODguNzE3aDg5Ljg3NXYxMjcuNjU3aC04OS44NzV6bTE1MSAxNTcuNjU3djEyNC42MThoLTYwLjk4MXYtMTUuMDE5YzAtMjQuODIzLTIwLjE5NS00NS4wMTktNDUuMDE5LTQ1LjAxOS0yNC44MjMgMC00NS4wMTkgMjAuMTk1LTQ1LjAxOSA0NS4wMTl2MTUuMDE5aC02MC45ODF2LTEyNC42MTh6bS05MC45ODEgMTI0LjYxOGgtMzAuMDM3di0xNS4wMTljMC04LjI4MSA2LjczNy0xNS4wMTkgMTUuMDE5LTE1LjAxOSA4LjI4MSAwIDE1LjAxOSA2LjczNyAxNS4wMTkgMTUuMDE5djE1LjAxOXptLTE1MS4wMTkgMGgtOTB2LTE3OC4xODRoOTB6bTM2MiAwaC05MHYtMTc4LjE4NGg5MHoiLz48L2c+PC9zdmc+'

  document.querySelector('[data-js=iconBookmark]').src =
    'data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibTQxNC41IDBoLTMxN2MtMzcuMjIgMC02Ny41IDMwLjI4LTY3LjUgNjcuNXY0NDQuNWwxNzMuNS04Ni43NSAxNzMuNSA4Ni43NXYtMjQxaDEwNXYtMjAzLjVjMC0zNy4yMi0zMC4yOC02Ny41LTY3LjUtNjcuNXptLTY3LjUgNjcuNXYzOTUuOTU5bC0xNDMuNS03MS43NS0xNDMuNSA3MS43NXYtMzk1Ljk1OWMwLTIwLjY3OCAxNi44MjItMzcuNSAzNy41LTM3LjVoMjYwLjljLTcuMTk3IDEwLjczMi0xMS40IDIzLjYzNi0xMS40IDM3LjV6bTEwNSAxNzMuNWgtNzV2LTE3My41YzAtMjAuNjc4IDE2LjgyMi0zNy41IDM3LjUtMzcuNXMzNy41IDE2LjgyMiAzNy41IDM3LjV6Ii8+PC9nPjwvc3ZnPg=='

  document.querySelector('[data-js=iconCreate]').src =
    'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyLjAwMSA1MTIuMDAxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIuMDAxIDUxMi4wMDE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNDk2LjA2Myw2Mi4yOTlsLTQ2LjM5Ni00Ni40Yy0yMS4yLTIxLjE5OS01NS42OS0yMS4xOTgtNzYuODg4LDBsLTE4LjE2LDE4LjE2MWwxMjMuMjg0LDEyMy4yOTRsMTguMTYtMTguMTYxDQoJCQlDNTE3LjMxMSwxMTcuOTQ0LDUxNy4zMTQsODMuNTUsNDk2LjA2Myw2Mi4yOTl6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0yMi4wMTIsMzc2Ljc0N0wwLjI1MSw0OTQuMjY4Yy0wLjg5OSw0Ljg1NywwLjY0OSw5Ljg0Niw0LjE0MiwxMy4zMzljMy40OTcsMy40OTcsOC40ODcsNS4wNDIsMTMuMzM4LDQuMTQzDQoJCQlsMTE3LjUxMi0yMS43NjNMMjIuMDEyLDM3Ni43NDd6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwb2x5Z29uIHBvaW50cz0iMzMzLjQwNyw1NS4yNzQgMzguMTk4LDM1MC41MDYgMTYxLjQ4Miw0NzMuNzk5IDQ1Ni42OTEsMTc4LjU2OCAJCSIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K'

  document.querySelector('[data-js=iconSettings]').src =
    'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyLjAwMSA1MTIuMDAxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIuMDAxIDUxMi4wMDE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNDk2Ljk4NiwxMDMuODU0SDMyMi42MzFjLTEuODQ1LTQuMjk2LTQuNTE3LTguMzE5LTguMDItMTEuODIxbC0yNy41NTgtMjcuNTU4Yy03LjE2Ny03LjE2OC0xNi42OTgtMTEuMTE2LTI2LjgzNi0xMS4xMTYNCgkJCWMtMTAuMTM3LDAtMTkuNjY3LDMuOTQ4LTI2LjgzNiwxMS4xMTVsLTI3LjU1OCwyNy41NThjLTMuNTAyLDMuNTAyLTYuMTc1LDcuNTI1LTguMDIsMTEuODIxSDE1LjAxNQ0KCQkJQzYuNzIzLDEwMy44NTMsMCwxMTAuNTc1LDAsMTE4Ljg2N2MwLDguMjkyLDYuNzIzLDE1LjAxNiwxNS4wMTUsMTUuMDE2aDE4Mi43OWMxLjg0NSw0LjI5Niw0LjUxNyw4LjMxOSw4LjAyLDExLjgyMQ0KCQkJbDI3LjU1OCwyNy41NThjNy4xNjgsNy4xNjgsMTYuNjk5LDExLjExNSwyNi44MzYsMTEuMTE1YzEwLjEzOCwwLDE5LjY2OC0zLjk0OCwyNi44MzYtMTEuMTE1bDI3LjU1OC0yNy41NTgNCgkJCWMzLjUwMi0zLjUwMiw2LjE3NS03LjUyNSw4LjAyLTExLjgyMWgxNzQuMzU0YzguMjkyLDAsMTUuMDE1LTYuNzIzLDE1LjAxNS0xNS4wMTVTNTA1LjI3OSwxMDMuODU0LDQ5Ni45ODYsMTAzLjg1NHoNCgkJCSBNMjkzLjM3OSwxMjQuNDcybC0yNy41NTgsMjcuNTU4Yy0xLjQ5NiwxLjQ5Ni0zLjQ4NSwyLjMyLTUuNjAyLDIuMzJjLTIuMTE3LDAtNC4xMDYtMC44MjQtNS42MDItMi4zMmwtMjcuNTU4LTI3LjU1OA0KCQkJYy0zLjA4OS0zLjA5LTMuMDg5LTguMTE2LDAtMTEuMjA1bDI3LjU1OC0yNy41NTdjMS40OTYtMS40OTYsMy40ODUtMi4zMiw1LjYwMi0yLjMyYzIuMTE3LDAsNC4xMDYsMC44MjQsNS42MDIsMi4zMg0KCQkJbDI3LjU1OCwyNy41NThDMjk2LjQ2OCwxMTYuMzU3LDI5Ni40NjgsMTIxLjM4MywyOTMuMzc5LDEyNC40NzJ6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00OTYuOTg1LDI0Mi45ODlIMjA0LjEwOWMtMS44NzgtNC4zNTgtNC41ODUtOC4zNjUtOC4wNDItMTEuODIxbC0yNy41NTctMjcuNTU4DQoJCQljLTcuMTY4LTcuMTY4LTE2LjY5OS0xMS4xMTUtMjYuODM2LTExLjExNWMtMTAuMTM4LDAtMTkuNjY4LDMuOTQ4LTI2LjgzNiwxMS4xMTVsLTI3LjU1OCwyNy41NTgNCgkJCWMtMy41MDIsMy41MDItNi4xNzUsNy41MjUtOC4wMiwxMS44MjFIMTUuMDE1QzYuNzIzLDI0Mi45ODksMCwyNDkuNzExLDAsMjU4LjAwM3M2LjcyMywxNS4wMTUsMTUuMDE1LDE1LjAxNWg2NC4yNDcNCgkJCWMxLjg0NSw0LjI5Niw0LjUxNyw4LjMxOSw4LjAyLDExLjgyMWwyNy41NTgsMjcuNTU4YzcuMTY3LDcuMTY4LDE2LjY5OCwxMS4xMTYsMjYuODM2LDExLjExNg0KCQkJYzEwLjEzNywwLDE5LjY2Ny0zLjk0OCwyNi44MzYtMTEuMTE2bDI3LjU1Ny0yNy41NTdjMy40NTYtMy40NTYsNi4xNjQtNy40NjMsOC4wNDItMTEuODIxaDI5Mi44NzYNCgkJCWM4LjI5MiwwLDE1LjAxNS02LjcyMywxNS4wMTUtMTUuMDE1QzUxMi4wMDEsMjQ5LjcxMiw1MDUuMjc3LDI0Mi45ODksNDk2Ljk4NSwyNDIuOTg5eiBNMTc0LjgzNCwyNjMuNjA2bC0yNy41NTcsMjcuNTU3DQoJCQljLTEuNDk2LDEuNDk2LTMuNDg1LDIuMzItNS42MDIsMi4zMmMtMi4xMTcsMC00LjEwNi0wLjgyNC01LjYwMi0yLjMybC0yNy41NTgtMjcuNTU4Yy0zLjA4OS0zLjA4OS0zLjA4OS04LjExNSwwLTExLjIwNA0KCQkJbDI3LjU1OC0yNy41NThjMS40OTYtMS40OTYsMy40ODUtMi4zMiw1LjYwMi0yLjMyYzIuMTE3LDAsNC4xMDYsMC44MjQsNS42MDIsMi4zMmwyNy41NTcsMjcuNTU4DQoJCQljMS40OTYsMS40OTYsMi4zMiwzLjQ4NSwyLjMyLDUuNjAxQzE3Ny4xNTQsMjYwLjExOSwxNzYuMzMsMjYyLjEwOSwxNzQuODM0LDI2My42MDZ6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00OTYuOTg1LDM3OC4xMmgtNzQuMjU3Yy0xLjg0NS00LjI5Ni00LjUxNy04LjMxOS04LjAyLTExLjgyMWwtMjcuNTU4LTI3LjU1OGMtNy4xNjctNy4xNjgtMTYuNjk4LTExLjExNi0yNi44MzYtMTEuMTE2DQoJCQljLTEwLjEzNywwLTE5LjY2NywzLjk0OC0yNi44MzYsMTEuMTE1bC0yNy41NTgsMjcuNTU4Yy0zLjUwMiwzLjUwMi02LjE3NSw3LjUyNS04LjAyLDExLjgyMUgxNS4wMTUNCgkJCUM2LjcyMywzNzguMTE5LDAsMzg0Ljg0MiwwLDM5My4xMzRjMCw4LjI5Miw2LjcyMywxNS4wMTUsMTUuMDE1LDE1LjAxNWgyODIuODg4YzEuODQ1LDQuMjk2LDQuNTE3LDguMzE5LDguMDIsMTEuODIxDQoJCQlsMjcuNTU4LDI3LjU1OGM3LjE2OCw3LjE2OCwxNi42OTksMTEuMTE1LDI2LjgzNiwxMS4xMTVjMTAuMTM4LDAsMTkuNjY4LTMuOTQ4LDI2LjgzNi0xMS4xMTVsMjcuNTU4LTI3LjU1OA0KCQkJYzMuNTAyLTMuNTAyLDYuMTc1LTcuNTI1LDguMDItMTEuODIxaDc0LjI1N2M4LjI5MiwwLDE1LjAxNS02LjcyMywxNS4wMTUtMTUuMDE1QzUxMi4wMDEsMzg0Ljg0Miw1MDUuMjc3LDM3OC4xMiw0OTYuOTg1LDM3OC4xMnoNCgkJCSBNMzkzLjQ3NiwzOTguNzM3bC0yNy41NTgsMjcuNTU4Yy0xLjQ5NiwxLjQ5Ni0zLjQ4NSwyLjMyLTUuNjAyLDIuMzJjLTIuMTE3LDAtNC4xMDYtMC44MjQtNS42MDItMi4zMmwtMjcuNTU4LTI3LjU1OA0KCQkJYy0zLjA4OS0zLjA4OS0zLjA4OS04LjExNSwwLTExLjIwNGwyNy41NTgtMjcuNTU3YzEuNDk2LTEuNDk2LDMuNDg1LTIuMzIsNS42MDItMi4zMmMyLjExNywwLDQuMTA2LDAuODI0LDUuNjAyLDIuMzINCgkJCWwyNy41NTgsMjcuNTU4QzM5Ni41NjUsMzkwLjYyMiwzOTYuNTY1LDM5NS42NDgsMzkzLjQ3NiwzOTguNzM3eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K'

  home.hidden = true
  bookmark.hidden = true
  create.hidden = false
  settings.hidden = true

  /* navHome.classList.remove('active')
  navBookmark.classList.remove('active')
  navCreate.classList.add('active')
  navSettings.classList.remove('active') */
})

navSettings.addEventListener('click', () => {
  header.textContent = 'Settings'

  document.querySelector('[data-js=iconHome]').src =
    'data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibTI1NiAyMzMuMjljLTguMjg0IDAtMTUgNi43MTYtMTUgMTV2MTMuODY0YzAgOC4yODQgNi43MTYgMTUgMTUgMTVzMTUtNi43MTYgMTUtMTV2LTEzLjg2NGMwLTguMjg0LTYuNzE2LTE1LTE1LTE1eiIvPjxwYXRoIGQ9Im02MCAzNTIuMzgydjEzLjg2NGMwIDguMjg0IDYuNzE2IDE1IDE1IDE1czE1LTYuNzE2IDE1LTE1di0xMy44NjRjMC04LjI4NC02LjcxNi0xNS0xNS0xNXMtMTUgNi43MTYtMTUgMTV6Ii8+PHBhdGggZD0ibTQyMiAzNTIuMzgydjEzLjg2NGMwIDguMjg0IDYuNzE2IDE1IDE1IDE1czE1LTYuNzE2IDE1LTE1di0xMy44NjRjMC04LjI4NC02LjcxNi0xNS0xNS0xNXMtMTUgNi43MTYtMTUgMTV6Ii8+PHBhdGggZD0ibTQ5NyAyNDFjLTguMjg0IDAtMTUgNi43MTYtMTUgMTV2MTcuODE2aC0zMHYtMTcuODE2YzAtOC4yODQtNi43MTYtMTUtMTUtMTVzLTE1IDYuNzE2LTE1IDE1djE3LjgxNmgtMzB2LTE3LjgxNmMwLTguMjg0LTYuNzE2LTE1LTE1LTE1cy0xNSA2LjcxNi0xNSAxNXYzMi44MTYgMzguNTY1aC0zMS4xMjV2LTE0Mi42NTRjMC0yLjYxNS0uNzAzLTUuMjM2LTIuMDA5LTcuNTAybC01Ny44NjYtMTAwLjIzOHYtNDYuOTg3aDIwLjM4MmMtMS4zNTEgMi4yNTItMi4xNDIgNC44NzgtMi4xNDIgNy42OTUgMCA4LjI4NCA2LjcxNiAxNSAxNSAxNWg0OC4xMDRjOC4yODQgMCAxNS02LjcxNiAxNS0xNXMtNi43MTYtMTUtMTUtMTVoLTIzLjYxYzEuMzUxLTIuMjUyIDIuMTQyLTQuODc4IDIuMTQyLTcuNjk1IDAtOC4yODQtNi43MTYtMTUtMTUtMTVoLTU5Ljg3NmMtOC4yODQgMC0xNSA2LjcxNi0xNSAxNXY2MS45ODdsLTU3LjA2NyA5OC44NTVjLTEuODM1IDIuNDg5LTIuOTMzIDUuNTU0LTIuOTMzIDguODgzdjE0Mi42NTdoLTMxdi0zOC41NjUtMzIuODE3YzAtOC4yODQtNi43MTYtMTUtMTUtMTVzLTE1IDYuNzE2LTE1IDE1djE3LjgxNmgtMzB2LTE3LjgxNmMwLTguMjg0LTYuNzE2LTE1LTE1LTE1cy0xNSA2LjcxNi0xNSAxNXYxNy44MTZoLTMwdi0xNy44MTZjMC04LjI4NC02LjcxNi0xNS0xNS0xNXMtMTUgNi43MTYtMTUgMTV2MjQxYzAgOC4yODQgNi43MTYgMTUgMTUgMTVoNDgyYzguMjg0IDAgMTUtNi43MTYgMTUtMTV2LTI0MWMwLTguMjg0LTYuNzE2LTE1LTE1LTE1em0tMjQxLTEyOS45OTIgMzMuODk1IDU4LjcxNmgtNjcuNzkxem0tNDUgODguNzE3aDg5Ljg3NXYxMjcuNjU3aC04OS44NzV6bTE1MSAxNTcuNjU3djEyNC42MThoLTYwLjk4MXYtMTUuMDE5YzAtMjQuODIzLTIwLjE5NS00NS4wMTktNDUuMDE5LTQ1LjAxOS0yNC44MjMgMC00NS4wMTkgMjAuMTk1LTQ1LjAxOSA0NS4wMTl2MTUuMDE5aC02MC45ODF2LTEyNC42MTh6bS05MC45ODEgMTI0LjYxOGgtMzAuMDM3di0xNS4wMTljMC04LjI4MSA2LjczNy0xNS4wMTkgMTUuMDE5LTE1LjAxOSA4LjI4MSAwIDE1LjAxOSA2LjczNyAxNS4wMTkgMTUuMDE5djE1LjAxOXptLTE1MS4wMTkgMGgtOTB2LTE3OC4xODRoOTB6bTM2MiAwaC05MHYtMTc4LjE4NGg5MHoiLz48L2c+PC9zdmc+'

  document.querySelector('[data-js=iconBookmark]').src =
    'data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibTQxNC41IDBoLTMxN2MtMzcuMjIgMC02Ny41IDMwLjI4LTY3LjUgNjcuNXY0NDQuNWwxNzMuNS04Ni43NSAxNzMuNSA4Ni43NXYtMjQxaDEwNXYtMjAzLjVjMC0zNy4yMi0zMC4yOC02Ny41LTY3LjUtNjcuNXptLTY3LjUgNjcuNXYzOTUuOTU5bC0xNDMuNS03MS43NS0xNDMuNSA3MS43NXYtMzk1Ljk1OWMwLTIwLjY3OCAxNi44MjItMzcuNSAzNy41LTM3LjVoMjYwLjljLTcuMTk3IDEwLjczMi0xMS40IDIzLjYzNi0xMS40IDM3LjV6bTEwNSAxNzMuNWgtNzV2LTE3My41YzAtMjAuNjc4IDE2LjgyMi0zNy41IDM3LjUtMzcuNXMzNy41IDE2LjgyMiAzNy41IDM3LjV6Ii8+PC9nPjwvc3ZnPg=='

  document.querySelector('[data-js=iconCreate]').src =
    'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyLjAwMSA1MTIuMDAxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIuMDAxIDUxMi4wMDE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNDk2LjA2Myw2Mi4yOTlsLTQ2LjM5Ni00Ni40Yy0yMS4xOTktMjEuMTk5LTU1LjY4OS0yMS4xOTgtNzYuODg4LDBDMzUyLjgyLDM1Ljg2LDQ3Ljk2NCwzNDAuNzM5LDI3LjU5MSwzNjEuMTEzDQoJCQljLTIuMTcsMi4xNy0zLjYyNCw1LjA1NC00LjE0Miw3Ljg3NUwwLjI1MSw0OTQuMjY4Yy0wLjg5OSw0Ljg1NywwLjY0OSw5Ljg0Niw0LjE0MiwxMy4zMzljMy40OTcsMy40OTcsOC40ODcsNS4wNDIsMTMuMzM4LDQuMTQzDQoJCQlMMTQzLDQ4OC41NDljMi44OTUtMC41NCw1Ljc0MS0yLjAwOCw3Ljg3NS00LjE0M2wzNDUuMTg4LTM0NS4yMTRDNTE3LjMxMSwxMTcuOTQ0LDUxNy4zMTQsODMuNTUsNDk2LjA2Myw2Mi4yOTl6IE0zMy43MjEsNDc4LjI3Ng0KCQkJbDE0LjAzMy03NS43ODRsNjEuNzQ2LDYxLjc1TDMzLjcyMSw0NzguMjc2eiBNMTQwLjI2OSw0NTIuNTg1TDU5LjQxLDM3MS43MjFMMzU0LjYyLDc2LjQ4OGw4MC44NTksODAuODY1TDE0MC4yNjksNDUyLjU4NXoNCgkJCSBNNDc0Ljg1LDExNy45NzlsLTE4LjE1OSwxOC4xNjFsLTgwLjg1OS04MC44NjVsMTguMTU5LTE4LjE2MWM5LjUwMS05LjUwMiwyNC45Ni05LjUwMywzNC40NjMsMGw0Ni4zOTYsNDYuNA0KCQkJQzQ4NC4zNzUsOTMuMDM5LDQ4NC4zNzUsMTA4LjQ1Myw0NzQuODUsMTE3Ljk3OXoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=='

  document.querySelector('[data-js=iconSettings]').src =
    'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00OTYuOTg1LDEwMy44NTNIMzIyLjYyYy0xLjg0NS00LjI5NS00LjUwNi04LjMxOS04LjAwOC0xMS44MjFsLTI3LjU1OC0yNy41NThjLTcuMTY3LTcuMTY4LTE2LjY5OC0xMS4xMTYtMjYuODM2LTExLjExNg0KCQkJYy0xMC4xMzcsMC0xOS42NjcsMy45NDgtMjYuODM2LDExLjExNWwtMjcuNTU4LDI3LjU1OGMtMy41MDEsMy41MDEtNi4xNjQsNy41MjYtOC4wMDgsMTEuODIxSDE1LjAxNQ0KCQkJQzYuNzIzLDEwMy44NTIsMCwxMTAuNTc1LDAsMTE4Ljg2N2MwLDguMjkyLDYuNzIzLDE1LjAxNiwxNS4wMTUsMTUuMDE2aDE4Mi44MDJjMS44NDUsNC4yOTUsNC41MDYsOC4zMTksOC4wMDgsMTEuODIxDQoJCQlsMjcuNTU4LDI3LjU1OGM3LjE2OCw3LjE2OCwxNi42OTksMTEuMTE1LDI2LjgzNiwxMS4xMTVjMTAuMTM4LDAsMTkuNjY4LTMuOTQ4LDI2LjgzNi0xMS4xMTVsMjcuNTU4LTI3LjU1OA0KCQkJYzMuNTAxLTMuNTAxLDYuMTY0LTcuNTI2LDguMDA4LTExLjgyMWgxNzQuMzY1YzguMjkyLDAsMTUuMDE1LTYuNzIzLDE1LjAxNS0xNS4wMTVTNTA1LjI3NywxMDMuODUzLDQ5Ni45ODUsMTAzLjg1M3oiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTQ5Ni45ODUsMjQyLjk4OEgyMDQuMDk5Yy0xLjg3OC00LjM1Ny00LjU3Ni04LjM2NS04LjAzMi0xMS44MjFsLTI3LjU1Ny0yNy41NTgNCgkJCWMtNy4xNjgtNy4xNjgtMTYuNjk5LTExLjExNS0yNi44MzYtMTEuMTE1Yy0xMC4xMzgsMC0xOS42NjgsMy45NDgtMjYuODM2LDExLjExNWwtMjcuNTU4LDI3LjU1OA0KCQkJYy0zLjUwMSwzLjUwMS02LjE2NCw3LjUyNi04LjAwOCwxMS44MjFIMTUuMDE1QzYuNzIzLDI0Mi45ODgsMCwyNDkuNzExLDAsMjU4LjAwM3M2LjcyMywxNS4wMTUsMTUuMDE1LDE1LjAxNWg2NC4yNTgNCgkJCWMxLjg0NSw0LjI5NSw0LjUwNiw4LjMxOSw4LjAwOCwxMS44MjFsMjcuNTU4LDI3LjU1OGM3LjE2Nyw3LjE2OCwxNi42OTgsMTEuMTE2LDI2LjgzNiwxMS4xMTYNCgkJCWMxMC4xMzcsMCwxOS42NjctMy45NDgsMjYuODM2LTExLjExNmwyNy41NTctMjcuNTU3YzMuNDU1LTMuNDU1LDYuMTU1LTcuNDY0LDguMDMyLTExLjgyMWgyOTIuODg2DQoJCQljOC4yOTIsMCwxNS4wMTUtNi43MjMsMTUuMDE1LTE1LjAxNUM1MTIsMjQ5LjcxMiw1MDUuMjc3LDI0Mi45ODgsNDk2Ljk4NSwyNDIuOTg4eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNDk2Ljk4NSwzNzguMTJoLTc0LjI2OGMtMS44NDUtNC4yOTUtNC41MDYtOC4zMTktOC4wMDgtMTEuODIxbC0yNy41NTgtMjcuNTU4Yy03LjE2Ny03LjE2OC0xNi42OTgtMTEuMTE2LTI2LjgzNi0xMS4xMTYNCgkJCWMtMTAuMTM3LDAtMTkuNjY3LDMuOTQ4LTI2LjgzNiwxMS4xMTVsLTI3LjU1OCwyNy41NThjLTMuNTAxLDMuNTAxLTYuMTY0LDcuNTI2LTguMDA4LDExLjgyMWgtMjgyLjkNCgkJCUM2LjcyMywzNzguMTE5LDAsMzg0Ljg0MSwwLDM5My4xMzNjMCw4LjI5Miw2LjcyMywxNS4wMTUsMTUuMDE1LDE1LjAxNWgyODIuOWMxLjg0NSw0LjI5NSw0LjUwNiw4LjMxOSw4LjAwOCwxMS44MjENCgkJCWwyNy41NTgsMjcuNTU4YzcuMTY4LDcuMTY4LDE2LjY5OSwxMS4xMTUsMjYuODM2LDExLjExNWMxMC4xMzgsMCwxOS42NjgtMy45NDgsMjYuODM2LTExLjExNWwyNy41NTgtMjcuNTU4DQoJCQljMy41MDEtMy41MDEsNi4xNjQtNy41MjYsOC4wMDgtMTEuODIxaDc0LjI2OGM4LjI5MiwwLDE1LjAxNS02LjcyMywxNS4wMTUtMTUuMDE1QzUxMiwzODQuODQxLDUwNS4yNzcsMzc4LjEyLDQ5Ni45ODUsMzc4LjEyeiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K'

  home.hidden = true
  bookmark.hidden = true
  create.hidden = true
  settings.hidden = false

  /* navHome.classList.remove('active')
  navBookmark.classList.remove('active')
  navCreate.classList.remove('active')
  navSettings.classList.add('active') */
})
