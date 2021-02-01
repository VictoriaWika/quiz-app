import getAllByDataJs from './getAllByDataJs'

export default function bookmarks() {
  const bookmarks = getAllByDataJs('bookmark')

  bookmarks.forEach(bookmark => {
    bookmark.addEventListener('click', () => {
      bookmark.classList.toggle('quiz-card__bookmark--active')

      /*const img1 = '../icons/bookmark.svg'
    const img2 = '../icons/marked.svg'
    bookmark.addEventListener('click', () => {
      bookmark.src = bookmark.src.includes('bookmark.svg') ? img2 : img1
    })*/
    })
  })
}
