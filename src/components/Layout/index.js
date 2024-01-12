import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './index.scss';

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page"></div>
      <span className="tags top-tags">&lt;body&gt;</span>
      <Outlet />
      <span className="tags bottom-tags">&lt;body&gt;</span>
      <br />
      <span className="bottom-tag-html">&lt;body&gt;</span>
    </div>
  );
};

export default Layout;
