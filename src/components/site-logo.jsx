import siteLogo from '../assets/img/logo.png';

function SiteLogoComponent () {
    return (
        <>
            <a href="/">
                <img src={siteLogo} alt="Logo" width={300}/>
            </a>
        </>
    );
}

export default SiteLogoComponent;
