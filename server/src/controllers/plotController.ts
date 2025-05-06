import {prisma} from "../prisma/client";

export const plot = async (req: any, res: any) => {
  try {
    const {plotIndex} = req.body;
    await prisma.plot.update({
      where: {id: plotIndex},
      data: {
        state: 'TILLED'
      }
    });
    return res.status(200).json('DONE')
  } catch (error) {
    console.log(error)
    res.status(500).json({error: 'Failed to tilled plot'})
  }
}