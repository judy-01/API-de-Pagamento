const mongoose = require('mongoose');

const pagamentoSchema = new mongoose.Schema({
  cliente: String,
  valor: Number,
  status: { type: String, default: 'Pendente' },
  data: { type: Date, default: Date.now },
});

const Pagamento = mongoose.model('Pagamento', pagamentoSchema);

module.exports = Pagamento;
