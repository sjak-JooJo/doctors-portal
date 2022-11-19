import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';
import appoinment from '../../assets/images/appointment.png'

const Form = () => {
    return (
        <section style={{
            background: `url(${appoinment})`
        }}>


            <div class="w-full max-w-xs justify-center items-center m-auto">
                <div className='px-8 pt-6 text-center'>
                    <h4 className='text-primary font-bold'>Contact Us</h4>
                    <h2 className='text-white'>Stay Connected with us</h2>
                </div>
                <form class=" px-8 pt-6 pb-8 mb-4">
                    <div class="mb-4">

                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email Address" />
                    </div>
                    <div class="mb-4">

                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Subject" />
                    </div>
                    <div class="mb-6">

                        <textarea
                            class="
                            form-control
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                        "
                            id="exampleFormControlTextarea13"
                            rows="3"
                            placeholder="Message"
                        ></textarea>
                    </div>
                    <div class="flex items-center justify-center">
                        <PrimaryButton>Submit</PrimaryButton>
                    </div>
                </form>
            </div>

        </section>
    );
};

export default Form;