import React from "react";
import SVGIcon from "./../../favicon.svg";
const Logo = () => {
    return ( 
        <div className="flex border-b border-gray-500 border-solid">
            <img src={SVGIcon} className="h-10"/>
            <a
          href="#"
          className="flex-col pl-4 pb-2 pt-2   hover:text-white text-xl duration-200 text-slate-300"
        >
          AdminLTE3
        </a>
        </div>
     );
}
 
export default Logo;