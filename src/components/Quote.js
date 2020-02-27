import React from 'react'
const Quote = ({data:{en, author, id}}) => {


  return (
    <div className="quote">
      {
        en ?
        <>
          <cite className="quote__cite">
            <span className="quote__symbol">"</span>{en}
          </cite>
          <p className="quote__author">- {author}</p>
          <span style={{"display": "none"}}>{id}</span>
        </>
        :
        "Thinking..."
      }
    </div>
  )
}

export default Quote;
