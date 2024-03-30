import PropTypes from "prop-types";
const Button = ({ title, clasaName }) => {
    return (
        <button className={`${clasaName && clasaName} z-1 relative flex h-[50px] w-40 items-center justify-center font-semibold overflow-hidden bg-secendory-light before:z-1 shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-primary-light text-white   before:duration-500  before:ease-out hover:before:size-56 `}>
            <span className="relative z-10 ">{title}</span>
        </button>
    );
};

Button.prototypes = {
    title: PropTypes.string,
    className: PropTypes.string
}

export default Button;