import { services } from '@/data';
import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  // by default get request
  res.status(200).json(services)  
}