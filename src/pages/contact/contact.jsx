import React, { useRef } from 'react';
import contact from "../../assets/image/contact.png"
import Footer from '../../layouts/footer';

const Contact = () => {
      const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_pa6xizh', 'template_pca88xe', form.current, {
        publicKey: '5aiP8-7AKantcQvGa',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
    );
    e.target.reset()
  };
    return (
        <>
            <div className='w-[78vw] h-[55vh]  absolute left-[41.2vh] flex flex-col gap-8'>
                <img src={contact} alt="" />
                <div className="flex gap-8 ">

                    <div className=" px-4   w-[50%]">

                        <div className="bg-gray-200 h-[50vh] flex items-center justify-center"><iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3323.238376155725!2d-7.5379179244596894!3d33.599118973331095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDM1JzU2LjgiTiA3wrAzMicwNy4yIlc!5e0!3m2!1sfr!2sma!4v1748895864535!5m2!1sfr!2sma" width="525" height="370"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
                    </div>


                    <div className="w-[50%] flex flex-col gap-3 ">
                        <h2 className="text-2xl font-semibold ">Send us your message</h2>
                        <form className='flex flex-col gap-5 items-center'ref={form} onSubmit={sendEmail}>
                            <div className="w-[85vh]">
                                <input type="text" placeholder="Name" className="w-full  border border-gray-300  focus:outline-none focus:ring-blue-500 focus:border-blue-500 p-2" />
                            </div>
                            <div className="w-[85vh]">
                                <input type="email" placeholder="Email" className="w-full border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 p-2" />
                            </div>
                            <div className="w-[85vh]">
                                <input type="tel" placeholder="Phone" className="w-full border border-gray-300  focus:outline-none focus:ring-blue-500 focus:border-blue-500 p-2" />
                            </div>
                            <div className="w-[85vh]">
                                <textarea placeholder="Message" rows="6" className="w-full border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 p-2"></textarea>
                            </div>
                            <button type="submit" className="w-[30vh] bg-black text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-opacity-50">SEND</button>
                        </form>
                    </div>
                </div>








                <Footer />
            </div>
        </>
    );
};

export default Contact;