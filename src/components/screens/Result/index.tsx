/* eslint-disable @typescript-eslint/restrict-plus-operands */
import React from 'react'
import Image from 'next/image'
import { Button } from 'flowbite-react'
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import { IResult } from '@models/interface'
import { MAPPING_TEMPLATE_IMAGE_BASE64 } from '@models/mapping/template'
import { MAPPING_LIFE_PATH_IMAGE_BASE64 } from '@models/mapping/lifePath'
import { MAPPING_SOUL_IMAGE_BASE64 } from '@models/mapping/soul'
import { MAPPING_PERSONALITY_IMAGE_BASE64 } from '@models/mapping/personality'
import { MAPPING_TALENT_IMAGE_BASE64 } from '@models/mapping/talent'
import { MAPPING_PASSION_IMAGE_BASE64 } from '@models/mapping/passion'

pdfMake.vfs = pdfFonts.pdfMake.vfs

const DEFAULT_CONTENT = [
  {
    image: MAPPING_TEMPLATE_IMAGE_BASE64.get('/result/template/0a.png'),
    alt: 'Lời giới thiệu',
    width: 525,
    height: 750,
  },
  {
    image: MAPPING_TEMPLATE_IMAGE_BASE64.get('/result/template/0b.png'),
    alt: 'Giới thiệu công ty',
    width: 525,
    height: 750,
  },
  {
    image: MAPPING_TEMPLATE_IMAGE_BASE64.get('/result/template/0c.png'),
    alt: 'Giới thiệu công ty',
    width: 525,
    height: 750,
  },
  {
    image: MAPPING_TEMPLATE_IMAGE_BASE64.get('/result/template/0d.png'),
    alt: 'Mục lục',
    width: 525,
    height: 750,
  },
  {
    image: MAPPING_TEMPLATE_IMAGE_BASE64.get('/result/template/1.png'),
    alt: 'Chân dung khách hàng',
    width: 525,
    height: 750,
  },
]

enum CONTENT_LABEL {
  LIFE_PATH = 1,
  SOUL,
  PERSONALITY,
  TALENT,
  PASSION,
}

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

  const content = [...DEFAULT_CONTENT]

  for (const dataObject of data) {
    if (dataObject.type === CONTENT_LABEL.LIFE_PATH) {
      const newLifePathImages = dataObject.values.map((value) => ({
        image: MAPPING_LIFE_PATH_IMAGE_BASE64.get(value),
        alt: 'Chân dung khách hàng',
        width: 525,
        height: 750,
      }))
      content.push(...newLifePathImages)
    } else if (dataObject.type === CONTENT_LABEL.SOUL) {
      const newSoulImages = dataObject.values.map((value) => ({
        image: MAPPING_SOUL_IMAGE_BASE64.get(value),
        alt: 'Tứ huyệt cảm xúc',
        width: 525,
        height: 750,
      }))
      content.push(
        {
          image: MAPPING_TEMPLATE_IMAGE_BASE64.get('/result/template/2.png'),
          alt: 'Tứ huyệt cảm xúc',
          width: 525,
          height: 750,
        },
        ...newSoulImages,
      )
    } else if (dataObject.type === CONTENT_LABEL.PERSONALITY) {
      const newPersonalityImages = dataObject.values.map((value) => ({
        image: MAPPING_PERSONALITY_IMAGE_BASE64.get(value),
        alt: 'Thiết lập mối quan hệ với khách hàng',
        width: 525,
        height: 750,
      }))
      content.push(
        {
          image: MAPPING_TEMPLATE_IMAGE_BASE64.get('/result/template/3.png'),
          alt: 'Thiết lập mối quan hệ với khách hàng',
          width: 525,
          height: 750,
        },
        ...newPersonalityImages,
      )
    } else if (dataObject.type === CONTENT_LABEL.TALENT) {
      const newTalentImages = dataObject.values.map((value) => ({
        image: MAPPING_TALENT_IMAGE_BASE64.get(value),
        alt: 'Chăm sóc khách hàng',
        width: 525,
        height: 750,
      }))
      content.push(
        {
          image: MAPPING_TEMPLATE_IMAGE_BASE64.get('/result/template/4.png'),
          alt: 'Chăm sóc khách hàng',
          width: 525,
          height: 750,
        },
        ...newTalentImages,
      )
    } else {
      const newPassionImages = dataObject.values.map((value) => ({
        image: MAPPING_PASSION_IMAGE_BASE64.get(value),
        alt: 'Đam mê của khách hàng',
        width: 525,
        height: 750,
      }))
      content.push(
        {
          image: MAPPING_TEMPLATE_IMAGE_BASE64.get('/result/template/5.png'),
          alt: 'Đam mê của khách hàng',
          width: 525,
          height: 750,
        },
        ...newPassionImages,
        {
          image: MAPPING_TEMPLATE_IMAGE_BASE64.get('/result/template/6.png'),
          alt: 'Kết thúc',
          width: 525,
          height: 750,
        },
      )
    }
  }

  const exportPDF = () => {
    exportResultListPdf(content)
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
          {content.map((element, index) => (
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
