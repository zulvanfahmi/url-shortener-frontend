import type { ReactNode } from 'react';
import { IconContext } from "react-icons";


interface FeatureCardProps {
    text: string;
    iconImage: ReactNode;
}

export default function FeatureCard({ iconImage, text }: FeatureCardProps) {
    return (
        <div className='group'>
            <div className="flex flex-col items-center bg-amber-100 p-4 rounded-lg group-hover:scale-105 transition-all">
                <IconContext.Provider value={{ className: 'text-5xl m-2 group-hover:scale-105 transition-all' }}>
                    {iconImage}
                </IconContext.Provider>
                <div className='flex flex-col grow justify-center group-hover:scale-105 transition-all'>
                    <p className="text-center">{text}</p>
                </div>
            </div>
        </div>
    );
}