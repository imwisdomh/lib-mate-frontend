import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faCommentNodes } from '@fortawesome/free-solid-svg-icons';

const Nav = styled.nav`
  background-color: rgb(248, 249, 250);
  position: fixed;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
`;

const NavList = styled.ul`
  display: flex;
`;

const NavItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const NavIcon = styled(FontAwesomeIcon)`
  color: rgb(18, 124, 107);
  font-size: 1.2rem;
  margin-bottom: 5px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: rgb(18, 124, 107);
  font-weight: 500;

  &:hover {
    color: rgb(98, 190, 46);
    text-decoration: underline;
  }

  &:active {
    color: rgb(204, 209, 18);
  }
`;

const SeatManagementLink = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  color: white;
  background: linear-gradient(45deg, rgb(18, 124, 107), rgb(98, 190, 46), rgb(204, 209, 18));
  border-radius: 50%;
  height: 60px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: -10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
`;

const Navigation = () => {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <NavIcon icon={faHouse} />
          <NavLink to="/home">홈</NavLink>
        </NavItem>
        <NavItem>
          <SeatManagementLink to="/seat-management">내 좌석</SeatManagementLink>
        </NavItem>
        <NavItem>
          <NavIcon icon={faCommentNodes} />
          <NavLink to="/board">게시판</NavLink>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Navigation;
