import { BiSolidUpArrowAlt } from "react-icons/bi";
import PropTypes from 'prop-types';
import useScroll from "../../hooks/useScroll";


const FloatBtn = ({ handler }) => {
    const { scrollY } = useScroll()
    return (
        <button
            onClick={handler}
            className={`inline-flex justify-center items-center fixed bottom-[90px] z-50 right-[120px] rounded-full h-12 w-12 bg-[rgb(23,35,54)] text-white hover:bg-[rgb(23,35,54)] active:bg-[rgb(23,35,54] focus:outline-none focus:shadow-outline animate-bounce disabled:opacity-75 disabled:cursor-not-allowed ${scrollY < 9336 ? 'hidden' : ''}`}
        >
            <BiSolidUpArrowAlt className="font-bold text-3xl" />
        </button>
    );
};

FloatBtn.propTypes = {
    handler: PropTypes.func.isRequired,
}


export default FloatBtn;
