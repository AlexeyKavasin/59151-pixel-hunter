const STATS_URL = `https://es.dump.academy/pixel-hunter/stats/`;
const APP_ID = 42;

const checkResponse = (response) => {
  if (response.ok) {
    return response;
  } else {
    throw new Error(`${response.status} ${response.statusText}`);
  }
};

const covertToJSON = (data) => data.json();

export default class Loader {
  loadData(url) {
    return window.fetch(url).then(checkResponse).then(covertToJSON);
  }

  loadStats(userName) {
    return window.fetch(`${STATS_URL}:${APP_ID}:${userName}`).then(checkResponse).then(covertToJSON);
  }

  uploadStats(stats, userName) {
    return window.fetch(`${STATS_URL}:${APP_ID}:${userName}`, {
      method: `post`,
      headers: {
        'Content-Type': `application/json`
      },
      body: JSON.stringify(stats)
    }).then(checkResponse);
  }

  showError(error) {
    const node = document.createElement(`div`);
    node.classList.add(`load-error`);
    node.textContent = `Что-то пошло не так! ${error}`;
    document.body.insertAdjacentElement(`afterbegin`, node);
  }
}
