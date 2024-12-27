import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: rgb(248, 249, 250);
  position: fixed;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
`;

const NavItem = styled.li`
  margin: 0 1rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: rgb(18, 124, 107);
  font-weight: bold;

  &:hover {
    color: rgb(98, 190, 46);
    text-decoration: underline;
  }

  &:active {
    color: rgb(204, 209, 18);
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <NavLink to="/home">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/seat-management">Seat Management</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/board">Board</NavLink>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Navigation;
