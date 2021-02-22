import moment from "moment";

const Table = ({ data, editUser, deleteUser }) => {
  return (
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Date of Birth</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, key) => (
          <tr key={key}>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.email}</td>
            <td>{moment(item.dob * 1000).format("L")}</td>
            <td>
              <div className="btn btn-edit" onClick={editUser(item)}>
                Edit
              </div>
              <div className="btn btn-remove" onClick={deleteUser(item)}>
                Remove
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
