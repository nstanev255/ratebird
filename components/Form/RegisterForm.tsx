import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import NextLink from 'next/link';

function RegisterForm() {
  return (
    <Box
      sx={{
        my: 8,
        mx: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <Box component="form" noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="username"
          label="Username"
          id="password"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="retypePassword"
          label="Retype Password"
          type="password"
          id="retypePassword"
          autoComplete="current-password"
        />
        <FormControlLabel
          required
          control={<Checkbox value="agree" color="primary" />}
          label="I agree with the terms and conditions"
        />
        <Button
          type="submit"
          fullWidth
          variant="outlined"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up
        </Button>
        <Box justifyContent="center">
          <Link href="/login" variant="body2" component={NextLink}>
            Already have an account? Sign In
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default RegisterForm;
