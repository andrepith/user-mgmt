import { useState, useEffect } from "react";
import Modal from "react-modal";
import Table from "../components/Table";
import UserForm from "../components/Form";
import { getList, postList, deleteList, patchList } from "../services";

const UserManagement = () => {
  const [userData, setUserData] = useState([]);
  const [editData, setEditData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const fetchData = () => {
    getList().then((res) => setUserData(res));
  };
  const closeModal = () => setShowModal(false);
  const createUser = () => {
    setEditData({});
    setShowModal(true);
  };
  const editUser = (user) => () => {
    setEditData(user);
    setShowModal(true);
  };

  const deleteUser = (user) => () => {
    deleteList(user.id).then((res) => setUserData(res.data));
  };

  const handleNewUser = (fields) => {
    postList(fields).then((res) => setUserData(res));
    closeModal();
  };

  const handleEditUser = (fields) => {
    patchList(fields.id, fields).then((res) => setUserData(res.data));
    closeModal();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        <div className="table-header">
          <h1>User Management</h1>
          <div className="my-auto btn btn-add" onClick={createUser}>
            Add new user
          </div>
        </div>
        <Table data={userData} editUser={editUser} deleteUser={deleteUser} />
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
