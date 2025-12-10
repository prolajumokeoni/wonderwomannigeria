import React from 'react'
import SocialMediaIcons from "./SocialMediaIcons";

 export default function Footer()  {
  const year = new Date().getFullYear();

  return (
    
      <div className="bg-black text-white py-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-3 lg:flex-row lg:justify-between px-4 text-center lg:text-left">
          <SocialMediaIcons />
          <p className="text-sm font-medium">
            &#169; {year} Wonder Woman Nigeria. All rights reserved.
          </p>
        </div>
      </div>
  )
}
