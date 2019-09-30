const postedBy = (parent: any, _args: any, context: any) => {
    return context.prisma.link({ id: parent.id }).postedBy() || null
}

const votes = (parent: any, _args: any, context: any) => {
    return context.prisma.link({ id: parent.id }).votes() || null
}

export {
    postedBy,
    votes
  };