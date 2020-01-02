import * as React from 'react'

const defaultImg = "https://b-ssl.duitang.com/uploads/item/201507/04/20150704212949_PSfNZ.jpeg"

interface TextProps {
  src?: String
}

function Image (props: TextProps) {
  return (
    <div className="image">
      <img src={props.src || defaultImg} alt="" />
    </div>
  )
}

export default Image;
