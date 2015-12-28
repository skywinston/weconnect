
exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('users').del(),
    knex('users').insert({name: 'Alfred'}),
    knex('users').insert({name: 'Barnaby'}),
    knex('users').insert({name: 'Colleen'}),
    knex('users').insert({name: 'Darby'}),
    knex('users').insert({name: 'Eleanor'}),
    knex('users').insert({name: 'Fernando'})
  );
};
