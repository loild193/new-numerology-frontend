import { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'
import { promises as fs } from 'fs'
import cache from 'memory-cache'

const CACHE_KEY = 'image-base64'

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const cachedResponse = cache.get(CACHE_KEY)
  if (cachedResponse) {
    res.setHeader('Cache-Control', 'stale-while-revalidate')
    res.status(200).json(cachedResponse)
  } else {
    //Find the absolute path of the json directory
    const jsonDirectory = path.join(process.cwd(), 'public/result')
    //Read the json data file imageBase64.json
    const fileContents = await fs.readFile(jsonDirectory + '/imageBase64.json', 'utf8')
    cache.put(CACHE_KEY, fileContents)
    //Return the content of the data file in json format
    res.status(200).json(fileContents)
  }
}

export const config = {
  api: {
    responseLimit: false,
  },
}
