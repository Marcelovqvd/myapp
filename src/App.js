const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

function App() {
  const dados = luana;

  const showCompra = dados.compras
    .map(compra => (
      Number(compra.preco.replace("R$", ""))
    )).reduce((a, b) => a + b);
  
  return (
    <div className="App">
      <h1>My app</h1>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>Situação: <span style={{color: dados.ativa ? 'blue' : 'red'}}>{dados.ativa ? 'Ativa' : 'Inativa'}</span></p>
      <p>Total gasto: R$ {showCompra}</p>
      {showCompra > 10000 && <p>Gastando muito</p>}
    </div>
  );
}

export default App;
