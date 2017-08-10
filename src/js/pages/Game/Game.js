'use strict'
import React from 'react';

import * as Actions from '../../actions/actions';
import GameState from '../../stores/gamestate';
import PlayerSheet from './Components/PlayerSheet';
import TextButton from '../common/Components/TextButton';

export default class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      players : []
    };
    this.stateListener = this.getGameState.bind(this);
  }

  componentWillMount() {
    GameState.on('update', this.stateListener);
    this.getGameState();
  }

  componentWillUnmount() {
    GameState.removeListener('update', this.stateListener);
  }

  getGameState() {
    const players = GameState.getPlayers();
    this.setState({players});
  }

  render() {
    const { players } = this.state;
    const playerSheets = players.map((player, index) => {
      return(
        <PlayerSheet
          id={player.id}
          key={player.id}
          classes={'player'+(index+1)}
          colors={player.colors}
          name={player.name}
          life={player.life}
        />
      );
    });

    return(
      <section id='game'>
        <div class='nav'>
          <TextButton
            clickCallback={() => { this.props.router.push('/'); }}
            text='BACK'
          />
        </div>
        <div>
          {playerSheets}
        </div>
      </section>
    );
  }
}
