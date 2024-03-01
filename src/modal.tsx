import  { useState } from 'react';
import { IoIosArrowRoundDown } from "react-icons/io";
import { TiArrowSync } from "react-icons/ti";
import { PiArrowBendDoubleUpRightDuotone } from "react-icons/pi";
const dummyResponse = "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask.";
const Modal = ({ closeModal }) => {
  


  const [command, setCommand] = useState('');
  const [response, setResponse] = useState('');

  const [isGenerated, setIsGenerated] = useState(false);
  const [userInput, setUserInput] = useState('');

  const handleInputChange = (event) => {
    setCommand(event.target.value);
    setUserInput(event.target.value);
  };

  const handleGenerateClick = () => {
   setResponse(dummyResponse);
   setIsGenerated(true);
   setUserInput(command);
   setCommand('');
    
  };

  const handleInsertClick = () => {
    const placeholder =document.querySelector('[data-placeholder="Write a message…"]');
      const linkedinMessageInput = document.querySelector('[role="textbox"]') as HTMLInputElement;

      // Set the value of the LinkedIn message input field to the dummy response
      linkedinMessageInput.innerText = dummyResponse;
     placeholder.remove()
     closeModal();
  };

  

  return (
    <div className="modal fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 w-600 ">
      <div className="modal-content bg-white p-4  rounded-lg ">
        
        {response && (
          <div className="chatbox">
            <div className="flex justify-end">
              <div className="flex flex-col items-end max-w-md mx-2 my-1 py-2 px-4 bg-gray-300 rounded-lg shadow-md">
                <span className="text-base text-gray-800"> {userInput}</span>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="flex flex-col items-start max-w-md mx-2 my-1 py-2 px-4 bg-blue-300 rounded-lg shadow-md">
                <span className="text-base text-gray-800 break-words"> {response}</span>
              </div>
            </div>
          </div>
        )}

        <input
          type="text"
          value={command}
          onChange={handleInputChange}
          placeholder="Your Prompt"
          className="w-full border rounded-md p-2 mb-4"
        />

        {!isGenerated && (
         <div className="flex justify-end">
          <button
            onClick={handleGenerateClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md flex items-center  "
          >
            
            <PiArrowBendDoubleUpRightDuotone className="mr-2"/>Generate
            
          </button>
          </div>
        )}
        {isGenerated && (
          <div className="flex justify-end">
          <div className="flex justify-between space-x-4 ">
            <button
              onClick={handleInsertClick}
              className="bg-white-500 text-gray-500 font-bold py-2 px-4 rounded-md border border-gray-500 flex items-center "
            >
              <IoIosArrowRoundDown className="mr-2" />
              Insert
            </button>
            </div>
            <div className=' mx-4'></div>
            <button
             
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md  flex items-center justify-end"
            >
              <TiArrowSync  className="mr-2"/>
              Regenerate
              
            </button>
          </div>
        
        
        )}
      </div>
    </div>
  );
};

export default Modal;
