'use strict';

const logger = require('../utils/logger');
const playlistCollection = require('../models/playlist-store.js');
const playlistStore = require('../models/playlist-store');

const dashboard = {
  index(request, response) {
    logger.info('dashboard rendering');
    const viewData = {
      title: 'Playlist Dashboard',
      playlists: playlistStore.getAllPlaylists(),
    };
    logger.info('about to render', playlistStore.getAllPlaylists());
    response.render('dashboard', viewData);
  },
  deleteplaylist(request, response) {
    console.log("ID of playlist to be deleted : "+ request.params.id);
    playlistStore.removePlaylist(request.params.id);
    response.redirect('/dashboard');
  }
};


module.exports = dashboard;
