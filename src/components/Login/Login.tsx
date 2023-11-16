import React, { useState } from "react";

import { NextPage } from "next";
import { InputForm } from "../Inputs/InputsForm";
import { Buttons } from "../Buttons/Buttons";
import { useForm, FormProvider, useFormContext, FieldValues } from "react-hook-form";
import { RegisterFormFields } from "../../Types/Form-fields/index";
import { DevTool } from "@hookform/devtools";



const Login: NextPage = () => {
    // const { register, control } = useFormContext<RegisterFormFields>();


    const methods = useForm<RegisterFormFields>()
    const onSubmit = (data: FieldValues) => {
        console.log(data); // Handle form submission data
    };

    // const alphanumericRegex = /^[a-zA-Z0-9]*$/;

    return (
        <FormProvider  {...methods}>
            <div className="h-100% w-100% flex justify-center items-center border border-red-500  border-solid">
                <form action="" className="w-[800px] flex flex-col gap-2" onSubmit={methods.handleSubmit(onSubmit)} noValidate

                >
                  

                    <InputForm


                        label="UserName"
                        placeholder="User Name"
                        className="w-[100%] "
                        name="userName"
                        validation={{
                            required: `Is Required`,
                            maxLength: { value: 32, message: 'Maximum length is 32 characters' },
                            minLength: { value: 3, message: 'Minimum length is 3 characters' },

                        }}


                    />
                    <InputForm


                        label="Password"
                        placeholder="Password"
                        className="w-[100%] "
                        name="password"
                        validation={{
                            required: `Is Required`,
                            maxLength: { value: 32, message: 'Maximum length is 32 characters' },
                            minLength: { value: 3, message: 'Minimum length is 3 characters' },
                            pattern: {
                                value: /^[a-zA-Z0-9]*$/,
                                message: 'Username must be alphanumeric',
                            },
                        }}

                    />





                    <Buttons className="bg-[#272727] py-5 w-[100%] outline-none text-[#bebebe] font-semibold rounded-[4px] cursor-pointer hover:bg-[#323232] transition duration-300 ease bg-opacity-100">
                        {" "}
                        Create Account
                    </Buttons>

                    {/* <button type="submit" className=''>Create Account</button> */}
                </form>
                {/* <DevTool control={control} /> */}
                {/* <DevTool control={methods.control} /> */}
            </div>
        </FormProvider>

    );
};

export default Login;
