import { aboutData } from "../../utils/abdout";
import Button from "../ui/Button";

const About = () => {
    return (
        <div className="customContainer pt-12">
            <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="md:w-[50%] space-y-5 order-2 md:order-1">
                    {
                        aboutData.leftSide.map((item,index)=> <div key={index} className="flex justify-between items-center gap-5 bg-action-desc text-primary-light p-5">
                        <div className="w-[35%]">
                            <img src={item.image} alt="" className=" object-cover" />
                        </div>
                        <div>
                            <h3>{item.title}</h3>
                            <p className="text-gray-500 mt-3 pe-5">{item.desc}</p>
                        </div>
                    </div>)
                    }
                   
                </div>
                <div className="md:w-[50%] order-1 md:order-2">
                    <h2 className="mb-5 text-title-md4 font-semibold text-action-desc">{aboutData.rightSide.header}</h2>
                    <p className="text-gray-500">{aboutData.rightSide.desc}</p>
                    <div className="flex  gap-10 mt-10 mb-5">
                        {
                            aboutData.rightSide.data.map((item,index)=><div key={index} className="">
                            <h3 className="text-action-subHeading text-title-md2">
                                {item.title}
                            </h3>
                            <p className="-mt-2">
                                {item.desc}
                            </p>
                        </div>)
                        }
                       
                    </div>
                    <Button title="Read More" clasaName="bg-secendory-light"/> 
                </div>
            </div>
        </div>
    );
};

export default About;