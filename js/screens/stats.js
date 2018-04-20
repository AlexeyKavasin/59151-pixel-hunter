import StatsView from './views/stats-view';
import back from './back';

export const statsScreen = (state, answers) => {
  const screen = new StatsView(state, answers);

  back(screen.element, state);

  return screen.element;
};
