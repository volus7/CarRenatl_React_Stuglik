import React from 'react'

export const Props = ({props}) => {
  return (
    <div>
        {
          Object.entries(props).map(([key, value], ind)=>{
            return <p key={ind}>{key}: {value}</p>
          })
        }
    </div>
  )
}
export default Props;
