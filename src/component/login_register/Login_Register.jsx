import React from 'react'
import tv from '../../assets/images/tv.png'
import mobile from '../../assets/images/mobile.jpg'
import logo from '../../assets/images/logo.png'
import video from '../../assets/videos/video-tv.mp4'
import video_devices from '../../assets/videos/video-devices-in.mp4'
import downloadingImage from '../../assets/images/downloading_image.png'
import download_icon from '../../assets/images/download_icon.png'
import device from '../../assets/images/device-pile-in.png'
import children from '../../assets/images/children.png'




function Login_Register() {
    return (
        <>
            <div className=' overflow-x-hidden text-white '>

                <section className='h-[110vh] w-screen' id='section01'>
                    <div className="h-full w-full border-b-8 border-gray-500 bg-login_page_banner bg-center bg-cover flex justify-center"
                        style={{ boxShadow: 'inset 0px 0px 1000px 150px rgb(0 0 0)' }}>
                        <div className='h-full lg:w-[77%] w-[100%] p-5'>
                            <div className='flex justify-between '>
                                <img src={logo} alt="" className='lg:h-10 h-6' />
                                <div className='flex gap-2'>
                                    <select className='py-1 px-8 bg-transparent border border-gray-500 rounded text-white'>
                                        <option value="English" className='text-black'>English</option>
                                        <option value="Hindi" className='text-black'>Hindi</option>
                                    </select>
                                    <button className='bg-[#E50914] py-1 px-4 rounded text-sm'>Sign up</button>
                                </div>
                            </div>
                            <div className='h-full max-w-full flex justify-center items-center'>
                                <div className='text-center flex flex-col gap-5'>
                                    <h1 className='lg:text-5xl text-3xl font-black'>Unlimited movies, TV shows and more</h1>
                                    <h1 className='lg:text-2xl text-xl'>Watch anywhere. Cancel anytime.</h1>
                                    <h1 className='lg:text-xl '>Ready to watch? Enter your email create or restart your memnbership.</h1>
                                    <form className='sm:flex gap-2 justify-center'>
                                        <input type="email" placeholder='Email address' className='w-[350px] py-3 px-5 bg-[#1a1a1ab7] border border-gray-500 rounded' />
                                        <button type='submit' className='bg-[#E50914] py-3 px-8 rounded text-xl font-medium sm:mt-0 mt-2'>Get Started →</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='min-h-[80vh] w-[100vw] border-b-8 border-gray-700 flex justify-center ' id='section02'>
                    <div className="h-full w-[90%] lg:w-[80%] sm:w-[90%] py-20 lg:grid lg:grid-cols-2 justify-center items-center">
                        <div className='lg:max-w-[90%] sm:max-w-[100%] flex flex-col gap-5 sm:text-start text-center'>
                            <h1 className='lg:text-5xl sm:text-4xl text-3xl font-bold text-center'>Enjoy on your TV</h1>
                            <h1 className='lg:text-2xl sm:text-normal text-lg font-light text-center'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h1>
                        </div>
                        <div className='flex justify-center'>

                            <img src={tv} alt="" className='sm:h-[380px] sm:w-[500px] w-auto relative ' />

                            <video src={video} autoPlay playsInline muted loop type="video/mp4" className='sm:size-[22.5em] size-[16.8em] absolute z-[-1] '></video>

                        </div>
                    </div>
                </section>

                <section className='min-h-[80vh] w-[100vw] border-b-8 border-gray-700 flex justify-center' id='section03'>

                    <div className="h-full w-[90%] lg:w-[80%] sm:w-[90%] py-20 lg:grid lg:grid-cols-2 flex-col-reverse justify-center items-center">

                        <div className='flex justify-center relative'>
                            <img src={mobile} alt="" className='sm:h-[380px] sm:w-[500px] w-auto relative' />
                            <div className='sm:h-[25%] sm:w-[300px] h-[25%] w-[60%] py-2 bg-black absolute top-[70%] border-[2px] border-gray-500 rounded-xl flex justify-around items-center'>
                                <img src={downloadingImage} alt="" className='h-full' />
                                <div>
                                    <h1 className='bold'>Stranger Things</h1>
                                    <h1 className='text-blue-500'>Downloading...</h1>
                                </div>
                                <img src={download_icon} alt="" className='h-7' />
                            </div>

                        </div>

                        <div className='lg:max-w-[90%] sm:max-w-[100%] flex flex-col gap-5 sm:text-start mt-5'>

                            <h1 className='lg:text-5xl sm:text-4xl text-3xl extrabold text-center'>Download your shows to watch offline</h1>
                            <h1 className='lg:text-2xl sm:text-normal text-lg font-normal text-center'>Save your favourites easily and always have something to watch.</h1>

                        </div>

                    </div>

                </section>

                <section className='min-h-[80vh] w-[100vw] border-b-8 border-gray-700 flex justify-center ' id='section04'>
                    <div className="h-full w-[90%] lg:w-[80%] sm:w-[90%] py-20 lg:grid lg:grid-cols-2 justify-center items-center">
                        <div className='lg:max-w-[90%] sm:max-w-[100%] flex flex-col gap-5 sm:text-start text-center'>
                            <h1 className='lg:text-5xl sm:text-4xl text-3xl font-bold text-center'>Watch everywhere</h1>
                            <h1 className='lg:text-2xl sm:text-normal text-lg font-normal text-center'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h1>
                        </div>
                        <div className='flex justify-center'>

                            <img src={device} alt="" className='sm:h-[380px] sm:w-[500px] w-auto relative ' />

                            <video src={video_devices} autoPlay playsInline muted loop type="video/mp4" className='sm:size-[18em] size-[12em] absolute z-[-1] '></video>

                        </div>
                    </div>
                </section>

                <section className='min-h-[80vh] w-[100vw] border-b-8 border-gray-700 flex justify-center' id='section05'>

                    <div className="h-full w-[90%] lg:w-[80%] sm:w-[90%] py-20 lg:grid lg:grid-cols-2  justify-center items-center">

                        <div className='flex justify-center relative'>
                            <img src={children} alt="" className='sm:h-[380px] sm:w-[500px] w-auto relative' />


                        </div>

                        <div className='lg:max-w-[90%] sm:max-w-[100%] flex flex-col gap-5 sm:text-start mt-5'>

                            <h1 className='lg:text-5xl sm:text-4xl text-3xl extrabold text-center'>Create profiles for kids</h1>
                            <h1 className='lg:text-2xl sm:text-normal text-lg font-normal text-center'>Send children on adventures with their favourite characters in a space made just for them-free with your membership.</h1>

                        </div>

                    </div>

                </section>

                <section className='min-h-[100vh] w-[100vw] text-white border-b-8 border-gray-700 flex justify-center ' id='section06'>
                    <div className="h-full w-[90%] lg:w-[80%] sm:w-[90%] py-20 ">
                        <div className='w-full text-center bg-black'>
                            <h1 className='text-5xl font-extrabold '>Frequently Asked Questions</h1>
                        </div>
                        

                    </div>
                </section>

            </div>
        </>
    )
}

export default Login_Register




