import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreativeCommons } from "@fortawesome/free-brands-svg-icons";
import { PT_Sans } from 'next/font/google';

const ptSans = PT_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
});

function Footer() {
  return (
<div className={`text-dark border-0 mt-5 ${ptSans.className}`}>
<div className="container text-center">
  <div className="row">
    <div className="col pt-4">
      <p>
        Pranita Dewi <FontAwesomeIcon icon={faCreativeCommons} /> 2024 - 2025.<br/>All Rights Reserved
      </p>
    </div>
  </div>
</div>
</div>
  )
}

export default Footer