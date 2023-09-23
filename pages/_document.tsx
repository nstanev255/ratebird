import { Html, Head, Main, NextScript } from 'next/document';
import Header from '@/components/Header/Header';
import { useTheme } from '@mui/material';

export default function Document() {
  const theme = useTheme();
  return (
    <Html lang="en">
      <Head />
      <body style={{ backgroundColor: theme.palette.grey['900'] }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
