import React from 'react'
import { IResult } from '@models/interface'
import { MAPPING as LIFE_PATH_MAPPING } from '@models/searchResult/lifePath'
import { MAPPING as SOUL_MAPPING } from '@models/searchResult/soul'
import { MAPPING as PERSONALITY_MAPPING } from '@models/searchResult/personality'
import { MAPPING as TALENT_MAPPING } from '@models/searchResult/talent'
import { MAPPING as PASSION_MAPPING } from '@models/searchResult/passion'

export const Result: React.FC<IResult> = ({ lifePath, soul, personality, talent, passion }) => {
  const passionParagraph = passion.map((index) => PASSION_MAPPING.get(index))
  const data = [
    { name: 'Chỉ số đường đời', value: LIFE_PATH_MAPPING.get(lifePath) },
    { name: 'Chỉ số tứ huyệt cảm xúc', value: SOUL_MAPPING.get(soul) },
    { name: 'Chỉ số tương tác', value: PERSONALITY_MAPPING.get(personality) },
    { name: 'Chỉ số tài năng', value: TALENT_MAPPING.get(talent) },
    { name: 'Chỉ số đam mê', value: passionParagraph.join('\n') },
  ]

  return (
    <div className="relative overflow-x-auto mt-6">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          className="text-xs text-gray-700 uppercase bg-gray-300
        dark:bg-gray-700 dark:text-gray-400 border border-gray-700"
        >
          <tr>
            <th scope="col" className="px-6 py-3 max-xs:px-4 border border-gray-700">
              Chỉ số
            </th>
            <th scope="col" className="px-6 py-3 max-xs:px-4 max-xs:text-xs">
              Thông tin
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((element) => (
            <tr key={element.name} className="bg-white border dark:bg-gray-800 border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white
                max-xs:text-xs max-xs:px-4 max-xs:py-3 border-r border-gray-700 max-xs:align-top"
              >
                <p>{element.name}</p>
              </th>
              <td className="px-6 py-4 max-xs:px-4 max-xs:py-3">
                <p className="text-base whitespace-pre-line break-words">{element.value}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
