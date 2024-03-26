import React from 'react'

export const Props = ({props}) => {
  return (
    <div>
        <h2>{props.name}</h2>
        <p>{props.desc}</p>
        </div>
  )
}
export default Props;
