import cssText from "data-text:~style.css"
import type { PlasmoCSConfig, PlasmoGetInlineAnchor } from "plasmo"
import Modal from './modal';
import { useState } from "react";
import { BsStars } from 'react-icons/bs';
import { PiMagicWandFill } from 'react-icons/pi';



export const config: PlasmoCSConfig = {
  matches: ["https://*.linkedin.com/*"]
}

export const getInlineAnchor: PlasmoGetInlineAnchor = () =>
document.querySelector('[role="textbox"]')




export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const PlasmoOverlay = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div style={{ position: 'absolute', bottom: '10px', right: '60px' }}>
      <button className="bg-white hover:bg-blue-700 text-blue-500 font-bold py-2 px-4 rounded-full"    onClick={handleClick}>

       {isClicked ? <BsStars style={{ width: '1em', height: '1em' }} /> : <PiMagicWandFill style={{ width: '1em', height: '1em' }} />}
      </button>
      {isModalOpen && <Modal closeModal={closeModal} />}
    </div>
  )
}

export default PlasmoOverlay