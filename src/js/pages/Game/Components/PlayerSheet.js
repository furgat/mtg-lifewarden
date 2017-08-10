'use strict'
import React from 'react';

import * as Actions from '../../../actions/actions';
import Picker from '../../common/Components/Picker';
import TextButton from '../../common/Components/TextButton';
import TextInput from '../../common/Components/TextInput';
import Ticker from '../../common/Components/Ticker';

export default class PlayerSheet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      life : props.life,
      trackers : props.trackers
    }
  }

  updateLife(val) {
    const newLife = this.state.life + val;
    console.log(val);
    this.setState({life: newLife, trackers : this.state.trackers});
  }

  render() {
    const { classes, colors, id, life, name, trackers } = this.props;
    const colorIcons = colors.split('').map((color) => {
      return (
        <span key={id+'mana'+color} class={'mana small s'+color}></span>
      );
    })

    return (
      <div id={id} class={'player-sheet container ' + classes}>
        <div class='life col-xs-4'>
          <Ticker
            text={life}
            clickCallback={
              (value) => {
                Actions.updatePlayer(id, {life: life+value});
              }
            }
          />
        </div>
        <div class='col-xs-8'>
          <h2>
            {name}
            <span class='deck-colors'>
              {colorIcons}
            </span>
          </h2>
        </div>
      </div>
    );
  }
}
