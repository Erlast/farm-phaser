import httpCommunicator from './httpCommunicator'

const questsService = {
    async getAvailable() {
        const response = await httpCommunicator.get(
            `/quests/available`,
        )
        return response.data
    },
}

export default questsService