const Pagamento = require('../models/pagamentoModel');

exports.listarPagamentos = async (req, res) => {
  try {
    const pagamentos = await Pagamento.find();
    res.json(pagamentos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.criarPagamento = async (req, res) => {
  const pagamento = new Pagamento({
    cliente: req.body.cliente,
    valor: req.body.valor,
  });

  try {
    const novoPagamento = await pagamento.save();
    res.status(201).json(novoPagamento);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
