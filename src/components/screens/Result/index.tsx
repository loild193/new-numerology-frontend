/* eslint-disable @typescript-eslint/restrict-plus-operands */
import React from 'react'
import { Button } from 'flowbite-react'
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import htmlToPdfmake from 'html-to-pdfmake'
import { IResult } from '@models/interface'
import { MAPPING as LIFE_PATH_MAPPING } from '@models/searchResult/lifePath'
import { MAPPING as SOUL_MAPPING } from '@models/searchResult/soul'
import { MAPPING as PERSONALITY_MAPPING } from '@models/searchResult/personality'
import { MAPPING as TALENT_MAPPING } from '@models/searchResult/talent'
import { MAPPING as PASSION_MAPPING } from '@models/searchResult/passion'
import {
  defaultLifePath,
  defaultPassion,
  defaultPersonality,
  defaultSoul,
  defaultTalent,
} from '@models/searchResult/defaultTitle'

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
    content: [...data.map((doc) => [{ text: htmlToPdfmake(doc.value), style: 'paragraph' }, { text: '\n\n' }])],
    styles: {
      paragraph: {
        fontSize: 14,
        color: '#0a0a0a',
        lineHeight: 1.5,
      },
    },
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  pdfMake.createPdf(docDefinitions as any).download('Kết quả.pdf')
}

export const Result: React.FC<IResult> = ({ lifePath, soul, personality, talent, passion }) => {
  const passionParagraph = passion.map((index) => PASSION_MAPPING.get(index))
  const data = [
    { name: 'Chân dung khách hàng', value: defaultLifePath + LIFE_PATH_MAPPING.get(lifePath) },
    { name: 'Tứ huyệt cảm xúc', value: defaultSoul + SOUL_MAPPING.get(soul) },
    { name: 'Thiết lập mối quan hệ với khách hàng', value: defaultPersonality + PERSONALITY_MAPPING.get(personality) },
    { name: 'Chăm sóc', value: defaultTalent + TALENT_MAPPING.get(talent) },
    { name: 'Đam mê', value: defaultPassion + passionParagraph.join('\n') },
  ]

  const exportPDF = () => {
    exportResultListPdf(data)
  }

  return (
    <div>
      <Button onClick={exportPDF}>Tải xuống PDF</Button>
      <div className="relative overflow-x-auto mt-6">
        <div
          className="block w-full rounded-md border-0 py-6 px-10
          shadow-sm ring-1 ring-inset ring-gray-300
          sm:text-sm sm:leading-6
          text-sm text-left text-gray-500 dark:text-gray-400
          "
        >
          {data.map((element) => (
            <div key={element.name} className="mb-8">
              {/* <div className="mb-4 font-bold text-lg">{element.name}</div> */}
              <div className="text-base break-words" dangerouslySetInnerHTML={{ __html: element.value }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
