'use strict';
import React from 'react';
import { EventEmitter } from 'events';

import { ACTIONS } from '../actions/actions';
import dispatcher from '../dispatchers/dispatcher';

const DEFAULT_PLAYER = {
  colors: '',
  id: 0,
  life: 20,
  monarch: false,
  name: 'New Player',
  trackers: []
}

const DEFAULT_TRACKER = {
  count: 0,
  icon: '',
  id: 0,
  name: 'New Tracker'
}

const LOG = false;

class GameState extends EventEmitter {
  constructor() {
    super();
    this.state = {
      players : [
        {
          colors: '',
          id: 0,
          life: 20,
          monarch: false,
          name: 'Player 1',
          trackers: []
        },
        {
          colors: '',
          id: 1,
          life: 20,
          monarch: false,
          name: 'Player 2',
          trackers: []
        },
        {
          colors: '',
          id: 0,
          life: 20,
          monarch: false,
          name: 'Player 3',
          trackers: []
        },
        {
          colors: '',
          id: 1,
          life: 20,
          monarch: false,
          name: 'Player 4',
          trackers: []
        }
      ]
    }

    /* all of this is temporary */
    this.state.players[0].id = Date.now();
    this.state.players[1].id = (Date.now() + 1);
    this.state.players[2].id = (Date.now() + 2);
    this.state.players[3].id = (Date.now() + 3);
    /* end temporary */

    if (LOG) this._logState();
  }

  _addPlayer() {
    if (this.state.players.length >= 4) return;

    let new_player = JSON.parse(JSON.stringify(DEFAULT_PLAYER));
    new_player.id = Date.now();
    new_player.name = 'Player ' + (this.state.players.length + 1);

    this.state.players.push(new_player);
  }

  _addTracker() {

  }

  _copyData(original, data) {

  }

  _delPlayer(id) {
    if (this.state.players.length <= 0) return;

    const copyPlayers = JSON.parse(JSON.stringify(this.state.players));
    copyPlayers.forEach((player, index) => {
      if (player.id == id) this.state.players.splice(index, 1);
    })
  }

  _delTracker(id) {

  }

  getPlayers() {
    return this.state.players;
  }

  getTrackers() {
    return this.state.trackers;
  }

  _logState() {
    console.log(JSON.stringify(this.state));
  }

  _updPlayer(id, data) {
    if (this.state.players.length <= 0) return;

    const { players } = this.state;
    const index = players.forEach((player, index) => {
      if (player.id == id) {
        Object.keys(player).forEach((key) => {
          if (data[key])
            player[key] = data[key];
        });
      }
    });
  }

  _updTracker (id, data) {

  }

  // actions
  handleActions(action) {
    const { data, id, type } = action;

    switch(type) {
      case ACTIONS.ADD_PLAYER:
        this._addPlayer();
        break;
      case ACTIONS.DEL_PLAYER:
        this._delPlayer(id);
        break;
      case ACTIONS.UPD_PLAYER:
        this._updPlayer(id, data);
        break;
      case ACTIONS.ADD_TRACKER:
        break;
      case ACTIONS.DEL_TRACKER:
        break;
      case ACTIONS.UPD_TRACKER:
        break;
      default:
        break;
    }

    if (LOG) this._logState();
    this.emit('update');
  }
}

const gameState = new GameState();
dispatcher.register(gameState.handleActions.bind(gameState));

export default gameState;
