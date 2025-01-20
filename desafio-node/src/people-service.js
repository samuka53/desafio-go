const mysql = require('mysql')
const moniker = require('moniker');
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};

const insertNew = () => {
    const connection = mysql.createConnection(config)
    const newName = moniker.choose();

    connection.query(`INSERT INTO people(name) values('${newName}')`)

    connection.end
}

const getAll = (callback) => {
    const connection = mysql.createConnection(config)

    connection.query(`SELECT name FROM people`, function (err, result, fields) {
        if (err) throw err

        const listOfNames = result.map((entry) => `<li>${entry.name}</li>`).join('\n')

        return callback(`
            <h1>Full Cycle Rocks!</h1>
            <h3>List of people</h3>
            <ul>
                ${listOfNames}
            </ul>
        `)
    });

    connection.end
}

exports.insertNew = insertNew;
exports.getAll = getAll;