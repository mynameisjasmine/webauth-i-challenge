const db = require('../database/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findByUsername,
  findById  
};


// function add(user) {
//   return db('users')
//   .insert(user, 'id')
//   .then(id => {
// //  const [id] = ids;
//  return findById(id[0]);
//   });   
// }

function add(user) {
return db('users')
.insert(user, 'id')
.then(([id]) => id)
}

function find() {
return db('users')

}

function findBy(where) {
return db('users')
.where(where)
}


function findByUsername(username) {
return findBy({username})
 .first();
}


function findById(id) {
  return db('users')
  .select('id', 'username')  
  .where({ id })
  .first()
}