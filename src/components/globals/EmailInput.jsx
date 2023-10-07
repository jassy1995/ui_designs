import PropTypes from 'prop-types';

export default function TextInput({ name, label, type = 'text', register, errors, ...rest }) {

    return (
        <div className='flex flex-col space-y-1'>
            <label htmlFor={name} className='text-[16px] text-slate-600'>{label}</label>
            <input className='form-control placeholder:text-slate-300 placeholder:text-sm border border-slate-200 px-3 py-[7px] rounded-md'
                type={type}
                id={name}
                {...register(name)}
                {...rest}
            />
            {errors[name] && <small className='text-red-400'>{errors[name].message}</small>}
        </div>
    );
}

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    register: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}



