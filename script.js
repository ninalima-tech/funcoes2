
const calcularGorjeta = () => {
    const valorConta = parseFloat(document.getElementById('valorConta').value);
    const qualidade = document.getElementById('qualidade').value;
    const calcularGorjetaPorQualidade = (qualidade) => {
        switch (qualidade) {
            case 'bom':
                return valorConta * 0.2; 
            case 'regular':
                return valorConta * 0.15;
            case 'ruim':
                return valorConta * 0.1; 
            default:
                return 0;
        }
    };

    const gorjeta = calcularGorjetaPorQualidade(qualidade);
    const valorTotal = valorConta + gorjeta;

    document.getElementById('resultado').textContent = `Gorjeta: R$ ${gorjeta.toFixed(2)} | Valor Total: R$ ${valorTotal.toFixed(2)}`;
};