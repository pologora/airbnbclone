import heroImg from '../img/photo-grid.png'

const Hero = () => {
    return (
        <main>
            <div className="hero-container">
                <img src={heroImg} alt="" className='hero-img' />
                <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </main>
    )
}


export default Hero