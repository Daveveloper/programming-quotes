import React from 'react'

const Title = ({title}) => {
  return (
    <div className="header">
      <h1 className="title">
        {title}
      </h1>
      <small className="designer">By Dave Araya</small>
    </div>
  )
}

export default Title
