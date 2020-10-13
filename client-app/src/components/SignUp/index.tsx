import * as React from "react";
import classNames from "classnames";
import { Label, Input, Button, FormField, FieldError } from "components/common";
import { useMutation } from "urql";
import RegisterMutation from "components/SignUp/registerMutation";
import { useFormik } from "formik";
import { SignupSchema } from "components/SignUp/SignupSchema";
import InfoBar, { InfoBarStatusType } from "components/common/InfoBar";
import { Link, useHistory } from "react-router-dom";
import { useIdentity } from "context/AuthContext";

const SignUp = () => {
  const [res, registerUser] = useMutation(RegisterMutation);
  const [error, setError] = React.useState(false);
  const history = useHistory();
  const { setAuthUser, setJWTToken } = useIdentity();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: undefined,
      confirmPassword: undefined,
    },
    onSubmit: (values, { setSubmitting }) => {
      registerUser({
        input: {
          username: values.username,
          email: values.email,
          password: values.password,
        },
      }).then((result) => {
        setSubmitting(false);
        if (result.error) {
          setError(true);
        }
        setAuthUser(result.data.register.user);
        setJWTToken(result.data.register.jwt);
        history.push("/");
      });
    },
    validationSchema: SignupSchema,
    validateOnChange: false,
    validateOnBlur: true,
  });
  const { handleSubmit, handleChange, values, errors, isSubmitting } = formik;
  return (
    <div className="w-full max-w-xs mx-auto pt-4">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 my-4"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl text-center mb-4">Sign Up</h1>
        {error && (
          <InfoBar
            type={InfoBarStatusType.Error}
            content="Oops, Email or Username is taken"
          />
        )}
        <FormField>
          <Label htmlFor="username">Username</Label>
          <Input
            type="text"
            name="username"
            onChange={handleChange}
            value={values.username}
          />
          <FieldError error={errors.username} />
        </FormField>
        <FormField>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            name="email"
            onChange={handleChange}
            value={values.email}
          />
          <FieldError error={errors.email} />
        </FormField>
        <FormField>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            name="password"
            onChange={handleChange}
            value={values.password}
          />
          <FieldError error={errors.password} />
        </FormField>
        <FormField>
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            type="password"
            name="confirmPassword"
            onChange={handleChange}
            value={values.confirmPassword}
          />
          <FieldError error={errors.confirmPassword} />
        </FormField>
        <div className={classNames("mt-8")}>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            Register
          </Button>
        </div>
        <div className="text-center mt-4 text-blue-500">
          <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
