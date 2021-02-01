import getByDataJs from './getByDataJs'

export default function formSubmit() {
  const formSubmit = getByDataJs('formSubmit')
  const inputQuestion = getByDataJs('textarea')

  formSubmit.addEventListener('submit', event => {
    event.preventDefault()
    formSubmit.reset()

    inputQuestion.focus()
  })
}
