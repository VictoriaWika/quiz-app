import getAllByDataJs from './getAllByDataJs'
import getByDataJs from './getByDataJs'

export default function navigation() {
  const heading = getByDataJs('h1')

  const pages = getAllByDataJs('page')
  const navIcons = getAllByDataJs('nav')

  navIcons.forEach(icon => {
    const clickedIconName = icon.dataset.name
    icon.addEventListener('click', () => {
      pages.forEach(page => {
        const pageName = page.dataset.name
        page.classList.toggle('hidden', clickedIconName !== pageName)
      })
      navIcons.forEach(icon => {
        icon.classList.toggle('active', clickedIconName === icon.dataset.name)
      })
    })
  })

  navIcons.forEach(icon => {
    /* const navHome = icon.dataset.name
  const navBookmark = getByDataJs('iconBookmark')
  const navCreate = getByDataJs('iconCreate')
  const navSettings = getByDataJs('iconSettings') */

    icon.addEventListener('click', () => {
      heading.textContent = 'Quiz App'
    })

    icon.addEventListener('click', () => {
      heading.textContent = 'Bookmarks'
    })

    icon.addEventListener('click', () => {
      heading.textContent = 'Create'
    })

    icon.addEventListener('click', () => {
      heading.textContent = 'Settings'
    })
  })
}
