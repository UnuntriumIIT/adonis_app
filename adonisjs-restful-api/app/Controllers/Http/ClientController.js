'use strict'

const Client = use('App/Models/Client')

class ClientController {

    async getAllClients({ response }) {
        const page = 1
        const clients = await Client.query().withAllRelations().paginate(page)

        return response.status(200).send(clients.toJSON());
    }

    async putNewClient({ request, response }) {
    }

    async deleteClient({ params, response }) {
        const id = params.clientId
        const client = await Client.findBy('id', id);
        if (!client) {
            return response
                .status(404)
                .send({ message: { error: 'Клиент с таким ID не найден или уже кем-то удален.' } });
        } else {
            client.delete()
            return response.status(200).send({ message: "Клиент успешно удален." });
        }
    }

    async getClient({ params, response }) {
        const client = await Client.query().where({ id: params.clientId }).withAllRelations().fetch()
        if (!client) {
            return response
                .status(404)
                .send({ message: { error: 'The client with this ID is not exists.' } });
        }
        return response.status(200).send(client.toJSON());
    }

    async updateClient({ params, request, response }) {

    }
}

module.exports = ClientController
