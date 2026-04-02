import { Outlet, useNavigation } from 'react-router-dom';
import { GlobalLoading } from '../components/GlobalLoading';

export function RootLayout() {
  const navigation = useNavigation();
  const isNavigating = navigation.state !== 'idle';

  return (
    <>
      <Outlet />
      {isNavigating ? <GlobalLoading label="Loading page..." /> : null}
    </>
  );
}
