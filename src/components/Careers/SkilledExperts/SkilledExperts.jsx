import { experts } from "../../../utils/careers.page";
import Button from "../../ui/Button";

const SkilledExperts = () => {
    return (
        <div className="customContainer py-12">
            <div className="flex justify-center">
                <h2 className="lg:w-6/12 text-title-lg font-bold text-center">Become a vicinity of our massive family to inspire and obtain galvanized by skilled experts.</h2>
            </div>
            <div className="space-y-5 mt-8">
                {
                    experts.map((item,index)=>(<div key={index} className="flex items-center  justify-between px-5 py-4 bg-secendory-light text-white rounded-lg">
                        <div className=" ">
                            <h4 className="text-xl">
                                {item.title}
                            </h4>
                            <p className="text-gray-400 text-title-sm">
                                {item.postDate}
                            </p>
                        </div>
                        <div>
                            <Button title="Apply" clasaName="bg-indigo-900 h-[50px] w-32 inline-block rounded-lg"/>
                        </div>
                    </div>))
                }
            </div>
        </div>
    );
};

export default SkilledExperts;