import React from "react";

export const Switch = ({toggle, setToggle}) => {
  //const [toggle, setToggle] = useState(0);

  return (
    <div id={toggle ? "on" : "off"} onClick={() => setToggle(!toggle)}>
      {toggle ? "On" : "Off"}
    </div>
  );
};
