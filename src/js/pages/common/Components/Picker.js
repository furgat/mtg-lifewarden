'use strict'
import React from 'react';

export default class Picker extends React.Component {
  constructor() {
    super();
    this.state = {
      checked: []
    }
  }

  stateMutate(event) {
    const { checked } = this.state;
    const { value } = event.target;

    if (checked.includes(value)) {
      for(let opt in checked) {
        if (checked[opt] === value) {
          checked.splice(opt, 1);
        }
      }
    } else {
        checked.push(value);
    }

    return checked;
  }

  render() {
    const { classes, changeCallback, iconClass, name, options, prefix, selected } = this.props;
    const keys = Object.keys(options).map((key) => {
      return key;
    });

    const formattedOptions = keys.map((option) => {
      return (
        <li
          key={prefix + option}
        >
          <input
            id={prefix + option}
            name={name}
            type='checkbox'
            onChange={(event) => {
              const checked = this.stateMutate(event);
              let total = '';

              for(let opt in checked)
                total += checked[opt];

              if (typeof changeCallback === 'function') changeCallback(total);
            }}
            value={options[option]}
          />
          <label
            class={option}
            for={prefix + option}
            onClick={(event) => { event.stopPropagation(); }}
          >
            <span class={iconClass + ' ' + option}></span>
          </label>
        </li>
      );
    });

    return(
      <ul class={classes}>
        {formattedOptions}
      </ul>
    );
  }
}
