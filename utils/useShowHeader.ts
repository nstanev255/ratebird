import { useRouter } from 'next/router';

/**
 * Used to figure out if we have to show the header.
 */
function useShowHeader(): boolean {
  const router = useRouter();
  return !(router.asPath === '/login' || router.asPath === '/register');
}

export default useShowHeader;
