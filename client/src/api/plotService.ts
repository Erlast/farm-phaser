import httpCommunicator from './httpCommunicator'

const plotService = {
  async tilled(plotIndex: number) {
    const response = await httpCommunicator.post(
      `/plot/tilled`, {plotIndex: plotIndex}
    )
    return response.data
  },
}

export default plotService