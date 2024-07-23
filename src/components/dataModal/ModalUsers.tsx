import { useState } from 'react';
import { Button, Modal } from 'antd';

interface dataProptype {
  avatar : string,
  email: string,
  first_name: string,
  id: number,
  last_name: string
}

interface ModalUsersProps {
  data: dataProptype[];
}

const ModalUsers = ({data}:ModalUsersProps) => {
  // const ModalUsers: React.FC<ModalUsersProps> = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(data)

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showData = data.map((element)=>{
    return(
      <>
        <p>{element.first_name} con id: {element.id}</p>
      </>
    )
  })

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Personas
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        {showData}
      </Modal>
    </>
  );
};

export default ModalUsers;