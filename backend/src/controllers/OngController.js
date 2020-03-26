const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    
    async index(request, response) {
        const ongs = await connection('ongs').select('*');

        return response.json(ongs);
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX'); //id que a ong ira utilizar na aplicacao

        await connection('ongs').insert({ //await aguarda as outras iterações serem realizadas, uma função assincrona
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
    
        return response.json({ id });
    }
};