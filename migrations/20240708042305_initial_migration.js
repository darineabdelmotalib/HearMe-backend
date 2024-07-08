export const up = function(knex) {
    return knex.schema.createTable('profiles', function(table) {
      table.increments('id').primary().comment('Primary Key');
      table.string('name', 255).notNullable().comment('Name');
      table.string('username', 255).notNullable().comment('Username');
      table.string('password', 255).notNullable().comment('Password');
      table.string('bio', 255).defaultTo('no bio').comment('Bio');
      table.string('avatar', 255).defaultTo('avatarFemale1').comment('Avatar');
      table.timestamp('create_time').defaultTo(knex.fn.now()).comment('Create Time');
    });
  };
  
  export const down = function(knex) {
    return knex.schema.dropTable('profiles');
  };
  