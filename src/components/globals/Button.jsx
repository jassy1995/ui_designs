import PropTypes from 'prop-types';

export default function Button({ className, children, color, ...rest }) {
    return (
        <button
            {...rest}
            className={`px-4 py-2 bg-${color}-500 text-white rounded-md hover:bg-${color}-700 focus:outline-none font-semibold disabled:opacity-75 disabled:cursor-not-allowed ${className}`}
        >
            {children}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
}
