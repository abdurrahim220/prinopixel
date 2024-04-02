import { jobRequirements } from "../../../utils/careers.page";

const JobRequirements = () => {
    return (
        <div className="customContainer flex-col py-12 flex items-center">
            <div className="lg:w-7/12 space-y-5">
                <h2 className="font-bold text-center">
                    {jobRequirements.title}
                </h2>
                <p className="text-base text-gray-700 text-opacity-65">
                    {
                        jobRequirements.desc
                    }
                </p>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                {
                    jobRequirements.requirments.map((item, index) => (<div key={index} className="custom-border p-[3px] rounded-md  ">
                        <div className="p-6 bg-action-desc flex flex-col items-center text-center space-y-3 rounded-md hover:scale-110 transition-all duration-500">
                            <img src={item.icon} className="size-12" alt="" />
                            <h3 className="text-primary-light">
                                {item.title}
                            </h3>
                            <p className="text-gray-500">
                                {item.desc}
                            </p>
                        </div>

                    </div>))
                }

            </div>
        </div>
    );
};

export default JobRequirements;