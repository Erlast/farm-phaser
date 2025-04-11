import jwt from 'jsonwebtoken'

const generateToken = (userId: number) => {
    if (!process.env.JWT_SECRET) {
        throw new Error('JWT_SECRET is not defined')
    }
    return jwt.sign(
        {userId},
        process.env.JWT_SECRET,
        {expiresIn: '7d'}
    )
}

export {generateToken}