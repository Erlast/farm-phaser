import httpCommunicator from './httpCommunicator'

const levelService = {
    async getLevelRequirements(level:number) {
        const response = await httpCommunicator.get(
            `/level/${level}`,
        )
        return response.data
    },
}

export default levelService