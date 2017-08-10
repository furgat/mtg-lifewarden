'use strict'
import React from 'react';

import * as Actions from '../../../actions/actions';
import IconButton from '../../common/Components/IconButton';
import Picker from '../../common/Components/Picker';
import TextButton from '../../common/Components/TextButton';
import TextInput from '../../common/Components/TextInput';
import Ticker from '../../common/Components/Ticker';

export default class PlayerSheet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      life : props.data.life,
      trackers : props.data.trackers
    }
  }

  updateLife(val) {
    const newLife = this.state.life + val;
    console.log(val);
    this.setState({life: newLife, trackers : this.state.trackers});
  }

  render() {
    const { classes, data } = this.props;
    const { colors, id, life, monarch, name, trackers } = data;
    const colorIcons = colors.split('').map((color) => {
      return (
        <span key={id+'mana'+color} class={'mana small s'+color}></span>
      );
    });
    const monarchButtonClass = 'monarch-button' + (monarch == 'true' ? ' the-monarch' : '');

    return (
      <div id={id} class={'player-sheet container ' + classes}>
        <div class='info col-xs-12'>
          <span class='name'>
            {name}
          </span>
          <span class='deck-colors'>
            {colorIcons}
          </span>
          <div class='pull-right'>
            <IconButton
              buttonClass={monarchButtonClass}
              clickCallback={() => {
                Actions.updatePlayer(id, {monarch: (monarch == 'true' ? 'false' : 'true')});
              }}
              iconClass='glyphicon glyphicon-king'
              labelText='monarch button'
            />
          </div>
        </div>
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
        <div class='trackers col-xs-8'>

        </div>
      </div>
    );
  }
}
