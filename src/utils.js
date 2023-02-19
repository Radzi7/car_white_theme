const createElement = (tagName, className, content) => {
  const el = document.createElement(tagName);
  if (className) el.setAttribute("class", className);
  if (content) el.innerHTMl = content;
  return el;
};
