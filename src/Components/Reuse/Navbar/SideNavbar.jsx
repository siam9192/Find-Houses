import React from 'react';

const SideNavbar = ({toggleNavbar}) => {
  
    return (
        <div className={`w-[300px] h-full  fixed top-[98px] left-0 bg-black text-black lg:hidden ${toggleNavbar ? 'left-0' :'-left-[200%]' } transition-all ease-out z-20`}>
            
        
        </div>
    );
}

export default SideNavbar;
