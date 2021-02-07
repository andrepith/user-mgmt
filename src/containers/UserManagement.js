import { useState } from "react";
import Modal from "react-modal";
import { uniqBy, sortBy } from "lodash";
import UserForm from "../components/Form";
import { data } from "../services/index";

const UserManagement = () => {
  const [userData, setUserData] = useState(data);
  const [editData, setEditData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const createUser = () => {
    setEditData({});
    setShowModal(true);
  };
  const editUser = (user) => () => {
    setEditData(user);
    setShowModal(true);
  };
  const handleNewUser = (fields) => {
    setUserData([...userData, fields]);
    closeModal();
  };

  const handleEditUser = (fields) => {
    setUserData(sortBy(uniqBy([fields, ...userData], "id"), ["id"]));
    closeModal();
  };
  return (
    <>
      <div>
        <h1>User Management</h1>
        <button onClick={createUser}>Add new user</button>
        <div>
          {userData.map((item, key) => (
            <div key={key} style={{ display: "flex" }}>
              <div>
                <div>
                  {item.firstName} {item.lastName}
                </div>
                <div>{item.email}</div>
                <div>{item.dob}</div>
              </div>
              <button onClick={editUser(item)}>Edit</button>
              <button>Remove</button>
            </div>
          ))}
        </div>
      </div>
      <Modal isOpen={showModal} onRequestClose={closeModal}>
        <UserForm
          handleNewUser={handleNewUser}
          handleEditUser={handleEditUser}
          userData={userData}
          editData={editData}
        />
      </Modal>
    </>
  );
};

Modal.setAppElement("#root");

export default UserManagement;
