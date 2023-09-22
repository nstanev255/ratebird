import {
  AppBar,
  Autocomplete,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
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
          <Box>
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
                display: 'block',
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
            <SearchBar />
          </Box>

          <Box
            sx={{
              flexGrow: { xs: 1, md: 0 },
              display: { xs: 'flex', md: 'flex' },
              justifyContent: { xs: 'right' },
            }}
          >
            {isAuth && <AuthSettings />}
            {!isAuth && <AnonSettings />}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
