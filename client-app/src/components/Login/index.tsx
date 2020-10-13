import * as React from "react";
import classNames from "classnames";
import { Label, Input, Button, FormField, FieldError } from "components/common";
import { useMutation } from "urql";
import { useFormik } from "formik";
import { LoginSchema } from "components/Login/LoginSchema";
import InfoBar, { InfoBarStatusType } from "components/common/InfoBar";
import loginMutation from "components/Login/loginMutation";
import { Link, useHistory } from "react-router-dom";
import { useIdentity } from "context/AuthContext";

const Login = () => {
  const { setAuthUser, setJWTToken } = useIdentity();
  const [res, login] = useMutation(loginMutation);
  const [error, setError] = React.useState(false);
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: undefined,
    },
    onSubmit: (values, { setSubmitting }) => {
      login({
        input: {
          identifier: values.email,
          password: values.password,
        },
      }).then((result) => {
        setSubmitting(false);
        if (result.error) {
          setError(true);
        } else {
          setAuthUser(result.data.login.user);
          setJWTToken(result.data.login.jwt);
          history.push("/");
        }
      });
    },
    validationSchema: LoginSchema,
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
        <h1 className="text-2xl text-center mb-4">Login</h1>
        {error && (
          <InfoBar
            type={InfoBarStatusType.Error}
            content="Incorrect email or password"
          />
        )}
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
        <div className={classNames("mt-8")}>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            Login
          </Button>
        </div>
        <div className="text-center mt-4 text-blue-500">
          <Link to="/register">Register</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
