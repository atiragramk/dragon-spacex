import {
  Button,
  FormControl,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";
import { StyledContainer, StyledForm, StyledLink } from "./styled";

import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { ReactNode } from "react";

import { FormData } from "../../types";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import { AppDispatch } from "../../store";
import { useDispatch } from "react-redux";
import { authUserSetAction } from "../../store/auth/reducer/auth";

import { toast } from "react-toastify";

export const registerSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Please enter your password")
    .min(8, "Password is too short - should be at least 8 chars")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters"),
});

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const dispatch: AppDispatch = useDispatch();

  const onSubmit = (values: Partial<FormData>) => {
    const { email, password } = values;
    signInWithEmailAndPassword(auth, email!, password!)
      .then((userCredential) => {
        const { email, uid } = userCredential.user;
        dispatch(authUserSetAction({ email, uid }));
        toast.success("You was login successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <StyledContainer>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Typography sx={{ color: "#006064", mb: 1 }} variant="h5">
          Welcome to SpaceX
        </Typography>
        <FormControl>
          <FormLabel required>Email </FormLabel>
          <Controller
            control={control}
            defaultValue=""
            name="email"
            render={({ field }) => (
              <TextField
                error={Boolean(errors.email)}
                helperText={errors.email?.message as ReactNode}
                {...field}
                sx={{ width: { xs: 250, lg: 300 } }}
              ></TextField>
            )}
          />
        </FormControl>
        <FormControl>
          <FormLabel required>Password </FormLabel>
          <Controller
            control={control}
            defaultValue=""
            name="password"
            render={({ field }) => (
              <TextField
                type="password"
                error={Boolean(errors.password)}
                helperText={errors.password?.message as ReactNode}
                {...field}
                sx={{ width: { xs: 250, lg: 300 } }}
              ></TextField>
            )}
          />
        </FormControl>
        <Button
          sx={{ width: { xs: 250, lg: 300 }, mt: 2 }}
          color="secondary"
          variant="contained"
          size="large"
          type="submit"
        >
          Sign in
        </Button>
        <Typography variant="caption" sx={{ color: "#000000de", mt: 2 }}>
          No account? <StyledLink to="/register">Create one</StyledLink>
        </Typography>
      </StyledForm>
    </StyledContainer>
  );
};

export default Login;
