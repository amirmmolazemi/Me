import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup
    .string()
    .matches(/^\d{10,}$/, "Phone number is invalid")
    .required("Phone number is required"),
  message: yup.string().required("Message is required"),
});

export default schema;
