import { NavUser } from 'components/header/Nav-User/NavUser';
import { Outlet } from 'react-router-dom';
import { UserMenu } from 'components/User/UserMenu';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/user/userSelectors';
import { Container } from './Header.styled';
import { NavBar } from './Nav-Bar/NavBar';

export const Header = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>
      <Container>
        <NavBar />
        {isLoggedIn ? <UserMenu /> : <NavUser />}
      </Container>
      <Outlet />
    </>
  );
};
