import {
  AppBar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import NextLink from 'next/link';
import React, { useState } from 'react';
import AuthSettings from '@/components/Header/AuthSettings';
import AnonSettings from '@/components/Header/AnonSettings';
import SearchBar from '@/components/Header/SearchBar';

function Header() {
  const isAuth = false;

  const pages = [
    { title: 'Recent', link: '/recent' },
    { title: 'Trending', link: '/trending' },
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

  const theme = useTheme();

  return (
    <AppBar
      position="static"
      color={theme.palette.mode !== 'dark' ? 'transparent' : undefined}
    >
      <Container>
        <Toolbar>
          <Image src="/favicon.png" width={50} height={50} alt="FreeBird" />
          <NextLink href="/" passHref>
            <Typography variant="h6" noWrap>
              Ratebird
            </Typography>
          </NextLink>
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
