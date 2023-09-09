import React from 'react';
import { FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import Map from "./Map";


function Contact() {

    return (
        <div id="contact" className="my-10">
            <h2 className="mt-6 text-3xl font-bold">Contact</h2>
            <div className="w-full flex flex-col-reverse md:items-center md:flex-row">
                <div className="left md:w-1/2 w-full p-5 flex flex-col-reverse md:flex-col rounded-full">
                    <p className="m-4 text-center italic">You can find me roaming around here on a random sunny day!</p>
                    <Map />
                </div>
                <div className="md:w-1/2 right p-5">
                    <div>
                        <h3 className="text-4xl text-blue-400 font-bold capitalize">Feel free to drop a message here</h3>
                        <p className="subtitle my-1 text-lg text-white cursor-pointer transition-all duration-300 hover:text-blue-200 italic">I would like to hear from you! Go on, drop a message for me below :D</p>
                    </div>
                    <form action="https://formspree.io/f/mdorzpyj" method="POST" className="w-full text-black dark:text-gray-50 text-base">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Your Email"
                            required
                            className="w-full my-2 p-2 dark:bg-slate-800 rounded-xl transition-all duration-300 focus:ring-4"
                        />
                        <input
                            type="text"
                            name="subject"
                            id="Subject"
                            placeholder="Type a Subject"
                            required
                            className="w-full my-2 p-2 dark:bg-slate-800 rounded-xl transition-all duration-300 focus:ring-4"
                        />
                        <div class="w-full mt-2 mb-4 border  rounded-xl  dark:bg-slate-700 dark:border-slate-600">
                            <div class="rounded-t-lg dark:bg-slate-800">
                                <label for="comment" class="sr-only">Your comment</label>
                                <textarea id="comment" name="message" rows="5" class="w-full p-2 text-gray-900 rounded-t-xl bg-white  resize-none dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a message..." required></textarea>
                            </div>
                            <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                                <button type="submit" class="inline-flex items-center justify-between py-2.5 px-4 text-base font-medium text-center text-white bg-blue-700 rounded-lg transition-all duration-300 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                                    <span className="mx-1">Send</span>
                                    <BsFillArrowRightCircleFill />
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="social-media-icons flex flex-wrap justify-center md:justify-start text-2xl">
                        <div className="social-icon mt-2 mx-2 opacity-80 cursor-pointer transition-all duration-300 hover:scale-125 hover:opacity-100">
                            <a href="https://www.linkedin.com/in/shritaralkar/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        </div>
                        <div className="social-icon mt-2 mx-2 opacity-80 cursor-pointer transition-all duration-300 hover:scale-125 hover:opacity-100">
                            <a href="https://twitter.com/ShriTaralkar" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                        </div>
                        <div className="social-icon mt-2 mx-2 opacity-80 cursor-pointer transition-all duration-300 hover:scale-125 hover:opacity-100">
                            <a href="mailto:shripad.taralkar@gmail.com" target="_blank" rel="noopener noreferrer"><MdEmail /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="social-media-icons fixed right-0 bottom-1/2 rounded-l-2xl text-center bg-gray-800 ring-slate-200 opacity-30 translate-y-1/2 transition-all duration-300 hover:opacity-70 hover:ring-2">
                <div className="social-icon p-3 cursor-pointer transition-all duration-300 hover:scale-125">
                    <a target="_blank" rel="noopener noreferrer" href="mailto:shripad.taralkar@gmail.com"><MdEmail /></a>
                </div>
                <div className="social-icon p-3 cursor-pointer transition-all duration-300 hover:scale-125">
                    <a target="_blank" rel="noopener noreferrer" href="https://wa.me/918652180053?text=Hey%20there!%20I%20followed%20your%20WhatsApp%20link%20through%20your%20website%20to%20connect%20with%20you%20faster.%20I%20have%20a%20question%20regarding..."><FaWhatsapp /></a>
                </div>
                <div className="social-icon p-3 cursor-pointer transition-all duration-300 hover:scale-125">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/shritaralkar/"><FaLinkedin /></a>
                </div>
            </div>
        </div>
    )
}

export default Contact