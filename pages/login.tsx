import { Box, Container, CssBaseline, Grid, Paper } from '@mui/material';
import LoginForm from '@/components/Form/LoginForm';
import Head from 'next/head';

function Login() {
  return (
    <>
      <Head>
        <title>Ratebird | Sign in</title>
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
        overflow="hidden"
      >
        <div
          style={{
            width: '100%',
            height: '100vh',
            filter: 'blur(10px)',
            transform: 'scale(1.1)',
            overflow: 'hidden',
            backgroundImage:
              'url("https://r4.wallpaperflare.com/wallpaper/506/714/527/anime-the-rising-of-the-shield-hero-naofumi-iwatani-raphtalia-the-rising-of-the-shield-hero-tate-no-yuusha-no-nariagari-hd-wallpaper-093038cd716a9d8bc62748af70c1069d.jpg")',
          }}
        />
        <Container
          component="main"
          maxWidth="lg"
          sx={{ position: 'absolute', marginTop: '20vh' }}
        >
          <Box
            sx={{
              marginTop: 8,
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
                  backgroundImage: 'url(https://source.unsplash.com/random)',
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
                <LoginForm />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Login;
