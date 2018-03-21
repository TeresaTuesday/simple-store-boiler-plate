const { GraphQLServer } = require('graphql-yoga')
const { Prisma } = require('prisma-binding')
const { auth } = require('./resolvers/auth')


const resolvers = {
  Query: {
    user(parent, { id }, ctx, info) {
      return ctx.db.query.user(
        { where: { id } },
        info
      )
    },
    ride(parent, { id }, ctx, info) {
      return ctx.db.query.ride(
        { where: { id } },
        info
      )
    },
    // cart(parent, { id }, ctx, info) {
    //   return ctx.db.query.user(
    //     { where: { id } },
    //     info
    //   )
    // },
    allRides(parent, {}, ctx, info) {
      return ctx.db.query.rides({}, info)
    },
    allUsers(parent, {}, ctx, info) {
      return ctx.db.query.users({}, info)
    }
  },
  Mutation: {
    ...auth,
    updateUser(parent, { id, name, email, pw }, ctx, info) {
      return ctx.db.mutation.updateUser(
        {
          data: { name, email, pw },
          where: { id }
        },
        info,
      )
    },
    createRide(parent, { name, imgURL, loc, desc, height }, ctx, info) {
      return ctx.db.mutation.createRide(
        { data: { name, imgURL, loc, desc, height } },
        info,
      )
    },
    updateRide(parent, { id, name, imgURL, desc, loc, height }, ctx, info) {
      return ctx.db.mutation.updateRide(
        {
          data: { name, imgURL, desc, loc, height },
          where: { id }
        },
        info,
      )
    },
  }
}
const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint: 'https://us1.prisma.sh/public-slashburn-665/simple-store/dev',
      secret: 'mysecret123',
      debug: true,
    }),
  }),
})

server.start(() => console.log('Server is running on http://localhost:4000'))
