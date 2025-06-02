import React from 'react';
import logo from "../../assets/image/about.png"
import image from "../../assets/image/shopy4.webp"
import Footer from '../../layouts/footer';

const About = () => {
    return (
        <>
            <div className='w-[163.4vh] h-[55vh]  absolute left-[41.2vh]'>
                <img src={logo} alt="" />





                <div className='flex gap-3 p-3'>
                    <img className='w-[25vw] rounded-md ' src={image} alt="" />

                    <div className='flex flex-col gap-7 pt-5 text-gray-500'>
                        <h1 className='text-black text-[4vh]'>Our story</h1>

                        <h1>Phasellus egestas nisi nisi, lobortis ultricies risus semper nec. Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque porta est ac neque bibendum viverra. Vivamus lobortis magna ut interdum laoreet. Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices orci.</h1>




                        <div className='px-10 '>
                            <p className='border-l-4 px-4 flex flex-col'>

                            Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.

                          <span>  - Steve Job's</span>
                            </p>
                        </div>
                    </div>




                </div>

                <Footer></Footer>
            </div>
        </>
    );
};

export default About;