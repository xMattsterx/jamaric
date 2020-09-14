import React from "react";
import SVGComponent from "../SVGComponent";
import "../theme/LightDarkModeStyles.css";

function Toggle(props) {
  return (
    <div onClick={props.toggleTheme}>
      <div className="circle">
        {props.theme === "dark" ? (
          <div className="moon">
            <SVGComponent name="moon" width={20} height={20} />
          </div>
        ) : (
          <div className="sun">
            <SVGComponent name="sun" width={24} height={24} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Toggle;
