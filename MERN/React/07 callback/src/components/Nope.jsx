import React, { useEffect,memo } from "react";

const Nope = ({fn}) => {

useEffect(() => {
console.log("I am rerendered")
},);


  return <div>nope
  </div>;
};

export default memo(Nope)
//so basically what usecallback does is that if it is applied to a function then the function will only rerender if any of its dependencies change otherwise it wont re render in this code we have use memeo in this componet and passed a fn to it to so that this component will rerender if the function rerenders and the function is given use callback and it does not rerender hence this component does not rerender