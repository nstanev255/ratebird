import { Grid } from '@mui/material';
import Stack from '@mui/material/Stack';
import Image from 'next/image';
import Link from 'next/link';

function Header() {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <Image src="/favicon.png" width={50} height={50} alt="FreeBird"></Image>
      </Grid>
      <Grid item>
        <Stack direction="row" spacing={2}>
          <Link href="/">Home</Link>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default Header;
