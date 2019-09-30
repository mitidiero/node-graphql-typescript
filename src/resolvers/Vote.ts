const link = (parent: any, _args: any, context: any) => {
    return context.prisma.vote({ id: parent.id }).link()
}

const user = (parent: any, _args: any, context: any) => {
    return context.prisma.vote({ id: parent.id }).user()
}

export {
    link,
    user,
}