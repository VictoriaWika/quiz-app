import getAllByDataJs from './getAllByDataJs'
import getByDataJs from './getByDataJs'

export default function formInputs() {
  const formInputs = getAllByDataJs('formInput')

  formInputs.forEach(formInput => {
    const textarea = getByDataJs('textarea', formInput)
    const counter = getByDataJs('counter', formInput)

    textarea.addEventListener('input', () => {
      const textLength = textarea.value.length
      counter.innerHTML =
        textarea.maxLength - textLength + '/' + textarea.maxLength
    })
  })
}
