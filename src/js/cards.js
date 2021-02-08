import getAllByDataJs from './getAllByDataJs'
import getByDataJs from './getByDataJs'

export default function cards() {
  const cards = getAllByDataJs('card')

  cards.forEach(card => {
    const button = getByDataJs('button', card)
    const answer = getByDataJs('answer', card)

    button.addEventListener('click', () => {
      answer.classList.toggle('hidden')
    })
  })
}
