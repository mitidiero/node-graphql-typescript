import jwt from 'jsonwebtoken';

const APP_SECRET = 'GraphQL-is-aw3some'

const getUserId = (parent: any) => {
    const Authorization = parent.request.headers.authorization
    if (Authorization) {
        const token = Authorization.replace('Bearer ', '')
        const userId = jwt.verify(token, APP_SECRET)

        console.log(userId)

        return userId
    }

    throw new Error('Not authenticated')
}

module.exports = {
    APP_SECRET,
    getUserId,
}