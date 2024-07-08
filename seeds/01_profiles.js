export const seed = function(knex) {
  return knex('profiles').del()
    .then(function () {
      return knex('profiles').insert([
        {
          id: 1,
          name: 'Jane Doe',
          username: 'Jane123',
          password: '123',
          bio: 'Hello my name is Jane',
          avatar: 'avatarFemale1'
        }
      ]);
    });
};
