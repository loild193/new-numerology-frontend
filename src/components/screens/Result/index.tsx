/* eslint-disable @typescript-eslint/restrict-plus-operands */
import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from '@components/common/Button'
import { IResult } from '@models/interface'
import { DEFAULT_CONTENT } from '@utils/encoding'
import { getExportImages } from '@utils/images'

enum CONTENT_LABEL {
  LIFE_PATH = 1,
  SOUL,
  PERSONALITY,
  TALENT,
  PASSION,
}

async function exportResultListPdf(
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
  const pdfMake = (await import('pdfmake')) as any
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  pdfMake.createPdf(docDefinitions as any).download('Kết quả.pdf')
}

export const getRenderImages = ({
  data,
}: {
  data: {
    type: CONTENT_LABEL
    alt: string
    values: string[]
  }[]
}) => {
  const content = [...DEFAULT_CONTENT]

  for (const dataObject of data) {
    if (dataObject.type === CONTENT_LABEL.LIFE_PATH) {
      const newLifePathImages = dataObject.values.map((value) => ({
        image: value,
        alt: 'Chân dung khách hàng',
        width: 525,
        height: 750,
      }))
      content.push(...newLifePathImages)
    } else if (dataObject.type === CONTENT_LABEL.SOUL) {
      const newSoulImages = dataObject.values.map((value) => ({
        image: value,
        alt: 'Tứ huyệt cảm xúc',
        width: 525,
        height: 750,
      }))
      content.push(
        {
          image: '/result/template/2.png',
          alt: 'Tứ huyệt cảm xúc',
          width: 525,
          height: 750,
        },
        ...newSoulImages,
      )
    } else if (dataObject.type === CONTENT_LABEL.PERSONALITY) {
      const newPersonalityImages = dataObject.values.map((value) => ({
        image: value,
        alt: 'Thiết lập mối quan hệ với khách hàng',
        width: 525,
        height: 750,
      }))
      content.push(
        {
          image: '/result/template/3.png',
          alt: 'Thiết lập mối quan hệ với khách hàng',
          width: 525,
          height: 750,
        },
        ...newPersonalityImages,
      )
    } else if (dataObject.type === CONTENT_LABEL.TALENT) {
      const newTalentImages = dataObject.values.map((value) => ({
        image: value,
        alt: 'Chăm sóc khách hàng',
        width: 525,
        height: 750,
      }))
      content.push(
        {
          image: '/result/template/4.png',
          alt: 'Chăm sóc khách hàng',
          width: 525,
          height: 750,
        },
        ...newTalentImages,
      )
    } else {
      const newPassionImages = dataObject.values.map((value) => ({
        image: value,
        alt: 'Đam mê của khách hàng',
        width: 525,
        height: 750,
      }))
      content.push(
        {
          image: '/result/template/5.png',
          alt: 'Đam mê của khách hàng',
          width: 525,
          height: 750,
        },
        ...newPassionImages,
        {
          image: '/result/template/6.png',
          alt: 'Kết thúc',
          width: 525,
          height: 750,
        },
      )
    }
  }

  return content
}

export const Result: React.FC<IResult> = ({ lifePath, soul, personality, talent, passion }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
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

  const renderImages = getRenderImages({ data })

  const exportPDF = async () => {
    setIsLoading(true)
    const exportImages = await getExportImages({ data })
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    await exportResultListPdf(JSON.parse(JSON.stringify(exportImages)))
    setIsLoading(false)
  }

  return (
    <div>
      <div className="w-[160px]">
        <Button label="Tải xuống PDF" loading={isLoading} loadingLabel="Đang xử lý" onClick={exportPDF} />
      </div>
      <div className="relative overflow-x-auto mt-6">
        <div
          className="block w-full rounded-md border-0 py-6 px-10
          shadow-sm ring-1 ring-inset ring-gray-300
          sm:text-sm sm:leading-6
          text-sm text-left text-gray-500 dark:text-gray-400
          "
        >
          {renderImages.map((element: any, index: number) => (
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
