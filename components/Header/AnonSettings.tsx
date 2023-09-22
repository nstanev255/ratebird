import { Stack } from '@mui/material';
import Link from 'next/link';

function AnonSettings() {
  return (
    <Stack>
      <Link href="/login">Login</Link>
    </Stack>
  );
}

export default AnonSettings;
