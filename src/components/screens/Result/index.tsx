import React from 'react'
import { IResult } from '@models/interface'

export const Result: React.FC<IResult> = ({ lifePath, soul, personality, talent, passion }) => {
  const data = [
    { name: 'Chỉ số đường đời', value: lifePath },
    { name: 'Chỉ số linh hồn', value: soul },
    { name: 'Chỉ số nhân cách', value: personality },
    { name: 'Chỉ số tài năng', value: talent },
    { name: 'Chỉ số đam mê', value: passion.join(', ') },
  ]
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 max-xs:px-4">
              Chỉ số
            </th>
            <th scope="col" className="px-6 py-3 max-xs:px-4 max-xs:text-xs">
              Giá trị
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((element) => (
            <tr key={element.name} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white
                max-xs:text-xs max-xs:px-4 max-xs:py-3"
              >
                {element.name}
              </th>
              <td className="px-6 py-4 max-xs:px-4 max-xs:py-3">{element.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
