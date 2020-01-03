import React from 'react';
import { useDrop } from 'react-dnd'
import itemTypes from './ItemTypes';

function DesignPanel () {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: itemTypes.PLUGIN,
    collect: monitor => ({
      canDrop: monitor.canDrop(),
      isOver: monitor.isOver(),
    }),
    drop: () => ({ name: 'DesignPanel' }),

  })

  const isActive = canDrop && isOver
  let backgroundColor = '#222'
  if (isActive) {
    backgroundColor = 'darkgreen'
  } else if (canDrop) {
    backgroundColor = 'darkkhaki'
  }

  return <div
    ref={drop}
    style={{ backgroundColor }} 
    className="designPanel">
    Drop Target
    </div>
}

export default DesignPanel;
