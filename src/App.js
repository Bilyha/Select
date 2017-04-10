import React, { Component } from 'react';
import './App.css';

import Select from './Components/Select';
import Option from './Components/Option';
import OptionGroup from './Components/OptionGroup';
import Divider from './Components/Divider';


class App extends Component {
  render() {
    return (
      <div className="select">
        
        <Select  defaultValue="Vlad">
          <Option value="Option1" disabled/>
          <Option value="Option2" />
          <Option value="Option3" />
        </Select>

        <Select defaultValue="Vlad" disabled />

        <Select  defaultValue="Vlad">
          <OptionGroup label="Group1">
            <Option value="Option1" />
            <Option value="Option2" />
          </OptionGroup>
          <Divider />
          <OptionGroup label="Group2">
            <Option value="Option1" />
            <Option value="Option2" disabled/>
          </OptionGroup>
        </Select>

        <Select  defaultValue="Vlad"  reverse>
          <OptionGroup label="Group1">
            <Option value="Option1" />
            <Option value="Option2" />
          </OptionGroup>
          <Divider />
          <OptionGroup label="Group2">
            <Option value="Option1" />
            <Option value="Option2" disabled/>
          </OptionGroup>
        </Select>
      </div>
    );
  }
}

export default App;
