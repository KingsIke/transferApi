import React from 'react'
import styles from './style.module.scss'
import { NextPage } from 'next'
import { InputForm } from '../Inputs/InputsForm'
import { Buttons } from '../Buttons/Buttons'

const Register: NextPage = () => {
    return (
        <div className='h-100% w-100% flex justify-center items-center border border-red-500  border-solid'>
            <form action="" className='w-[800px] flex flex-col gap-2'>
                <div className='flex gap-2'>

                    <InputForm id='firstName' label='FirstName' placeholder='First Name' className='w-[100%] ' />
                    <InputForm id='lastName' label='LastName' className='' />
                </div>

                <InputForm id='userName' label='UserName' />
                <InputForm id='password' label='Password' />

                <Buttons className='bg-[#272727] py-5 w-[100%] outline-none text-[#bebebe] font-semibold rounded-[4px] cursor-pointer transi hover:bg-[#323232]'> Create Account</Buttons>

                {/* <button type="submit" className=''>Create Account</button> */}

            </form>
        </div>
        // <div className={styles.page}>Register</div>
    )
}
2: 16


export default Register