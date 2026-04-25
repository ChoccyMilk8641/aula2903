const fakeUsers = [
    {id: 1, name: "Joselito", email: 'joselito@mail.com'}
];

async function ListUser(req, res) {
    res.status(200)
    res.send(fakeUsers);
}

function CreateUser(req, res) {
    const {name, email} = req.body;

    const id = fakeUsers.length + 1;

    fakeUsers.push({id, name, email});

    res.json({
        message: "Usuario cadastrado com sucesso!"
    });
}

function UpdateUser(req, res) {
    const {id} = req.params;
    const {name, email} = req.body;

    fakeUsers.forEach(user => {
        if(Number(user.id) === Number(id)) {
            user.name = name || user.name;
            user.email = email || user.email
        }
    })

    res.send('usuario atualizado');
    }

module.exports = {
    ListUser,
    CreateUser,
    UpdateUser
}