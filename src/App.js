const App = () => {
  const calcularSoma = () => {
    let indice = 13;
    let soma = 0;
    let k = 0;
    while (k < indice) {
      k += 1;
      soma += k;
    }
    return soma;
  };

  const pertenceFibonacci = (num) => {
    let a = 0,
      b = 1;
    while (b < num) {
      [a, b] = [b, a + b];
    }
    return b === num || num === 0;
  };

  const calcularFaturamento = (dados) => {
    const valores = dados.map((d) => d.valor).filter((v) => v > 0);
    const menor = Math.min(...valores);
    const maior = Math.max(...valores);
    const media = valores.reduce((acc, v) => acc + v, 0) / valores.length;
    const diasAcimaMedia = valores.filter((v) => v > media).length;
    return { menor, maior, diasAcimaMedia };
  };

  const calcularPercentuais = (faturamento) => {
    const total = Object.values(faturamento).reduce((acc, v) => acc + v, 0);
    return Object.fromEntries(
      Object.entries(faturamento).map(([estado, valor]) => [
        estado,
        (valor / total) * 100,
      ])
    );
  };

  const inverterString = (texto) => {
    let invertido = "";
    for (let i = texto.length - 1; i >= 0; i--) {
      invertido += texto[i];
    }
    return invertido;
  };

  const faturamentoMensal = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
  };

  const percentuais = calcularPercentuais(faturamentoMensal);

  const dadosFaturamento = [
    { dia: 1, valor: 1000 },
    { dia: 2, valor: 2000 },
    { dia: 3, valor: 0 },
    { dia: 4, valor: 4000 },
    { dia: 5, valor: 500 },
  ];

  const { menor, maior, diasAcimaMedia } =
    calcularFaturamento(dadosFaturamento);

  return (
    <div>
      <h2> 1 - Soma: {calcularSoma()}</h2>
      <h2> 2 - Fibonacci: {pertenceFibonacci(21) ? "Sim" : "Não"}</h2>
      <h2> 3 - Faturamento Diário:</h2>
      <p>Menor valor: R$ {menor.toFixed(2)}</p>
      <p>Maior valor: R$ {maior.toFixed(2)}</p>
      <p>Dias acima da média: {diasAcimaMedia}</p>
      <h2> 5 - Inversão: {inverterString("sametsiS tegraT")}</h2>
      <h2> 4 - Faturamento Percentual:</h2>
      <ul>
        {Object.entries(percentuais).map(([estado, percentual]) => (
          <li key={estado}>
            {estado}: {percentual.toFixed(2)}%
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
