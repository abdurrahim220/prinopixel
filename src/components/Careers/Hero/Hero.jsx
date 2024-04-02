import Button from "../../ui/Button";

const Hero = () => {
    return (
        <div className='text-white  bg-indigo-600 bg-cover  bg-right bg-[url(https://wptf.themepul.co/restly/wp-content/uploads/2021/05/title-bg.jpg)]'>
            <div className="customContainer h-[80vh] flex items-center">
                <div className=" md:w-5/12 space-y-8">
                    <h2 className="text-title-lg font-extrabold">Start Your Journey With Us</h2>
                    <p className="mb-8 text-gray-400">Embark on a fulfilling career journey with endless possibilities at PrinoPixel.</p>
                    <Button title="Explore Careers Button" clasaName="bg-accent-dark h-[60px] w-52 inline-block rounded-md" />
                </div>
            </div>
        </div>
    );
};

export default Hero;