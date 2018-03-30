const getElFromTemplate = (tmpl) => {
  const container = document.createElement(`div`);
  container.innerHTML = tmpl;
  return container;
};

export default getElFromTemplate;
