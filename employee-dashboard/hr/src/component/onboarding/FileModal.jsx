import React, { useState } from 'react';
import { AiFillFileText, AiOutlineDownload } from "react-icons/ai";
import { Button, Modal } from 'flowbite-react';

function ModalComponent() {
  const [openModal, setOpenModal] = useState(false);

  function onCloseModal() {
    setOpenModal(false);
  }

  return (
    <>
    <Button 
        className='mt-6 flex flex-row' 
        onClick={() => setOpenModal(true)}>
        <AiFillFileText size={30} />
        <h1 className='text-green-500 font-bold ml-2'>View File & Links</h1>
    </Button>

      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">File & Document Download</h3>
            <h2 className="text-md font-medium text-gray-900 dark:text-white">3 Files & Links</h2>
            <div className="flex justify-between border-2 bg-slate-400 hover:bg-sky-700 p-4 font-medium">
                <p>Employee HandBook</p>
                <AiOutlineDownload size={30} />
            </div>
            <div className="flex justify-between border-2 bg-slate-400 hover:bg-sky-700 p-4 font-medium">
                <p>Cost of Product</p>
                <AiOutlineDownload size={30} />
            </div>
            <div className="border-2 bg-slate-400 hover:bg-sky-700 p-4 flex justify-between font-medium">
              <p>Emergency Policies</p>
              <AiOutlineDownload size={30} />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalComponent;
