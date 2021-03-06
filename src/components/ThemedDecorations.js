// Code ThemedDecoration Component Here
import React, { Component } from 'react'

export default class ThemedDecorations extends Component {

  render(){
    const themedChildren = React.Children.map(this.props.children, child => React.cloneElement(child, {className: this.props.theme}))

    return(
      <div>
        {themedChildren}
      </div>
    )
  }
}
