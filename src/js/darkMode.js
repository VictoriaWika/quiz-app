import getAllByDataJs from './getAllByDataJs'
import getByDataJs from './getByDataJs'

export default function darkMode() {
  const buttonDark = getByDataJs('button-dark')
  const buttonSubmit = getByDataJs('button-submit')
  const header = getByDataJs('header')
  const footer = getByDataJs('footer')
  const heading = getByDataJs('h1')
  const headingTwo = getAllByDataJs('h2')
  const cards = getAllByDataJs('card')
  const tags = getAllByDataJs('tag')
  const formLabels = getAllByDataJs('formLabel')
  const textareas = getAllByDataJs('textarea')

  buttonDark.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode')
    header.classList.toggle('dark-mode')
    footer.classList.toggle('dark-mode')
    heading.classList.toggle('dark-mode')
    buttonSubmit.classList.toggle('create__form-button-dark-mode')

    cards.forEach(card => {
      const button = getByDataJs('button', card)
      card.classList.toggle('quiz-card__dark-mode')
      button.classList.toggle('quiz-card__button-dark-mode')
    })

    textareas.forEach(area => {
      area.classList.toggle('create__form-text-dark-mode')
    })

    tags.forEach(tag => {
      tag.classList.toggle('quiz-card__tag-dark-mode')
    })

    headingTwo.forEach(h2 => {
      h2.classList.toggle('dark-mode')
    })

    formLabels.forEach(label => {
      label.classList.toggle('create__form-input-dark-mode')
    })
  })
}
