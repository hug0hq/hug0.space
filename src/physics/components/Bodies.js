import React, { useCallback, useEffect, useState, useRef, useContext } from 'react';
import Matter from "matter-js";

const Circle = PixiComponent('Rectangle', {
    create: props => new Graphics(),
    applyProps: (instance, _, props) => {
      const { x, y, width, height, fill } = props;
      instance.clear();
      instance.beginFill(fill);
      instance.drawRect(x, y, width, height);
      instance.endFill();
    },
  });

const Bodies = (props) => {
    const bodies = Matter.Bodies;
    bodies( ...props) 

}

export default Bodies