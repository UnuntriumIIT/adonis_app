'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  Route.get('/', 'ClientController.getAllClients')
  Route.put('/', 'ClientController.putNewClient')
  Route.delete('/:clientId/', 'ClientController.deleteClient')
  Route.get('/:clientId/', 'ClientController.getClient')
  Route.patch('/:clientId/', 'ClientController.updateClient')
}).prefix('api/v1/clients')

