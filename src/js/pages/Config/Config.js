'use strict'
import React from 'react';

import * as Actions from '../../actions/actions';
import GameState from '../../stores/gamestate';
import PlayerCard from './components/PlayerCard';
import TextButton from '../common/Components/TextButton';

export default class Config extends React.Component {
  constructor() {
    super();
    this.state = {
      players : []
    };
  }

  componentWillMount() {
    GameState.on('update', this.getGameState.bind(this));
    this.getGameState();
  }

  componentWillUnmount() {
    GameState.removeListener('update', this.getGameState.bind(this));
  }

  getGameState() {
    const players = GameState.getPlayers();
    this.setState({players});
  }

  render() {
    const { players } = this.state;
    const playerCards = players.map((player) => {
      return(
        <PlayerCard
          id={player.id}
          key={player.id}
          colors={player.colors}
          name={player.name}
          life={player.life}
        />
      );
    });

    return(
      <section id='config'>
        <div class='well-label clearfix'>
          <div class='fleft'>
            Players
          </div>
          <div class='fright'>
            <TextButton
              clickCallback={() => { Actions.addPlayer(); }}
              text='ADD A PLAYER'
            />
          </div>
        </div>
        <div class='well'>
          {playerCards}
        </div>
      </section>
    );
  }
}
