import React from 'react';
import { useDrag } from 'react-dnd'


function Menu () {
  return (
    <div>Menu</div>
  )
}

Menu.MenuItem = function MenuItem ({ current, children, ...props }) {
  const [{ isDragging }, drag] = useDrag({
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      alert(1)
      if (item && dropResult) {
        alert(`You dropped ${item.name} into ${dropResult.name}!`)
      }
    },
    item: current
  })
  const opacity = isDragging ? 0.4 : 1

  return <div
    style={{ opacity }}
    className="menuItem"
    {...props} ref={drag} >
    {children}</div>
}


export default Menu;

