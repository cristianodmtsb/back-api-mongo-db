const express = require('express')

module.exports = function(server) {

    // Define URL base das rotas da api
    const router = express.Router()
    server.use('/api', router)

    // Rotas de Ciclo de pagamento
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')

}