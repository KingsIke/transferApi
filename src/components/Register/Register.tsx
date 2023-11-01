import React from 'react'
import styles from './style.module.scss'
import { NextPage } from 'next'
import { InputForm } from '../Inputs/InputsForm'

const Register: NextPage = () => {
    return (
        <div className='h-100% w-100% flex justify-center items-center text-white '>
            <form action="" className=''>
                <InputForm id='firstName' label='FirstName' placeholder='First Name' className='bg-[#32acac]' />
                <InputForm id='lastName' label='LastName' />

                <InputForm id='userName' label='UserName' />
                <InputForm id='password' label='Password' />

            </form>
        </div>
        // <div className={styles.page}>Register</div>
    )
}



export default Register