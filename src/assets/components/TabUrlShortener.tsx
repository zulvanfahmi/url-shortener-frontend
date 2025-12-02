import type { FC } from "react"
import { FaCopy, FaLink } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import FunctionButton from "./FunctionButton";

interface TabUrlShortenerProps {
    statusTabActive: string;
}

const TabUrlShortener: FC<TabUrlShortenerProps> = ({ statusTabActive }) => {

    const { t } = useTranslation();

    return (
        <>
            <div className={`flex flex-col min-h-88 justify-between bg-amber-100 rounded-b-lg px-4 pb-4 pt-2 ${statusTabActive === 'urlshortener' ? '' : 'hidden'}`}>

                <div className="flex flex-col gap-2">
                    <label htmlFor="">{t('tab.urlShortener.inputTitle.longUrl')}</label>
                    <input className="bg-white ring-1 ring-amber-700 rounded p-1" type="text" />
                    <FunctionButton iconImage={<FaLink />} text={t('tab.urlShortener.button.generate')} />
                    <span className="text-sm font-semibold text-red-600">Invalid Error and something</span>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="">{t('tab.urlShortener.inputTitle.shortUrl')}</label>
                    <input readOnly className="grow h-fit bg-gray-300 ring-1 ring-amber-700 rounded p-1 focus:outline-none" type="text" defaultValue='test' />
                    <FunctionButton iconImage={<FaCopy />} text={t('tab.urlShortener.button.copy')} />
                    <span className="text-sm font-semibold text-red-600">Invalid Error and something</span>
                </div>

                <span className="text-sm text-center">{t('tab.urlShortener.subtitle')}</span>

            </div>
        </>
    )

}

export default TabUrlShortener;

