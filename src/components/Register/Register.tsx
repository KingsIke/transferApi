import React, { useState } from "react";
import styles from "./style.module.scss";
import { NextPage } from "next";
import { InputForm } from "../Inputs/InputsForm";
import { Buttons } from "../Buttons/Buttons";
import { useForm, FormProvider, useFormContext, FieldValues } from "react-hook-form";
import { RegisterFormFields } from "../../Types/Form-fields/index";
import { DevTool } from "@hookform/devtools";



const Register: NextPage = () => {
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
                    <div className="flex gap-2">
                        <InputForm


                            label="FirstName"
                            placeholder="First Name"
                            className="w-[100%] "
                            name="firstName"

                            validation={{
                                required: 'First Name is required',
                                maxLength: { value: 32, message: 'Maximum length is 32 characters' },
                                minLength: { value: 3, message: 'Minimum length is 3 characters' },

                            }}






                        // label="FirstName"
                        // placeholder="First Name"
                        // className="w-[100%] "
                        // {...register("firstName", {
                        //     required: "Required",
                        //     maxLength: {
                        //         value: 32,
                        //         message: "32 character max",
                        //     }, minLength: {
                        //         value: 3,
                        //         message: "3 character max",
                        //     },
                        // })}
                        />
                        <InputForm


                            label="Last Name"
                            placeholder="Last Name"
                            className="w-[100%] "
                            name="lastName"
                            validation={{
                                required: `Last Name is required`,
                                maxLength: { value: 32, message: 'Maximum length is 32 characters' },
                                minLength: { value: 3, message: 'Minimum length is 3 characters' },

                            }}

                        />
                    </div>

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
                <DevTool control={methods.control} />
            </div>
        </FormProvider>

    );
};

export default Register;
