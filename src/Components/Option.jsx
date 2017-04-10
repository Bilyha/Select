import React from 'react';

export default function Option(props) {
  const {value, disabled } = props;
  let dis;
  if (disabled)
    dis = "disabled";


  return(
      <li onClick={() => props.doSomething(value)} className={`select__list__item ${dis}`}  value={value}>{value}</li>
  )
}
