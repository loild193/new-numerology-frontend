import React from 'react'
import { IResult } from '@models/interface'

export const Result: React.FC<IResult> = ({
  lifePath,
  mission,
  linkLifePathAndMission,
  mature,
  soul,
  personality,
  linkSoulAndPersonality,
  balance,
  mindset,
  subconscious,
  personalYear,
  personalMonth,
  personalDay,
  firstMilestone,
  secondMilestone,
  thirdMilestone,
  fourthMilestone,
  firstChallenge,
  secondChallenge,
  thirdChallenge,
  fourthChallenge,
  passion,
  noOccurrenceNumbers,
}) => {
  const data = [
    { name: 'Chỉ số đường đời', value: `${lifePath[0]}/${lifePath[1]}` },
    { name: 'Chỉ số sứ mệnh', value: mission },
    { name: 'Chỉ số liên kết đường đời và sứ mệnh', value: linkLifePathAndMission },
    { name: 'Chỉ số trưởng thành', value: mature },
    { name: 'Chỉ số linh hồn', value: soul },
    { name: 'Chỉ số nhân cách', value: personality },
    { name: 'Chỉ số liên kết linh hồn và nhân cách', value: linkSoulAndPersonality },
    { name: 'Chỉ số cân bằng', value: balance },
    { name: 'Chỉ số tư duy lý trí', value: mindset },
    { name: 'Chỉ số sức mạnh tiềm thức', value: subconscious },
    { name: 'Chỉ số năm cá nhân', value: personalYear },
    { name: 'Chỉ số tháng cá nhân', value: personalMonth },
    { name: 'Chỉ số ngày cá nhân', value: personalDay },
    { name: 'Chỉ số chặng 1', value: firstMilestone },
    { name: 'Chỉ số chặng 2', value: secondMilestone },
    { name: 'Chỉ số chặng 3', value: thirdMilestone },
    { name: 'Chỉ số chặng 4', value: fourthMilestone },
    { name: 'Chỉ số thách thức 1', value: firstChallenge },
    { name: 'Chỉ số thách thức 2', value: secondChallenge },
    { name: 'Chỉ số thách thức 3', value: thirdChallenge },
    { name: 'Chỉ số thách thức 4', value: fourthChallenge },
    { name: 'Chỉ số đam mê', value: passion.join(', ') },
    { name: 'Chỉ số thiếu', value: noOccurrenceNumbers.join(', ') },
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
