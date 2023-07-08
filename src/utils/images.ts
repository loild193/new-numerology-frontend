import { MAPPING_LIFE_PATH_IMAGE_BASE64 } from '@models/mapping/lifePath'
import { DEFAULT_CONTENT } from './encoding'
import { MAPPING_SOUL_IMAGE_BASE64 } from '@models/mapping/soul'
import { MAPPING_TEMPLATE_IMAGE_BASE64 } from '@models/mapping/template'
import { MAPPING_PERSONALITY_IMAGE_BASE64 } from '@models/mapping/personality'
import { MAPPING_TALENT_IMAGE_BASE64 } from '@models/mapping/talent'
import { MAPPING_PASSION_IMAGE_BASE64 } from '@models/mapping/passion'

export enum CONTENT_LABEL {
  LIFE_PATH = 1,
  SOUL,
  PERSONALITY,
  TALENT,
  PASSION,
}

export type ResultType = 'render' | 'pdf'

export const getRenderImages = ({
  data,
  type,
}: {
  data: {
    type: CONTENT_LABEL
    alt: string
    values: string[]
  }[]
  type: ResultType
}) => {
  const content = [...DEFAULT_CONTENT]

  for (const dataObject of data) {
    if (dataObject.type === CONTENT_LABEL.LIFE_PATH) {
      const newLifePathImages = dataObject.values.map((value) => ({
        image: type === 'pdf' ? MAPPING_LIFE_PATH_IMAGE_BASE64.get(value) : value,
        alt: 'Chân dung khách hàng',
        width: 525,
        height: 750,
      }))
      content.push(...newLifePathImages)
    } else if (dataObject.type === CONTENT_LABEL.SOUL) {
      const newSoulImages = dataObject.values.map((value) => ({
        image: type === 'pdf' ? MAPPING_SOUL_IMAGE_BASE64.get(value) : value,
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
        image: type === 'pdf' ? MAPPING_PERSONALITY_IMAGE_BASE64.get(value) : value,
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
        image: type === 'pdf' ? MAPPING_TALENT_IMAGE_BASE64.get(value) : value,
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
        image: type === 'pdf' ? MAPPING_PASSION_IMAGE_BASE64.get(value) : value,
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

  return content
}
