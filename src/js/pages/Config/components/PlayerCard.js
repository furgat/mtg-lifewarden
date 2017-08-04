'use strict'
import React from 'react';

import * as Actions from '../../../actions/actions';
import Picker from '../../common/Components/Picker';
import TextButton from '../../common/Components/TextButton';
import TextInput from '../../common/Components/TextInput';

const COLORS = {
  sw : 'W',
  su : 'U',
  sb : 'B',
  sr : 'R',
  sg : 'G',
  sc : 'C'
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
          <div class='input-group col-xs-7'>
            <label class='col-xs-4'>Name</label>
            <TextInput
              classes='col-xs-8'
              changeCallback={
                (value) => {
                  Actions.updatePlayer(id, {name: value});
                }
              }
              value={name}
            />
          </div>
          <div class='input-group col-xs-3'>
            <label class='col-xs-5'>Life</label>
            <TextInput
              classes='col-xs-7'
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
