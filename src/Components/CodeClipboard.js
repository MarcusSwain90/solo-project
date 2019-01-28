const myTreeData = [
    {
      name: 'Parent Node',
      nodeSvgShape: {
        shape: 'rect',
        shapeProps: {
        width: 30,
        height: 20,
        x: -15,
        y: -10,
        fill: 'blue',
        },
      },
      children: [
        {
          name: 'Inner Node',
          nodeSvgShape: {
            shape: 'rect',
            shapeProps: {
              width: 20,
              height: 20,
              x: -10,
              y: -10,
              fill: 'red'
            },
          },
        },
        {
          name: 'Level 2: B',
        },
        {
          name: 'Level 2: B',
        },
        {
          name: 'Level 2: B',
        },
        {
          name: 'Level 2: B',
        }
      ],
    },
  ];
  
  const svgSquare = {
    shape: 'rect',
    shapeProps: {
      width: 20,
      height: 20,
      x: -10,
      y: -10,
    }
  }
  