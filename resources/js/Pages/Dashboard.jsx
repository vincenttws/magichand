import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import '../../css/landing.css';
import PageFooter from '../components/PageFooter';
import logo from '../../images/logo.svg';
import HeaderButton from '../Components/HeaderButton';

export default function Dashboard() {
    return (
        <div>
            <nav className="app-header container">
              <div className="top-header">
                <a href="/"><img src={logo} className="app-logo" alt="logo" /></a>
                <div className="header-buttons">              
                    <HeaderButton text="Logout" url="logout"/>        
                </div>
              </div>
            </nav>
        
            <footer>
                <PageFooter />
            </footer>
        </div>
    );
}
