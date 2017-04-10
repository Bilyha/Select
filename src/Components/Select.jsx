import React, { Component } from 'react';

class Select extends Component {

constructor(props) {
  super(props);
  this.state = {
    value: this.props.defaultValue,
    isOpened: false,
  }
  this.doSomething = this.doSomething.bind(this);
  this.Clic = this.Clic.bind(this);
}

doSomething(value) {
  console.log('doSomething called by child with value:',value);

  this.setState({
    value: value,
    isOpened: !this.state.isOpened
  })

}
Clic() {
  this.setState({
    isOpened: !this.state.isOpened,
  })
}

render() {
  let openUp;
  if (this.props.reverse)
    openUp = "openUp"

const childrenWithProps = React.Children.map(this.props.children,
       (child) => React.cloneElement(child, {
         doSomething: this.doSomething
       })
      );

  return (
    <div>
      <button
        className="select__button"
        disabled={this.props.disabled}
        onClick={this.Clic}
        >
        <span>{this.state.value}</span>
        <i className={`fa fa-chevron-down select__button__chevron  ${this.state.isOpened  ? "up " : "down"} `}> </i>
      </button>
      <ul className={`select__list  ${this.state.isOpened ? "" : "hidden" } ${openUp}`} >
        {childrenWithProps}
      </ul>
    </div>
  )
}
}
export default Select
