function newLinkSubscribe(_parent: any, _args: any, context: any) {
    return context.prisma.$subscribe.link({ mutation_in: ['CREATED'] }).node()
}

const newLink = {
    subscribe: newLinkSubscribe,
    resolve: (payload: any) => {
        return payload
    },
}

function newVoteSubscribe(_parent: any, _args: any, context: any) {
    return context.prisma.$subscribe.vote({ mutation_in: ['CREATED'] }).node()
}

const newVote = {
    subscribe: newVoteSubscribe,
    resolve: (payload: any) => {
        return payload
    },
}

export {
    newLink,
    newVote,
}