import type { AppProps } from 'next/app';
import '../styles/base.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Header from '@/components/Header/Header';
import useShowHeader from '@/hooks/useShowHeader';
import { createTheme, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import store from '@/redux/store';

export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    palette: { mode: 'dark' },
  });
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        {useShowHeader() && <Header />}
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}
