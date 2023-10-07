import PropTypes from 'prop-types';

export default function SelectInput({ name, label, options, register, errors, ...rest }) {
    return (
        <div className='flex flex-col space-y-1'>
            <label htmlFor={name} className='text-[16px] text-slate-600'>{label}</label>
            <select className='form-control placeholder:text-slate-300 placeholder:text-sm border border-slate-200 px-3 py-[7px] rounded-md'
                id={name}
                {...register(name)}
                {...rest}
            >
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {errors[name] && <small className='text-red-400'>{errors[name].message}</small>}
        </div>
    );
}

SelectInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    register: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    options: PropTypes.array.isRequired
}

