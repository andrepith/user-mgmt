import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const UserForm = ({ handleNewUser, handleEditUser, editData, userData }) => {
  const isEdit = !!Object.keys(editData).length;
  return (
    <Formik
      initialValues={{
        id: isEdit
          ? userData.filter((item) => item.id === editData.id)[0].id
          : userData.length + 1,
        firstName: isEdit ? editData.firstName : "",
        lastName: isEdit ? editData.lastName : "",
        email: isEdit ? editData.email : "",
      }}
      validationSchema={Yup.object().shape({
        firstName: Yup.string().required("First Name is required"),
        lastName: Yup.string().required("Last Name is required"),
        email: Yup.string()
          .email("Email is invalid")
          .required("Email is required"),
      })}
      onSubmit={(fields) =>
        isEdit ? handleEditUser(fields) : handleNewUser(fields)
      }
      render={({ errors, status, touched }) => (
        <Form>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <Field
              name="firstName"
              type="text"
              className={
                "form-control" +
                (errors.firstName && touched.firstName ? " is-invalid" : "")
              }
            />
            <ErrorMessage
              name="firstName"
              component="div"
              className="invalid-feedback"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <Field
              name="lastName"
              type="text"
              className={
                "form-control" +
                (errors.lastName && touched.lastName ? " is-invalid" : "")
              }
            />
            <ErrorMessage
              name="lastName"
              component="div"
              className="invalid-feedback"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field
              name="email"
              type="text"
              className={
                "form-control" +
                (errors.email && touched.email ? " is-invalid" : "")
              }
            />
            <ErrorMessage
              name="email"
              component="div"
              className="invalid-feedback"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary mr-2">
              {isEdit ? "Edit User" : "Add New User"}
            </button>
          </div>
        </Form>
      )}
    />
  );
};

export default UserForm;
