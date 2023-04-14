import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const headers = req.rawHeaders
  const realIp = req.headers['x-real-ip']
  const proxiedFor = req.headers['x-vercel-proxied-for'] // cf-connecting-ip
  res.status(200).json({ success: true, headers, realIp, proxiedFor })
}
