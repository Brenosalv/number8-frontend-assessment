import * as Yup from "yup"

export const contactAgentFormValidationSchema = Yup.object().shape({
  fullName: Yup
    .string()
    .required("Full name is required"),
  email: Yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  phoneNumber: Yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]+$/, "Phone number must contain only numbers"),
  comments: Yup.string().required("Comment is required"),
})
