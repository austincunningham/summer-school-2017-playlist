'use strict';

const logger = require('../utils/logger');

const welcome = {
  index(request, response) {
    logger.info('about rendering');
    const viewData = {
      title: 'Welcome Playlist',
    };
    response.render('welcome', viewData);
  },
};



module.exports = welcome;