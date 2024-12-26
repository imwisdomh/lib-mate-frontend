import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/board">Board</Link>
        </li>
        <li>
          <Link to="/seat-management">Seat Management</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
