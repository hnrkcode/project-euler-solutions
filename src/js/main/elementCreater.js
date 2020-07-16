/** Create HTML element
 *
 * Returns an element object created from the parameter.
 * 
 * @param {object} data Attributes of the element.
 * 
 * The data object's properties are:
 * tag:     (String)  name of the HTML tag to create.
 * classes: (Array)   contains (String)s with class names to add to the element.
 * content: (String)  text to insert into the elements textContent.
 * href:    (String)
 * 
 * @return {object} a new HTML element object.
 */
export const create = (data) => {
  const el = document.createElement(data.tag);

  for (let attribute in data) {
    if (attribute === "classes") {
      el.classList.add(...data[attribute]);
    }

    if (attribute === "content") {
      el.textContent = data[attribute];
    }

    if (attribute === "href") {
      el.href = data[attribute];
    }
  }

  return el;
};
