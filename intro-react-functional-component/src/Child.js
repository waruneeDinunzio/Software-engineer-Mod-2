import React from 'react';

const Child = (props) => {
  // we need to pass in props in the parameters for us to use it
  console.log(props)
  return (
    <div>
      THIS IS A CHILD: {props.name}
    </div>
  );
};

export default Child;