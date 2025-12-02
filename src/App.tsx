import { FaLink, FaRegThumbsUp } from "react-icons/fa";
import FeatureCard from "./assets/components/FeatureCard"
import { IoQrCodeSharp, IoShieldHalf } from "react-icons/io5";
import { MdOutlineDevices } from "react-icons/md";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import LangChangerButton from "./assets/components/LangChangerButton";
import TabButton from "./assets/components/TabButton";
import TabQRCodeGenerator from "./assets/components/TabQRCodeGenerator";
import TabUrlShortener from "./assets/components/TabUrlShortener";

export default function App() {

  const [tabActive, setTabActive] = useState('urlshortener')
  const { t } = useTranslation();

  return (
    <>

      <div className="mb-4 sm:mb-0">

        <LangChangerButton language={'id'} additionalClass="rounded-l-full" />
        <LangChangerButton language={'en'} additionalClass="rounded-r-full" />

      </div>

      <div className="sm:flex sm:flex-row sm:gap-8 sm:mb-8">

        <div className="sm:flex-1 sm:justify-center text-center text-white flex flex-col gap-4 mb-4">
          <h1 className="text-4xl font-bold">{t('header.title')}</h1>
          <p className="text-lg">{t('header.subtitle')}</p>
        </div>

        <div className="sm:flex-1 bg-amber-700">

          <div className="flex flex-row">

            <TabButton
              handleClick={(tabName: string) => setTabActive(tabName)}
              statusTabActive={tabActive}
              tabName="urlshortener"
              iconImage={<FaLink />}
              text={t('tab.urlShortener.title')}
            />

            <TabButton
              handleClick={(tabName: string) => setTabActive(tabName)}
              statusTabActive={tabActive}
              tabName="qrcodegenerator"
              iconImage={<IoQrCodeSharp />}
              text={t('tab.qrCodeGenerator.title')}
            />

          </div>

          <TabUrlShortener statusTabActive={tabActive} />

          <TabQRCodeGenerator statusTabActive={tabActive} />

        </div>

      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
        <FeatureCard iconImage={<FaRegThumbsUp />} text={t('card.thumbsUp')} />
        <FeatureCard iconImage={<IoShieldHalf />} text={t('card.shield')} />
        <FeatureCard iconImage={<FaLink />} text={t('card.link')} />
        <FeatureCard iconImage={<MdOutlineDevices />} text={t('card.device')} />
      </div>

    </>
  )

}
