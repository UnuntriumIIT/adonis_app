'use strict'

const Client = use('App/Models/Client')
const Address = use('App/Models/Address')
const DocumentPassport = use('App/Models/DocumentPassport')
const Communication = use('App/Models/Communication')
const Child = use('App/Models/Child')
const Job = use('App/Models/Job')
const Bumblebee = use('Adonis/Addons/Bumblebee')

class ClientController {

    async getAllClients({ response }) {
        const page = 1
        const clients = await Client.query().withAllRelations().paginate(page)

        return response.status(200).send(clients.toJSON());
    }

    async putNewClient({ request, response }) {
        var addressesArray = [request.body.regAddress, request.body.livingAddress]
        request.body.jobs.forEach(job => {
            if (!job.address)
                addressesArray.push(job.address)
        })

        let addresses = await this.transformData(addressesArray, 'AddressTransformer', { request })
        let passport = await this.transformData([request.body.passport], 'PassportTransformer', { request })
        let client = await this.transformData([request.body], 'ClientTransformer', request)
        let communications = await this.transformData(request.body.communications, 'CommunicationTransformer', { request })
        let children = await this.transformData(request.body.children, 'ChildTransformer', { request })
        let jobs = await this.transformData(request.body.jobs, 'JobTransformer', { request })

        await Address.createMany(addresses)
        await DocumentPassport.createMany(passport)
        await Client.createMany(client)
        await Communication.createMany(communications)
        await Child.createMany(children)
        await Job.createMany(jobs)

        return response.status(200).send('Клиент успешно создан.')
    }

    async transformData(data, transformer, ctx){
        return Bumblebee.create()
            .collection(data)
            .transformWith(transformer)
            .withContext(ctx)
            .toJSON()
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
