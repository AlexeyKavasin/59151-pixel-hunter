import showScreen from './showscreen';
import introScreen from './screens/intro';
import {initStatCount} from './data/stats-count';

showScreen(introScreen());
initStatCount();
