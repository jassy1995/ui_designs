import PropTypes from 'prop-types';
import { FaEllipsisVertical } from "react-icons/fa6";

export default function DataTable({ columns, data }) {
    return (
        <div className='relative overflow-x-auto w-full rounded-md'>
            <table className="table-auto w-full">
                <thead className='bg-green-500 text-white h-12'>
                    <tr className='text-center text-sm whitespace-nowrap'>
                        {columns.map((column, i) => (
                            <th key={i}>{column.label}</th>
                        ))}
                        <th className='text-center'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            {columns.map((column, i) => (
                                <td key={i} className='text-center borde px-2 sm:px-0 py-5 whitespace-nowrap'>
                                    {column.key === 'photo' ? (
                                        <div className='flex justify-center items-center whitespace-nowrap w-20 sm:w-full bg-red-2200 rounded-full'>
                                            <img
                                                src={item[column.key]}
                                                alt={item[column.key]}
                                                className='rounded-full w-8 h-8 object-cover ring-1 ring-green-500'
                                            />
                                        </div>
                                    ) : (
                                        item[column.key]
                                    )}

                                </td>
                            ))}
                            <td className='text-center borde'>
                                <span className='flex justify-center items-center'>
                                    <FaEllipsisVertical className="text-green-500 hover:bg-green-50 text-xl hover:cursor-pointer rounded-full" />
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

DataTable.propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired
}
