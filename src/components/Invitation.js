// Code Invitation Component Here
import React from 'react'

export default class Invitation extends React.Component {


  render(){
  //  const attemptedChildren = React.Children.map(this.props.children, child => { return (<div className="content">{child}</div>)})
  // do not need to map because single child.
    return(
      <div>
        <h1>You've been invited!</h1>
        {this.props.children}
      </div>
    )
  }

}

// Invitation
