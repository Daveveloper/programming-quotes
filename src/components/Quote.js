import React from 'react'
	import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const Quote = ({data:{en, author, _id}}) => {


  return (
    <div className="quote">
      {
        en ?
        <ReactCSSTransitionGroup transitionName="anim" transitionAppear={true} transitionAppearTimeout={3000} transitionEnter={false} transitionLeave={false}>
          <cite className="quote__cite">
            <span className="quote__symbol">"</span>{en}
          </cite>
          <p className="quote__author">- {author}</p>
          <span style={{"display": "none"}}>{_id}</span>
        </ReactCSSTransitionGroup>
        :
        "Thinking..."
      }
    </div>
  )
}

export default Quote;
