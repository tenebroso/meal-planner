
import Polyglot from 'node-polyglot';

import localeData from '../configs/locale/en';

const polyglot = new Polyglot();
polyglot.extend(localeData);

export default polyglot;
