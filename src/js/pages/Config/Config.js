'use strict'
import React from 'react';

import * as Actions from '../../actions/actions';
import GameState from '../../stores/gamestate';
import PlayerCard from './Components/PlayerCard';
import TextButton from '../common/Components/TextButton';

export default class Config extends React.Component {
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

  checkPlayer(data) {
    const { colors, life, name } = data;
    if (name == '' || life == '' || life == 0 || colors == '') {
      return false;
    }
    return true;
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
        <section id='config' class='top-container'>
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
                clickCallback={
                  () => {
                    let ready = (players.length >= 2 ? true : false);

                    for(let player in players) {
                      if (!this.checkPlayer(player)) {
                        ready = false;
                      }
                    }

                    if (ready) this.props.router.push('/game');
                  }
                }
                text='DUEL'
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
