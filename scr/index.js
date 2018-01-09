var page = require('page');
var moment = require('moment');
require('moment/locale/es');


moment.locale('es');
require('./homepage');
require('./signup');
require('./user-page');
require('./signin');
page();