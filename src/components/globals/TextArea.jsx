
import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';


export default function TextArea({ name, label, ...rest }) {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div className='flex flex-col space-y-1'>
            <label htmlFor={name} className='text-[16px] text-slate-600'>{label}</label>
            <textarea className='form-control placeholder:text-slate-300 placeholder:text-sm border border-slate-200 px-3 py-[7px] rounded-md'
                id={name}
                {...register(name)}
                {...rest}
            />
            {errors[name] && <span>{errors[name].message}</span>}
        </div>
    );
}


TextArea.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
}
