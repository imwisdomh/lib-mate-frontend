import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faHouse, faCommentNodes } from '@fortawesome/free-solid-svg-icons';

const Header = styled.div`
  position: fixed;
  width: 100%;
  max-width: 1080px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
`;

const SettingIcon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  color: rgb(18, 124, 107);
`;

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  max-width: 1080px;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  height: 60px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  background-color: white;

  @media (max-width: 768px) {
    display: block;
    top: unset;
    bottom: 0;
    height: unset;
    box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const NavList = styled.ul`
  display: flex;
`;

const NavItem = styled.li`
  margin-right: 50px;

  &:hover {
    color: rgb(98, 190, 46);
  }

  @media (max-width: 768px) {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
  }
`;

const NavIcon = styled(FontAwesomeIcon)`
  display: none;

  @media (max-width: 768px) {
    display: block;
    font-size: 1.2rem;
    color: rgb(18, 124, 107);
    margin-bottom: 5px;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: rgb(18, 124, 107);
  font-size: 1.7rem;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    color: rgb(98, 190, 46);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const SeatManagementLink = styled(Link)`
  text-decoration: none;
  font-size: 1.7rem;
  font-weight: 600;
  color: rgb(18, 124, 107);

  &:hover {
    color: rgb(98, 190, 46);
  }

  @media (max-width: 768px) {
    position: relative;
    top: -10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    font-size: 1rem;
    font-weight: 500;
    color: white;
    background: linear-gradient(45deg, rgb(18, 124, 107), rgb(98, 190, 46), rgb(204, 209, 18));
    border-radius: 50%;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);

    &:hover {
      color: white;
      text-decoration: underline;
    }
  }
`;

const Navigation = () => {
  return (
    <>
      <Header>
        <div>로고</div>
        <Link to="/settings">
          <SettingIcon icon={faCircleUser} />
        </Link>
      </Header>
      <Nav>
        <NavList>
          <NavItem>
            <NavLink to="/">
              <NavIcon icon={faHouse} />홈
            </NavLink>
          </NavItem>
          <NavItem>
            <SeatManagementLink to="/seat-management">내 좌석</SeatManagementLink>
          </NavItem>
          <NavItem>
            <NavLink to="/board">
              <NavIcon icon={faCommentNodes} />
              게시판
            </NavLink>
          </NavItem>
        </NavList>
      </Nav>
    </>
  );
};

export default Navigation;
