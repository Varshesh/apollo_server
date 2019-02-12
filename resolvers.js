const rest = require('./rest');

const resolvers = {
    Query: {
        users: () => { return rest.getUser().then(res => res) },
        userById: (root, args) => { return rest.getUserById(args.id).then(res => res) }
    },
    Mutation: {
        createUser: (root, args, context) => {
            return rest.createUser(args.first_name, args.last_name, args.gender, args.age).then(res => res);
        },
        updateUser: (root, args, context) => {
            return rest.updateUser(args.id, args.first_name, args.last_name, args.gender, args.age).then(res => res);
        },
        deleteUser: (root, args, context) => {
            return rest.deleteUser(args.id).then(res => res);
        }
    },
}

module.exports = resolvers;