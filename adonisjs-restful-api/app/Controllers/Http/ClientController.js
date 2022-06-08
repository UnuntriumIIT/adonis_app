'use strict'

const Client = use('App/Models/Client')

class ClientController {

    async getAllClients({response}){
        const page = 1;
        const clients = await Client.query()
                                    .with('children', (builder) => {
                                        builder.setHidden(['id', 'client_id'])
                                    })
                                    .with('communications', (builder) => {
                                        builder.setHidden(['id', 'client_id'])
                                    })
                                    .with('passport')
                                    .with('regAddress')
                                    .with('livingAddress')
                                    .with('jobs', (builder) => {
                                        builder.with('address').setHidden(['id', 'client_id', 'address_id'])
                                    })
                                    .with('spouse', (builder) => {
                                        builder.with('children', (builder) => {
                                                builder.setHidden(['id', 'client_id'])
                                            })
                                            .with('communications', (builder) => {
                                                builder.setHidden(['id', 'client_id'])
                                            })
                                            .with('passport')
                                            .with('regAddress')
                                            .with('livingAddress')
                                            .with('jobs', (builder) => {
                                                builder.with('address').setHidden(['id', 'client_id', 'address_id'])
                                            })
                                            .setHidden([
                                                'spouse_id', 
                                                'passport_id',
                                                'living_address_id',
                                                'reg_address_id',
                                                    ])
                                            .whereNull('deleted_at')
                                    })
                                    .setHidden([
                                        'spouse_id', 
                                        'passport_id',
                                        'living_address_id',
                                        'reg_address_id',
                                            ])
                                    .whereNull('deleted_at')
                                    .paginate(page);
        return response.status(200).send(clients.toJSON());
    }

    async putNewClient({request, response}){
    }

    async deleteClient({params, response}){
        const id = params.clientId
        const client = await Client.findBy('id', id);
        if (!client) {
            return response
                .status(400)
                .send({ message: { error: 'Incorrect ID provided' } });
        }
        if (!client.deleted_at){
            client.deleted_at = new Date().toISOString();
            client.save();
            return response.status(200).send({ message: "OK! Deleted!"});
        } else {
            return response
                .status(400)
                .send({ message: { error: 'The client with this ID has already deleted.' } });
        }
    }

    async getClient({params, response}){
        const cl_id = params.clientId
        const client = await Client.query()
                                    .where({ id : cl_id })
                                    .with('children', (builder) => {
                                        builder.setHidden(['id', 'client_id'])
                                    })
                                    .with('communications', (builder) => {
                                        builder.setHidden(['id', 'client_id'])
                                    })
                                    .with('passport')
                                    .with('regAddress')
                                    .with('livingAddress')
                                    .with('jobs', (builder) => {
                                        builder.with('address').setHidden(['id', 'client_id', 'address_id'])
                                    })
                                    .with('spouse', (builder) => {
                                        builder.with('children', (builder) => {
                                                builder.setHidden(['id', 'client_id'])
                                            })
                                            .with('communications', (builder) => {
                                                builder.setHidden(['id', 'client_id'])
                                            })
                                            .with('passport')
                                            .with('regAddress')
                                            .with('livingAddress')
                                            .with('jobs', (builder) => {
                                                builder.with('address').setHidden(['id', 'client_id', 'address_id'])
                                            })
                                            .setHidden([
                                                'spouse_id', 
                                                'passport_id',
                                                'living_address_id',
                                                'reg_address_id',
                                                    ])
                                            .whereNull('deleted_at')
                                    })
                                    .setHidden([
                                        'spouse_id', 
                                        'passport_id',
                                        'living_address_id',
                                        'reg_address_id',
                                            ])
                                    .whereNull('deleted_at').fetch();
        if (client.rows.length < 1) {
            return response
                .status(400)
                .send({ message: { error: 'The client with this ID is not exists.' } });
        }
        return response.status(200).send(client.toJSON());
    }

    async updateClient({params, request, response}){
        
    }
}

module.exports = ClientController
