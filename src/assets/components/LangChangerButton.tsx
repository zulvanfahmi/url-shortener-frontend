import { useTranslation } from 'react-i18next';

interface LangChangerButtonProps {
    language: string;
    additionalClass: string;
}

export default function LangChangerButton({ language, additionalClass } : LangChangerButtonProps) {
    
    const { i18n } = useTranslation();
    const currentLang = i18n.language;

    const handleClick = () => {
        i18n.changeLanguage(language);
    };

    return (
        <button
            onClick={handleClick}
            className={`${currentLang === language 
                ? 'text-amber-700 bg-amber-100 font-bold' 
                : 'text-white bg-gray-400 cursor-pointer hover:bg-gray-500'} 
                px-2 sm:px-4 sm:py-1 ${additionalClass}`}
            disabled={currentLang === language}
        >
            {language.toUpperCase()} 
        </button>
    );
}