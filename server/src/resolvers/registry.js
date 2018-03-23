const registry = {
  addRideToRegistry(parent, { user_id, ride_id }, ctx, info) {
    return ctx.db.mutation.updateUser(
      {
        data: {
          registry: { update: {
            rides: { create: {
              ride: { connect: { id: ride_id } }
              } }
            }
          }
        },
        where: { id: user_id },
      }, info, )
  },
  async removeRideFromRegistry(parent, { user_id, ride_id }, ctx, info) {
    return ctx.db.mutation.updateUser(
      {
        data: {
          registry: { update: {
            rides: { delete: { id: ride_id }}
            }}
        },
        where: {id: user_id }
      }, info,
    )
  },
  clearRegistry(parent, { user_id }, ctx, info) {
    return ctx.db.mutation.updateUser(
      {
        where: { id: user_id },
        data: {
          registry:{
            create:{}
          }
        }
      }, info,
    )
  },
}

module.exports = { registry }
