export default class Loader {
  loadData(url) {
    return window.fetch(url)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error(`${response.status} ${response.statusText}`);
        });
  }
  showError(error) {
    const node = document.createElement(`div`);
    node.style = `display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; margin: 0; text-align: center; background-color: rgba(0, 0, 0, .9); height: 100%;
      position: fixed; z-index: 10; top: 0; left: 0; right: 0; bottom: 0; color: #fff`;
    node.textContent = `Что-то пошло не так! ${error}`;
    document.body.insertAdjacentElement(`afterbegin`, node);
  }
}
