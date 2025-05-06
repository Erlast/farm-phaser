import httpCommunicator from './httpCommunicator'

const seedsService = {
  async getSeeds(level: number) {
    const response = await httpCommunicator.get(
      `/seeds`,
    )
    return response.data
  },
}

export default seedsService