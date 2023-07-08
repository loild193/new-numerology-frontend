import { MAPPING_TEMPLATE_IMAGE_BASE64 } from '@models/mapping/template'

export const toBase64 = (str: string) =>
  typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str)

export const DEFAULT_CONTENT = [
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
