import React from 'react'
import { contact_data } from '../../api/contact'
import style from '../../../styles/Home/home.module.scss'
function Contact() {
    return (
        <div className="w-full flex justify-center items-center mt-20">
            <div className="grid grid-cols-12 w-[90%]">
                <div className="col-span-12 md:col-span-6 flex flex-col">
                    <h1 className='mb-[15px]'>Na kontaktoni</h1>
                    <br />
                    {contact_data.map((data, i) => (
                        <input type="text" placeholder={data} className={style.contact_inputs} key={i} />
                    ))}
                    <input type="text" placeholder='Mesazhi' className={style.contact_inputs} id={style.message} />

                </div>
                <div className="col-span-12 md:col-span-6 flex justify-center items-center">
                    <img style={{filter : 'drop-shadow(7px 7px 5px gray'}} className='w-[90%]' src="/pictures/decs/schoolVector.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Contact