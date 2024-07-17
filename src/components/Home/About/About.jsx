import image1 from '../assests/Rectangle 24.png'
import image2 from '../assests/Rectangle 25.png'
import image3 from '../assests/Rectangle 26.png'
import slidebutton from '../assests/slideButton.png';
const About = () => {
    return (
        <div className='bg-black group47'>
            <div className='frame182'>
                <div className=''>
                    <img src={image1} alt="" className='image1 ' />
                    <img src={image2} alt="" className='image2' />
                    <img src={image3} alt="" className='image3' />
                </div>
                <div className='text-white relative frame181'>
                    <p className='frame181a'>About us</p>
                    <p className='frame181b'>The core mission behind all our work</p>
                    <p className='text-sm my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus sit sunt minima velit doloremque obcaecati! Lorem ipsum dolor sit amet, consectetur </p>
                    <div className='frame181c gap-28 font-bold text-4xl flex'>
                        <span>330+</span>
                        <span>230+</span>
                    </div>
                    <div className='flex gap-16 my-2'>
                        <p>Companies helped</p>
                        <p>Revenue generated</p>
                    </div>
                    <img src={slidebutton} alt="" className='frame35'/>
                    <button className='frame35a'>Start your Free Trial</button>
                </div>
            </div>
        </div>
    )
}

export default About