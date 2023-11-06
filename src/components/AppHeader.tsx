import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { NavLink } from 'react-router-dom';

export default function AppHeader() {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'black' }}>
      <Container>
        <Toolbar>
          <NavLink to="/">
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                color: 'white',
                textDecoration: 'none',
              }}
            >
              George FE Test
            </Typography>
          </NavLink>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
