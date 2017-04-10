import React, { Component } from 'react'

class OptionGroup extends Component {

render() {

const childrenWithProps = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, {
        doSomething: this.props.doSomething
          })
        );

    return (
      <ul  className="select__optiongroup">
            <li className="select__optiongroup__lable">{this.props.label}</li>
            {childrenWithProps}
       </ul>
    )
  }
}

export default OptionGroup
