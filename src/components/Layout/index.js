import { Outlet } from 'react-router-dom';
import SideBar from '../sidebar';
import './index.scss';
const Layout = () => {
    return (
        <div className='App'> <SideBar />
            <div className='page'>
                <span className='tags top-tags'> &lt;body&gt;</span>
                <Outlet />

                <span className='tags bottom-tags'>&lt;body&gt;
                    <br />
                    <span className='bottom-tag-html'>&lt;/html&lt;</span>
                </span>

            </div>
        </div>
    )
}
export default Layout;