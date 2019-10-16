import React from 'react'
import './Button.css'

class Button extends React.Component{
  constructor(){
    super()
    this.state={
      active:false,
      deltaX:0,
      deltaY:0
    }
    this.myRef=React.createRef()
    
  }
  render(){
    return (
      <button className="button2" onClick={this.x.bind(this)} 
      ref={this.myRef}>        
          {this.state.active}
          {this.state.active===true?<span className="circle" style={{left:this.state.deltaX,top:this.state.deltaY}}
          onAnimationEnd={this.y.bind(this)}
          ></span>:''}
          <span className="value">{this.props.value}</span>
      </button>
    )
  }
  x(e){
    let node = this.myRef.current
    let {x,y}=node.getBoundingClientRect()
    let {clientX,clientY}= e
    let deltaX = clientX-x-7.5
    let deltaY = clientY-y-7.5
    console.log(deltaX ,deltaY)
    this.setState({
      active:!this.state.active,
      deltaX:deltaX,
      deltaY:deltaY
    })
  }
  y(){
    this.setState({
      active:false
    })
  }
}





export default Button


