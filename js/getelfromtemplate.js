const getElFromTemplate = (html) => new DOMParser().parseFromString(html.trim(), `text/html`).body.childNodes;

export default getElFromTemplate;
