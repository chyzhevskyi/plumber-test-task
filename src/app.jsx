import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppHeader from './components/header.jsx';
import AppFooter from './components/footer.jsx';
import PageContent from './components/page-content.jsx';
import AppHome from './pages/Home.jsx';
import './assets/scss/default.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AppHeader />
        
        <PageContent>
            <AppHome />
        </PageContent>
        
        <AppFooter />
    </StrictMode>
)
