import getAllByDataJs from './getAllByDataJs'

export default function bookmarks() {
  const bookmarks = getAllByDataJs('bookmark')

  bookmarks.forEach(bookmark => {
    bookmark.addEventListener('click', () => {
      bookmark.classList.toggle('quiz-card__bookmark--active')
    })
  })
}
