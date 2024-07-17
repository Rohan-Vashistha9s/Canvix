import content01 from "../Home/assests/content01.png";
import content02 from "../Home/assests/content02.png";
import graphic01 from "../Home/assests/Graphic01.png";
import digital02 from "../Home/assests/digital02.png";
import vector from "../Home/assests/Vector.png";
import it from "../Home/assests/it.png";
import brand from "../Home/assests/brand.png";
import web from "../Home/assests/web.png";








const Services = () => {
    return (
        <div>
            {/* /* OUR SERVICE SECTION START */}
            <div className="container">
                <div className="Ourservices">
                    <div>
                        <h4 className="justify-center text-center relative top-12 m-auto font-bold our ">Our Services</h4>
                    </div>
                    <h1 className="justify-center text-center relative top-12 m-auto service font-bold">High-impact services for your business</h1>
                </div>

                <div className="flex gap-16 boxes">

                    <div className="frame37">
                        <div className="image-layer">
                            <img src={content01} alt="content marketing" className="content01 absolute" />
                            <img src={content02} alt="" className="content02 absolute " />
                        </div>
                        <div className="image-layer">
                            <img src={vector} alt="vector" className="vector relative " />
                        </div>
                        <div className="frame37a gap-4">
                            <div>
                                <p className="font-bold -bottom-8 relative text-2xl">Content Marketing</p>
                            </div>
                            <div>
                                <p className=" -bottom-14 -left-1 relative ">Our team creates engaging and shareable content that resonates with your audience, drives organic traffic.</p>
                            </div>
                        </div>

                    </div>

                    <div className="frame56">
                        <div>
                            <img src={graphic01} alt="Graphic design" className="relative z-10 top-3 left-2" />
                            <img src={vector} alt="Graphic design" className="relative vector -top-12 -left-4 " />
                        </div>
                    
                        <div>
                            <div className="frame56a">
                                <p className="font-bold bottom-3 relative text-2xl">Graphic Design</p>
                            </div>
                            <div>
                                <p className=" -bottom-1 relative">Unlock the power of visual storytelling with our expert graphic design services tailored to elevate your brand and captivate.</p>
                            </div>
                        </div>

                    </div>

                    <div className="frame38">
                        <div>
                            <img src={vector} alt="Digital marketing" className="relative -top-2 -left-4 " />
                            <img src={digital02} alt="" className="relative z-10 -top-16 left-2" />
                        </div>
                        <div className="frame38a">
                            <div>
                                <p className="font-bold bottom-3 relative text-2xl">Digital Marketing</p>
                            </div>
                            <div>
                                <p className=" -bottom-1 relative">Elevate your brand's online presence with our data-driven digital marketing strategies. From SEO and content marketing</p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* SECOND BOX */}

                <div className="flex gap-16 boxes">

                    <div className="frame37">
                        <div>
                            <img src={vector} alt="content marketing" className="absolute " />
                            <img src={web} alt="" className="relative left-6 top-6" />
                        </div>
                        <div className="frame37a gap-4">
                            <div>
                                <p className="font-bold -bottom-20 relative text-2xl">Web Design</p>
                            </div>
                            <div>
                                <p className=" -bottom-20 relative ">We specialize in creating visually stunning, user-friendly websites that align with your brand identity and deliver an exceptional.</p>
                            </div>
                        </div>

                    </div>

                    <div className="frame56">
                        <div>
                            <img src={it} alt="Graphic design" className="relative z-10 top-3 left-2" />
                            <img src={vector} alt="Graphic design" className="relative -top-12 -left-4 " />
                        </div>
                        <div>
                            <div className="frame56a">
                                <p className="font-bold bottom-3 relative text-2xl">IT consulting</p>
                            </div>
                            <div>
                                <p className=" -bottom-1 relative">IT consulting, or information technology consulting, refers to the practice of providing advisory and implementation services</p>
                            </div>
                        </div>

                    </div>

                    <div className="frame38">
                        <div>
                            <img src={vector} alt="Digital marketing" className="relative -top-2 -left-4 " />
                            <img src={brand} alt="" className="relative z-10 -top-16 left-2" />
                        </div>
                        <div className="frame38a">
                            <div>
                                <p className="font-bold bottom-3 relative text-2xl">Digital Marketing</p>
                            </div>
                            <div>
                                <p className=" -bottom-1 relative">It involves creating a unique and recognizable identity that sets the brand apart from competitors and resonates with the target audience.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        // /* OUR SERVICE SECTION END */ 
    )
}

export default Services