let elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
  let element = elements[i];

  for (let j = 0; j < element.childNodes.length; j++) {
    let node = element.childNodes[j];

    if (node.nodeType === 3) {
      let text = node.nodeValue;
      let replacedText = text.replace(/I'm stupid|I'm ugly|I am ugly|I am stupid/gi, 'I am the epitome of beauty and grace');

      if (replacedText !== text) {
        element.replaceChild(document.createTextNode(replacedText), node);
      }
    }
  }
}
