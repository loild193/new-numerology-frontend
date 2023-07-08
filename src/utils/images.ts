import { DEFAULT_CONTENT } from './encoding'
import { MAPPING_TEMPLATE_IMAGE_BASE64 } from '@models/mapping/template'

export enum CONTENT_LABEL {
  LIFE_PATH = 1,
  SOUL,
  PERSONALITY,
  TALENT,
  PASSION,
}

export const getExportImages = async ({
  data,
}: {
  data: {
    type: CONTENT_LABEL
    alt: string
    values: string[]
  }[]
}) => {
  let imageBase64: Record<string, string> = {}
  try {
    const imagesBase64Response = await fetch('/api/images')
    const rawImagesBase64Response = await imagesBase64Response.json()
    imageBase64 = JSON.parse((rawImagesBase64Response as string) || '{}')
  } catch (error) {
    console.log('Fetch image data error', error)
    return []
  }
  const content = [...DEFAULT_CONTENT]

  for (const dataObject of data) {
    if (dataObject.type === CONTENT_LABEL.LIFE_PATH) {
      const newLifePathImages = dataObject.values.map((value) => ({
        image: imageBase64[value],
        alt: 'Chân dung khách hàng',
        width: 525,
        height: 750,
      }))
      content.push(...newLifePathImages)
    } else if (dataObject.type === CONTENT_LABEL.SOUL) {
      const newSoulImages = dataObject.values.map((value) => ({
        image: imageBase64[value],
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
        image: imageBase64[value],
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
        image: imageBase64[value],
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
        image: imageBase64[value],
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
