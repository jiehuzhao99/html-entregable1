import { useLanguageContext } from "../LanguageProvider";

const Button = ({ }) => {
    // const [language, setLanguage] = useState(language);
    const { language, setLanguage } = useLanguageContext();

    const handleChangeLanguage = () => {
        setLanguage(language === 'en'? 'es': 'en');
    }

    return ( 
        <div className="button" style={{ display: 'flex', justifyContent: 'center'}}>
            <p style={{ marginRight: '20px' }}>Button: </p>
            <button style={{ marginRight: '20px' }} onClick={handleChangeLanguage}>Change Language</button>
            <p>{language === 'en'? 'Hello': 'Hola'}</p>
        </div>
     );
}
 
export default Button;