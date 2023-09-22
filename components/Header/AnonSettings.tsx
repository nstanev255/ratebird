import { Stack } from '@mui/material';
import NextLink from 'next/link';

function AnonSettings() {
  return (
    <Stack>
      <NextLink href="/login">Login</NextLink>
    </Stack>
  );
}

export default AnonSettings;
