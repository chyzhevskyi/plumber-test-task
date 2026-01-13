import React, { useState, useEffect } from 'react';
import '../assets/scss/header.scss';
import { Dropdown, Button, Offcanvas, Accordion } from 'react-bootstrap';
import SiteLogoComponent from './site-logo';
import mobileMenuIcon from '../assets/img/mobile-menu.svg';

function AppHeader() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header className={isScrolled ? 'scrolled' : ''}>
                <div className="header-content-wrapper">
                    <div className="container-fluid">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="header-content d-flex flex-row justify-content-between align-items-center">
                                        <div className="logo-block">
                                            <SiteLogoComponent />
                                        </div>
                                        <div className="d-none d-lg-flex flex-row justify-content-end align-items-center gap-4">
                                            <div className="nav-block">
                                                <ul className="header-nav d-flex flex-row justify-content-center align-items-center">
                                                    <li className="header-nav-item">
                                                        <Dropdown>
                                                            <Dropdown.Toggle variant="link" id="header-dropdown-home">Home</Dropdown.Toggle>
                                                            <Dropdown.Menu>
                                                                <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
                                                                <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
                                                                <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </li>
                                                    <li className="header-nav-item">
                                                        <Dropdown>
                                                            <Dropdown.Toggle variant="link" id="header-dropdown-about">About Us</Dropdown.Toggle>
                                                            <Dropdown.Menu>
                                                                <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
                                                                <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
                                                                <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </li>
                                                    <li className="header-nav-item">
                                                        <Dropdown>
                                                            <Dropdown.Toggle variant="link" id="header-dropdown-services">Services</Dropdown.Toggle>
                                                            <Dropdown.Menu>
                                                                <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
                                                                <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
                                                                <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </li>
                                                    <li className="header-nav-item">
                                                        <Dropdown>
                                                            <Dropdown.Toggle variant="link" id="header-dropdown-pricing">Pricing</Dropdown.Toggle>
                                                            <Dropdown.Menu>
                                                                <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
                                                                <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
                                                                <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="actions-block d-flex flex-row justify-content-end align-items-center">
                                                <a href="tel:+1234567890" className="header-phone-button">
                                                    <p className="text-label">24/7 Emergency Call</p>
                                                    <p className="phone-number">123-456-7890</p>
                                                </a>
                                                <a href="#" className="header-cta-button">Get a Quote</a>
                                            </div>
                                        </div>
                                        <Button className="d-block d-lg-none" variant="link" onClick={handleShow}>
                                            <img src={mobileMenuIcon} alt="Menu" width={30} height={30} />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Offcanvas show={show} onHide={handleClose} className="mobile-menu-offcanvas">
                <Offcanvas.Header closeButton>
                    <div className="logo-block">
                        <SiteLogoComponent />
                    </div>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="nav-block">                        
                        <Accordion defaultActiveKey="-1" flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Home</Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li><a href="#">Option 1</a></li>
                                        <li><a href="#">Option 2</a></li>
                                        <li><a href="#">Option 3</a></li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>About Us</Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li><a href="#">Option 1</a></li>
                                        <li><a href="#">Option 2</a></li>
                                        <li><a href="#">Option 3</a></li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Services</Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li><a href="#">Option 1</a></li>
                                        <li><a href="#">Option 2</a></li>
                                        <li><a href="#">Option 3</a></li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Pricing</Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li><a href="#">Option 1</a></li>
                                        <li><a href="#">Option 2</a></li>
                                        <li><a href="#">Option 3</a></li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    <div className="actions-block d-flex flex-row justify-content-between align-items-center">
                        <a href="tel:+1234567890" className="header-phone-button">
                            <p className="text-label">24/7 Emergency Call</p>
                            <p className="phone-number">123-456-7890</p>
                        </a>
                        <a href="#" className="header-cta-button">Get a Quote</a>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default AppHeader;
