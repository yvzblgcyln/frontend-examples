import { object, string } from "yup";

const required_message = "required field";

const contactSchema = object({
  firstName: string().required(required_message),
  lastName: string().required(required_message),
  email: string().email("invalid email type").required(required_message),
  message: string().min(5, "min 5 charecter").required(required_message),
});

export default contactSchema;
