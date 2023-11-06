import { Outlet } from 'react-router-dom';
import AppHeader from '../../components/AppHeader';
import { Container, Stack } from '@mui/material';

function HeaderLayout() {
  return (
    <Container fixed>
      <header>
        <AppHeader />
      </header>
    </Container>
  );
}

export default function RootLayout() {
  return (
    <Stack>
      <HeaderLayout />
      <Outlet />
    </Stack>
  );
}
