import PropTypes from 'prop-types';


export default function FileInput({ name, label, register, errors, ...rest }) {

    return (
        <div className='flex flex-col space-y-1'>
            <label htmlFor={name} className='text-[16px] text-slate-600'>{label}</label>
            {/* <input className='form-control placeholder:text-slate-300 placeholder:text-sm border border-slate-200 px-3 py-[7px] rounded-md' */}
            <input className='border border-slate-200 rounded-md block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100' type="file"
                id={name}
                {...register(name)}
                {...rest}
            />
            {errors[name] && <span>{errors[name].message}</span>}
        </div>
    );
}

FileInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    register: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired

}

