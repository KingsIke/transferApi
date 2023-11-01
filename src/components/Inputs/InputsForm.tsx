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
        <>
            <div className=''>
                <label htmlFor={id} className={` text-[#fff] ${className}`}>{label}

                </label>
            </div>
            {/* ERROR FIELD  */}
            <div>

            </div>

            <div>
                <input type="text" id={id} placeholder={placeholder} />
            </div>
        </>
    )
}