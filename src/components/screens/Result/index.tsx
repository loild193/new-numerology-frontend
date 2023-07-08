/* eslint-disable @typescript-eslint/restrict-plus-operands */
import React from 'react'
import Image from 'next/image'
import { Button } from 'flowbite-react'
import pdfMake from 'pdfmake/build/pdfmake'
import { IResult } from '@models/interface'
import { CONTENT_LABEL, getRenderImages } from '@utils/images'

function exportResultListPdf(
  content: {
    image: string | undefined
    width: number
    height: number
  }[],
) {
  const docDefinitions = {
    pageSize: 'A4',
    pageOrientation: 'portrait',
    pageMargins: [40, 20, 20, 40],
    content,
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
  const data = [
    {
      type: CONTENT_LABEL.LIFE_PATH,
      alt: 'Chân dung khách hàng',
      values: [`/result/life-path/1-${lifePath}a.png`, `/result/life-path/1-${lifePath}b.png`],
    },
    {
      type: CONTENT_LABEL.SOUL,
      alt: 'Tứ huyệt cảm xúc',
      values: [`/result/soul/2-${soul}a.png`, `/result/soul/2-${soul}b.png`],
    },
    {
      type: CONTENT_LABEL.PERSONALITY,
      alt: 'Thiết lập mối quan hệ với khách hàng',
      values: [`/result/personality/3-${personality}.png`],
    },
    { type: CONTENT_LABEL.TALENT, alt: 'Chăm sóc khách hàng', values: [`/result/talent/4-${talent}.png`] },
    { type: CONTENT_LABEL.PASSION, alt: 'Đam mê khách hàng', values: [`/result/passion/5-${passion}.png`] },
  ]

  const renderImages = getRenderImages({ data, type: 'render' })

  const exportPDF = () => {
    const exportImages = getRenderImages({ data, type: 'pdf' })

    exportResultListPdf(exportImages)
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
          {renderImages.map((element, index) => (
            <div key={index} className="mb-8">
              <Image
                key={`${element.alt}-${index}`}
                src={element.image as string}
                alt={element.alt}
                width={707}
                height={1000}
                className="aspect-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
