import type { FC } from 'react';
import { IoQrCodeSharp } from 'react-icons/io5';
import { LuDownload } from 'react-icons/lu';
import { useTranslation } from 'react-i18next';
import FunctionButton from './FunctionButton';


interface TabQRCodeGeneratorProps {
    statusTabActive: string;
}

const TabQRCodeGenerator: FC<TabQRCodeGeneratorProps> = ({ statusTabActive }) => {

    const { t } = useTranslation();


    return (
        <>
            <div className={`flex flex-col min-h-88 justify-between bg-amber-100 rounded-b-lg px-4 pb-4 pt-2 ${statusTabActive === 'qrcodegenerator' ? '' : 'hidden'}`}>

                <div className="flex flex-col">
                    <label className="mb-1" htmlFor="">{t('tab.qrCodeGenerator.inputTitle')}</label>
                    <input className="bg-white ring-1 ring-amber-700 rounded p-1" type="text" />
                    <span className="mb-2 text-sm font-semibold text-red-600">Invalid Error and something</span>
                    <FunctionButton iconImage={<IoQrCodeSharp />} text={t('tab.qrCodeGenerator.button.generate')} />
                </div>

                <div className="flex flex-col items-center justify-center">
                    <img className="mb-2 w-40" src="\square-image.webp" alt="generated qr" />
                    <FunctionButton iconImage={<LuDownload />} text={t('tab.qrCodeGenerator.button.download')} />
                </div>

            </div>
        </>
    )

}

export default TabQRCodeGenerator;