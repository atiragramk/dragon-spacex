import {
  Button,
  FormControl,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { StyledContainer, StyledForm } from "./styled";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ReactNode } from "react";
import { FormData } from "../../types";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const registerSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Please enter your password")
    .min(8, "Password is too short - should be at least 8 chars")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters"),
  confirmPassword: yup
    .string()
    .required("Please confirm your password")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const Register = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const navigate = useNavigate();

  const onSubmit = (values: Partial<FormData>) => {
    const { email, password } = values;
    createUserWithEmailAndPassword(auth, email!, password!)
      .then((userCredential) => {
        navigate(-1);
        toast.success("You was registered successfully");
      })
      .catch((error) => {
        toast.error(error.message.slice(9));
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
            name="email"
            defaultValue=""
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
            name="password"
            defaultValue=""
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
        <FormControl>
          <FormLabel required>Confirm Password </FormLabel>
          <Controller
            control={control}
            defaultValue=""
            name="confirmPassword"
            render={({ field }) => (
              <TextField
                type="password"
                error={Boolean(errors.confirmPassword)}
                helperText={errors.confirmPassword?.message as ReactNode}
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
          Sign Up
        </Button>
      </StyledForm>
    </StyledContainer>
  );
};

export default Register;
