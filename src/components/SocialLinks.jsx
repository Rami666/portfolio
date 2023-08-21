import React from 'react'
import {FaGithub, FaLinkedin} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi"
import {BsFillPersonLinesFill} from "react-icons/bs"

const SocialLinks = () => {
  return (
    <div>
      <ul>
        <li>
          <a href="">
            <>Linkdin</>
          </a>
        <a href="">
            <>Github</>
        </a>
        <a href="">
            <>Email</>
        </a>
        </li>
      </ul>
      <BsFillPersonLinesFill size={25} className="ml-1" />
      <FaGithub size={25} className="ml-1" />
      <FaLinkedin size={25} className="ml-1" />
      <HiOutlineMail size={25} className="ml-1" />

    </div>
  )
}

export default SocialLinks
