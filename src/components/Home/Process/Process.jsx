import arrow from '../assests/Arrow.png'
import Create from '../assests/Create.png'
import frames from '../assests/Frames.png'
import frame from '../assests/frame.png'
import Ideate from '../assests/Ideate.png'
import Testing from '../assests/Testing.png'
// import vector01 from '../assests/Vector01.png'
import research from '../assests/Research.png'








const Process = () => {
    return (
        <div>
            {/* /* OUR PROCESS SECTION START */}
            <div className="Process">
                <div className="Proccess">
                    <div>
                        <h4 className="justify-center text-center relative top-12 m-auto font-bold pro ">Process</h4>
                    </div>
                    <h1 className="justify-center text-center relative top-12 m-auto proc font-bold">Process that moves things forward</h1>
                </div>

                <div className="flex gap-16 group57">

                    <div className="group57a">
                        <div>
                            <img src={Ideate} alt="Ideate" className="-left-20 -top-16 relative " />
                            <img src={frame} alt="" className='ideaFrame absolute -top-11 h-60'/>
                            <img src={arrow} alt="" className='ideaarrow'/>
                            
                        </div>
                        <div className="group32 ">
                            <div>
                                <p className="font-bold left-6 -top-36 relative text-3xl">Ideate</p>
                            </div>
                            <div>
                                <p className="ideate relative ">The ideation process is a crucial phase in the design process where creative thinking and brainstorming.</p>
                            </div>
                        </div>

                    </div>

                    <div className="group30">
                        <div>
                            <img src={research} alt="Research" className="-left-1 relative -top-16" />
                            <img src={frame} alt="" className='researchFrame absolute -top-11 h-60'/>
                            <img src={arrow} alt="" className='researcharrow'/>

                        </div>
                        <div>
                            <div className="group30a">
                                <p className="researchTag font-bold -top-36 text-2xl relative ">Research</p>
                            </div>
                            <div>
                                <p className=" researching relative">Research is a critical component of the design process, helping designers understand the problem.</p>
                            </div>
                        </div>

                    </div>

                    <div className="group41">
                        <div>
                            <img src={Create} alt="Create" className="left-20  relative -top-16" />
                            <img src={frame} alt="" className='createFrame absolute -top-11 h-60'/>
                            <img src={arrow} alt="" className='createarrow'/>
                            
                        </div>
                        <div className="group41a">
                            <div>
                                <p className="createTag font-bold -top-36 relative text-2xl">Create</p>
                            </div>
                            <div>
                                <p className="creating relative">Designing a process involves several key steps to ensure clarity, efficiency, successful
                                implementation.</p>
                            </div>
                        </div>

                    </div>

                    <div className="group40">
                        <div>
                            <img src={Testing} alt="Testing" className=" relative test -top-16" />
                            <img src={frames} alt="" className='absolute -top-10 testingFrame h-60'/>
                            <img src={arrow} alt="" className='testarrow'/>

                        </div>
                        <div className="group40a">
                            <div>
                                <p className="testingtag font-bold -top-36  relative text-2xl">Testing</p>
                            </div>
                            <div>
                                <p className="testing  w-48  relative">Testing is a crucial phase in the design process to ensure that the product or system meets the specified requirements.</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Process