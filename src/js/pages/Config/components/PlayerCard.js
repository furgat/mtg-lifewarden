'use strict'
import React from 'react';

import * as Actions from '../../../actions/actions';
import Picker from '../../common/Components/Picker';
import TextButton from '../../common/Components/TextButton';
import TextInput from '../../common/Components/TextInput';

export default class PlayerCard extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { colors, id, life, name } = this.props;

    return (
      <div id={id} class='player-card'>
        <div class='input-group'>
          <label>Name: </label>
          <TextInput
            value={name}
            changeCallback={
              (value) => {
                Actions.updatePlayer(id, {name: value});
              }
            }
          />
        </div>
        <div class='input-group'>
          <label>Life Total: </label>
          <TextInput
            value={life}
            validClass='valid'
            invalidClass='invalid'
            changeCallback={
              (value) => {
                Actions.updatePlayer(id, {life: value});
              }
            }
          />
        </div>
        <div class='input-group'>
          <label>Colors: </label>
          <Picker />
        </div>
        <TextButton
          classes='.col-xs-12'
          text='DELETE PLAYER'
          clickCallback={() => {
            Actions.deletePlayer(id);
          }}
        />
      </div>
    );
  }
}
