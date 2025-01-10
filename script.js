function calcularImpostos(valor, porcentagens) {
    const impostos = {};
    for (const [nome, porcentagem] of Object.entries(porcentagens)) {
        impostos[nome] = (valor * porcentagem / 100).toFixed(2);
    }
    return impostos;
}

function gerarNotaFiscal() {
    const valorVenda = parseFloat(document.getElementById('valorVenda').value);
    const itens = document.getElementById('itens').value;
    const porcentagens = {
        IRPF: parseFloat(document.getElementById('irpf').value),
        PIS: parseFloat(document.getElementById('pis').value),
        COFINS: parseFloat(document.getElementById('cofins').value),
        INSS: parseFloat(document.getElementById('inss').value),
        ISSQN: parseFloat(document.getElementById('issqn').value),
    };

    const impostos = calcularImpostos(valorVenda, porcentagens);

    let totalImpostos = 0;
    for (const valor of Object.values(impostos)) {
        totalImpostos += parseFloat(valor);
    }

    const notaFiscalDiv = document.getElementById('notaFiscal');
    notaFiscalDiv.style.display = 'block';
    notaFiscalDiv.innerHTML = `
        <h3>Nota Fiscal de Serviço</h3>
        <p><strong>Valor da Venda:</strong> R$ ${valorVenda.toFixed(2)}</p>
        <p><strong>Itens Vendidos:</strong> ${itens}</p>
        <h4>Impostos:</h4>
        <ul>
            ${Object.entries(impostos).map(([nome, valor]) => `<li>${nome}: R$ ${valor}</li>`).join('')}
        </ul>
        <p><strong>Total de Impostos:</strong> R$ ${totalImpostos.toFixed(2)}</p>
        <p><strong>Valor Líquido:</strong> R$ ${(valorVenda - totalImpostos).toFixed(2)}</p>
    `;
}
