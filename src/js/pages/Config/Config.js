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

  componentDidUpdate() {

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
          <h1 class='fleft'>
            Lifewarden
          </h1>
          <div class='fright'>
            <TextButton
              clickCallback={() => { Actions.addPlayer(); }}
              text='ADD PLAYER'
            />
            &nbsp;
            <TextButton
              clickCallback={() => { Actions.addPlayer(); }}
              text='DUEL'
            />
          </div>
        </div>
        <div
          class='well'
        >
          {playerCards}
        </div>
      </section>
    );
  }
}
