import logo from '../../images/logo.svg';
import dashboardLogo from '../../images/dashboardLogo.svg';
import manageLogo from '../../images/manageLogo.svg';
import '../../css/landing.css';
import SidebarMenu from './SidebarMenu';

const sideBarMenus = [
    {
        menuLogo: dashboardLogo,
        menuText: "Dashboard"
    },
    {
        link: "/portfolios",
        menuLogo: manageLogo,
        menuText: "Manage"
    }
];

function Sidebar() {
    return (
        <div className="drop-shadow-2xl" style={{ backgroundColor: "#1E293B" }}>
            <div className="flex justify-center">
                <a href="/"><img src={logo} className="app-logo my-3" alt="logo" /></a>
            </div>  
            <div className="flex justify-center">
                <hr className="w-4/6 mb-2"/>
            </div>
        
            <div className="mx-4">
                <ul role="list">
                    {sideBarMenus.map((sideBarMenu) => 
                        <li className="my-7">
                            <SidebarMenu {...sideBarMenu} />
                        </li>
                    )}
                </ul>
            </div>
            
        </div>
    );
}

export default Sidebar;

