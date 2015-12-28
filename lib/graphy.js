module.exports = {
    createAdjacencyList: function (array) {
        return array.reduce(function (list, user) {
            if (list[user.user_id] === undefined) {
                list[user.user_id] = {
                    name: user.name,
                    edges: []
                }
            }

            list[user.user_id].edges.push(user.other_id);

            if (list[user.other_id] === undefined) {
                list[user.other_id] = {
                    name: user.other_name,
                    edges: []
                }
            }

            list[user.other_id].edges.push(user.user_id);

            return list;
        }, {})
    },

    findConnections: function findConnections (list, userId, result, distance) {
        result = result || {};
        distance = distance || 0;
        result[userId] = distance;

        list[userId].edges.forEach(function (id) {
            if (!result.hasOwnProperty(id)) {
                findConnections(list, id, result, distance + 1)
            }
        })

        return result;
    }
};

var test = [
    {"user_id":31,"name":"Alfred","other_id":34,"other_name":"Darby"},
    {"user_id":31,"name":"Alfred","other_id":33,"other_name":"Colleen"},
    {"user_id":32,"name":"Barnaby","other_id":34,"other_name":"Darby"},
    {"user_id":35,"name":"Eleanor","other_id":36,"other_name":"Fernando"}
];


