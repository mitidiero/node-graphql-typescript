const links = (parent: any, _args: any, context: any) => {
    return context.prisma.user({ id: parent.id }).links()
}

export {
    links
}