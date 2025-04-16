import httpCommunicator from './httpCommunicator'

const accountService = {
    async me() {
        const response = await httpCommunicator.get(
            '/user/me',
        )
        return response.data
    }
}

export default accountService