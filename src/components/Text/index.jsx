import * as React from 'react'

interface TextProps {
  text: String
}

function Text (props: TextProps) {
  return (
    <div className="text">{props.text}</div>
  )
}

export default Text;
