import httpCommunicator from './httpCommunicator'

const characterService = {
    async one() {
        const response = await httpCommunicator.get(
            '/character',
        )
        return response.data
    },
    async addXP(xp: number) {
        const response = await httpCommunicator.post(
            '/character/xp',
            {
                experience: xp
            }
        )
        return response.data
    },
    async changeBalance(amount: number) {
        const response = await httpCommunicator.post(
            '/character/change-balance',
            {
                amount: amount
            }
        )
        return response.data
    }
}

export default characterService