import type { FC, ReactNode } from 'react';
import { IconContext } from 'react-icons';

interface TabButtonProps {
    handleClick: (tabName: string) => void; 
    statusTabActive: string;     
    tabName: string; 
    iconImage: ReactNode;
    text: string;
}

const TabButton: FC<TabButtonProps> = ({ handleClick, statusTabActive, tabName, iconImage, text }) => {

    const isActive = statusTabActive === tabName;

    return (
        <>
            <button 
                onClick={() => handleClick(tabName)} 
                className={`flex-1 flex flex-row justify-center items-center py-2 rounded-t-lg 
                            ${isActive ? 'bg-amber-100' : 'bg-amber-300 cursor-pointer hover:bg-amber-400'}`}
                disabled={isActive}
            >
                <IconContext.Provider value={{ className: "text-lg" }}>
                    {iconImage}
                </IconContext.Provider>
                <span>&nbsp;{text}</span>
            </button>
        </>
    )
}

export default TabButton;