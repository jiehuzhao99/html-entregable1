import { useLanguageContext } from "../LanguageProvider"

const Text = ({  }) => {
    const { language } = useLanguageContext();
    return ( 
        <div className="text">
            <p>
                Text: {language === "en" ? "This is the text in English" : "Este es el texto en español"}
            </p>
        </div>
     );
}
 
export default Text;