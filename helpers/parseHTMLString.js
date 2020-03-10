export const parseHTMLString = (el) => {
  const parser = new DOMParser()
  const docEL = parser.parseFromString(el, 'text/html')
  console.log(docEL)
  const paragraphs = docEL.getElementsByTagName('p')
  const sentences = []
  for (let p = 0; p < paragraphs.length; p++) {
    sentences.push(paragraphs[p].textContent)
  }
  return sentences.length > 1 ? sentences.join(' ') : sentences[0]
}
