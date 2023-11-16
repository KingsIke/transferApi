
import { FC } from "react";

import { useFormContext, useForm, FieldValues, FieldErrors } from "react-hook-form";
type Validation = {
    required: string;
    minLength: { value: number; message: string };
    maxLength: { value: number; message: string };
    pattern?: { value: RegExp; message: string }; // Make pattern optional
};
type Props = {
    label: string;
    name: 'firstName' | 'lastName' | "userName" | "password";
    validation?: Validation
    placeholder?: string
    className?: string

} & React.InputHTMLAttributes<HTMLInputElement>;

export const InputForm: FC<Props> = ({
    label, name, placeholder, className, validation, required
}) => {
    const {
        register, formState
    } = useFormContext<FieldValues>();

    const { errors } = formState
    const error = errors[name];
    return (
        <div className="w-[100%] bg-[#1a1a1a] py-4 px-4 rounded-[4px]">
            <div className='flex justify-between items-center'>

                <div className="text-[17px] flex flex-col">
                    <label htmlFor={name} className={` text-[#8d8d8d]  ${className}`}>{label}

                    </label>
                    {/* <input type="text" id={name} placeholder={placeholder}    {...register(name, {
                        required: validation?.required,
                        maxLength: validation?.maxLength,
                        minLength: validation?.minLength
                    })} className={`outline-none border-none p-0 text-[16px] mt-2 bg-[#929292] ${className}`} /> */}

                </div>
                {/* <div className="text-[12px] uppercase text-red-500">{errors}</div> */}
                {error && typeof error === "object" && (
                    <div className="text-[12px] uppercase text-red-500">{error?.message?.toString()}</div>
                )}

            </div>


            <div>
                <input type="text" id={name} placeholder={placeholder}    {...register(name, {
                    required: validation?.required,
                    maxLength: validation?.maxLength,
                    minLength: validation?.minLength,
                    pattern: validation?.pattern,

                })} className={`outline-none border-none p-0 text-[16px] mt-2 bg-[#929292] ${className}`} />
            </div>
        </div>
    )
}


