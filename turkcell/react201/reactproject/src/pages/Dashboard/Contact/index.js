import { useFormik } from "formik";
import validationSchema from "./validations";
import "./styles.css";

function Contact() {
  const {
    handleChange,
    handleSubmit,
    values,
    isSubmitting,
    errors,
    touched,
    handleBlur,
  } = useFormik({
    initialValues: {
      firstName: "Yavuz Bilge",
      lastName: "Ceylan",
      email: "",
      message: "",
    },

    onSubmit: (values, bag) => {
      console.log(values);

      if (values.email === "test@test.com") {
        return bag.setErrors({
          email: "this mail is already in use",
          message: "enter valid characters",
        });
      }
      bag.resetForm();
    },
    validationSchema,
  });
  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit} className="form">
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            placeholder="Jane"
            onChange={handleChange("firstName")}
            value={values.firstName}
            disabled={isSubmitting}
            onBlur={handleBlur("firstName")}
          />
          {errors.firstName && touched.firstName && (
            <div className="error">{errors.firstName}</div>
          )}
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            placeholder="Doe"
            onChange={handleChange("lastName")}
            value={values.lastName}
            disabled={isSubmitting}
            onBlur={handleBlur("lastName")}
          />
          {errors.lastName && touched.lastName && (
            <div className="error">{errors.lastName}</div>
          )}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
            onChange={handleChange("email")}
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="your message..."
            onChange={handleChange("message")}
          />
          {errors.message && <div className="error">{errors.message}</div>}
        </div>
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
