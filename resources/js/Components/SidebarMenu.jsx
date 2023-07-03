import '../../css/landing.css';


function SidebarMenu({ menuLogo, menuText }) {

    return (
        <div>
            <a className="group block hover:bg-slate-700 h-10">
                <div className="flex pt-2 pl-3">
                    <img src={menuLogo} alt={menuText} className="flex-none mr-4" />
                    <p className="flex-initial w-64 text-white">{menuText}</p>
                </div>
            </a>
        </div>        
    );
}

export default SidebarMenu;

