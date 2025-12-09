const testUser = {
    name: "Max",
    surName: "Mustermann",
    age: 20,
    isRegistered: false,
}

const {name} = testUser
const testUser2 = {...testUser}
const testUser3 = {...testUser, name: 'hallo'}


console.log(testUser3);
