import { useLanguageContext } from "../LanguageProvider";

const Header = () => {
    const { language, setLanguage } = useLanguageContext();

    const handleLanguageChange = () => {
        setLanguage(language === "en" ? "es" : "en");
    }

    return ( 
        <header className="header">
            <h1>Header</h1>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <button style={{ marginRight: '20px' }} onClick={handleLanguageChange}>Change Language</button>
                <p>{language === "en" ? "English" : "Español"}</p>
            </div>
        </header>
     );
}
 
export default Header;