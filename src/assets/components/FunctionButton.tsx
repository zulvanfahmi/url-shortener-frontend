import type { FC, ReactNode } from "react"
import { IconContext } from "react-icons"

interface FunctionButtonProps {
    iconImage: ReactNode;
    text: string;
}

const FunctionButton: FC<FunctionButtonProps> = ({ iconImage, text }) => {

    return (
        <>
            <button className="bg-amber-700 flex flex-row rounded text-white items-center p-1 w-fit cursor-pointer hover:bg-amber-800">
                <IconContext.Provider value={{ className: "text-white" }}>
                    {iconImage}
                </IconContext.Provider>
                <span>&nbsp;{text}</span>
            </button>
        </>
    )
}

export default FunctionButton;