import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';

export default function RadioInput({ name, label, options, ...rest }) {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div>
            <label>{label}</label>
            <div>
                {options.map((option, index) => (
                    <label key={index}>
                        <input
                            type="radio"
                            value={option.value}
                            {...register(name)}
                            {...rest}
                        />{' '}
                        {option.label}
                    </label>
                ))}
            </div>
            {errors[name] && <small className='text-red-400'>{errors[name].message}</small>}
        </div>
    );
}


RadioInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
}



