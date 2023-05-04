import React from 'react'
import { Button } from 'flowbite-react'
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import { IResult } from '@models/interface'
import { MAPPING as LIFE_PATH_MAPPING } from '@models/searchResult/lifePath'
import { MAPPING as SOUL_MAPPING } from '@models/searchResult/soul'
import { MAPPING as PERSONALITY_MAPPING } from '@models/searchResult/personality'
import { MAPPING as TALENT_MAPPING } from '@models/searchResult/talent'
import { MAPPING as PASSION_MAPPING } from '@models/searchResult/passion'

pdfMake.vfs = pdfFonts.pdfMake.vfs

function exportResultListPdf(
  data: {
    name: string
    value: string | undefined
  }[],
) {
  const docDefinitions = {
    pageSize: 'A4',
    pageOrientation: 'portrait',
    pageMargins: [40, 20, 20, 40],
    footer: function (currentPage: number, pageCount: number) {
      return [
        {
          text: `Trang ${currentPage.toString()}/${pageCount}`,
          alignment: 'center',
        },
      ]
    },
    content: [
      {
        style: 'table',
        table: {
          body: [
            [
              { text: 'Thuộc tính', style: 'tableHeader' },
              { text: 'Thông tin', style: 'tableHeader' },
            ],
            ...data.map((doc) => [doc.name, doc.value]),
          ],
        },
      },
    ],
    styles: {
      table: {
        margin: [0, 5, 0, 15],
      },
      tableHeader: {
        bold: true,
        fontSize: 15,
        color: 'black',
      },
    },
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  pdfMake.createPdf(docDefinitions as any).download('Kết quả.pdf')
}

export const Result: React.FC<IResult> = ({ lifePath, soul, personality, talent, passion }) => {
  const passionParagraph = passion.map((index) => PASSION_MAPPING.get(index))
  const data = [
    { name: 'Chân dung khách hàng', value: LIFE_PATH_MAPPING.get(lifePath) },
    { name: 'Tứ huyệt cảm xúc', value: SOUL_MAPPING.get(soul) },
    { name: 'Thiết lập mối quan hệ với khách hàng', value: PERSONALITY_MAPPING.get(personality) },
    { name: 'Chăm sóc', value: TALENT_MAPPING.get(talent) },
    { name: 'Đam mê', value: passionParagraph.join('\n') },
  ]

  const exportPDF = () => {
    exportResultListPdf(data)
  }

  return (
    <div>
      <Button onClick={exportPDF}>Tải xuống PDF</Button>
      <div className="relative overflow-x-auto mt-6">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead
            className="text-xs text-gray-700 uppercase bg-gray-300
        dark:bg-gray-700 dark:text-gray-400 border border-gray-700"
          >
            <tr>
              <th scope="col" className="px-6 py-3 max-xs:px-4 border border-gray-700">
                Thuộc tính
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
    </div>
  )
}
