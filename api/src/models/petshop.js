const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PetshopSchema = new Schema({
    nome: String,
    logo: String,
    categoria: String,
    destaques: Number,
    location: Object,
    recipient_id: String,
  });


module.exports = mongoose.model('Petshop', PetshopSchema);
