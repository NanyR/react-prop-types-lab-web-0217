import React from 'react'



export class Product extends React.Component {
  render(){
    return(
      <div>
        <h1>Name: {this.props.name}</h1>
          <p>Producer: {this.props.producer}</p>
          <p>Color: {this.props.color}</p>
          <p>Watermark: {this.props.hasWatermark ? 'yes':'no'}</p>
          <p>Weight: {this.props.weight}</p>
      </div>

    )
  }
}

Products.propTypes={
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']),
  weight: weightRange.isRequired
}

Products.defaultProps={
  hasWatermark:false
}

const weightRange= function(props, propName, componentName){
  if(props[propName]<80 || props[propName]>300){
    return new Error(
      `Weight must be between 80 and 300 for ${componentName}`
    )
  }
}
