import { FC } from "react";

type Props = {
    label: string;
    id: string;
    placeholder?: string
    className?: string
}

export const InputForm: FC<Props> = ({
    label, id, placeholder, className
}) => {

    return (
        <div className="w-[100%] bg-[#1a1a1a] py-4 px-4 rounded-[4px]">
            <div className='flex justify-between items-center'>

                <div className="text-[17px]">
                    <label htmlFor={id} className={` text-[#8d8d8d]  ${className}`}>{label}

                    </label>
                </div>
                <div className="text-[12px] uppercase text-red-500">Error</div>

            </div>

            <div>
                <input type="text" id={id} placeholder={placeholder} className={`outline-none border-none p-0 text-[16px] mt-2 bg-[#929292] ${className}`} />
            </div>
        </div>
    )
}