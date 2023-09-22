import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import NextLink from 'next/link';
import React, { useState } from 'react';
import AuthSettings from '@/components/Header/AuthSettings';
import AnonSettings from '@/components/Header/AnonSettings';
import SearchBar from '@/components/Header/Search';

function Header() {
  const isAuth = false;

  const pages = [
    { title: 'Home', link: '/home' },
    { title: 'Recent', link: '/recent' },
    { title: 'Top', link: '/top' },
    { title: 'Seasonal', link: '/seasonal' },
    { title: 'Upcoming', link: '/upcoming' },
  ];

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color="transparent">
      <Container>
        <Toolbar>
          <Image src="/favicon.png" width={50} height={50} alt="FreeBird" />
          <Typography variant="h6" noWrap component={NextLink} href="/">
            Ratebird
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <NextLink href={page.link}>{page.title}</NextLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
            }}
          >
            <Stack direction="row" spacing={2}>
              {pages.map((page) => (
                <NextLink
                  key={page.title}
                  href={page.link}
                  onClick={handleCloseNavMenu}
                >
                  {page.title}
                </NextLink>
              ))}
            </Stack>
          </Box>

          {isAuth && <AuthSettings />}
          {!isAuth && <AnonSettings />}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
