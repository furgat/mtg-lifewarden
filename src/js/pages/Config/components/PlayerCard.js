'use strict'
import React from 'react';

import * as Actions from '../../../actions/actions';
import Picker from '../../common/Components/Picker';
import TextButton from '../../common/Components/TextButton';
import TextInput from '../../common/Components/TextInput';

// constants file later
const COLORS = {
  sw : 'w',
  su : 'u',
  sb : 'b',
  sr : 'r',
  sg : 'g',
  sc : 'c'
}

export default class PlayerCard extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { colors, id, life, name } = this.props;

    return (
      <div id={id} class='player-card container'>
        <div class='h-grouping col-xs-12'>
          <div class='input-group col-xs-5'>
            <label class='col-xs-5'>Name</label>
            <TextInput
              classes='col-xs-7'
              changeCallback={
                (value) => {
                  Actions.updatePlayer(id, {name: value});
                }
              }
              value={name}
            />
          </div>
          <div class='input-group col-xs-3'>
            <label class='col-xs-6'>Life</label>
            <TextInput
              classes='col-xs-6'
              changeCallback={
                (value) => {
                  Actions.updatePlayer(id, {life: value});
                }
              }
              value={life}
            />
          </div>
            <TextButton
              classes='col-xs-1 pull-right gray'
              text='X'
              clickCallback={() => {
                Actions.deletePlayer(id);
              }}
            />
        </div>
        <div class='input-group col-xs-12'>
          <label class='col-xs-3'>Colors</label>
          <Picker
            changeCallback={
              (value) => {
                Actions.updatePlayer(id, {colors: value});
              }
            }
            classes='picker col-xs-9'
            iconClass='mana small'
            name='colors'
            options={COLORS}
            prefix={id}
            selected={colors}
          />
        </div>
      </div>
    );
  }
}
