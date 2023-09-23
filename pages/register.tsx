import Head from 'next/head';
import { Box, Container, CssBaseline, Grid, Paper } from '@mui/material';
import RegisterForm from '@/components/Form/RegisterForm';

function Register() {
  return (
    <>
      <Head>
        <title>Ratebird | Sign up</title>
        <meta name="description" content="Login page of ratebird" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <Box
        justifyContent="center"
        display="flex"
        position="relative"
        textAlign="center"
      >
        <div
          style={{
            width: '100vw',
            height: '100vh',
            filter: 'brightness(0.4)',
            backgroundImage: 'url("https://pic.re/image")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <Container
          component="main"
          maxWidth="lg"
          sx={{ position: 'absolute', marginTop: { xs: '0', md: '10vh' } }}
        >
          <Box
            sx={{
              marginTop: { xs: 2, md: 8 },
            }}
          >
            <Grid container>
              <CssBaseline />
              <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                  backgroundImage: 'url(https://pic.re/image)',
                  backgroundRepeat: 'no-repeat',
                  backgroundColor: (t) =>
                    t.palette.mode === 'light'
                      ? t.palette.grey[50]
                      : t.palette.grey[900],
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <Grid
                item
                xs={12}
                sm={8}
                md={5}
                component={Paper}
                elevation={6}
                square
              >
                <RegisterForm />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Register;
