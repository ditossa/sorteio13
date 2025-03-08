document.getElementById('gerarSorteio').addEventListener('click', function() {
    const numSorteios = parseInt(document.getElementById('numSorteios').value);
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = ''; // Limpa resultados anteriores

    if (numSorteios < 1 || numSorteios > 1000 || isNaN(numSorteios)) {
        alert('Por favor, insira um número válido entre 1 e 1000.');
        return;
    }

    for (let i = 0; i < numSorteios; i++) {
        const numeroSorteado = Math.floor(Math.random() * 1000) + 1;
        const resultado = document.createElement('p');
        resultado.textContent = `Sorteio ${i + 1}: ${numeroSorteado}`;
        resultadosDiv.appendChild(resultado);
    }
});

document.getElementById('salvarSorteios').addEventListener('click', function() {
    const resultados = document.querySelectorAll('#resultados p');
    if (resultados.length === 0) {
        alert('Nenhum sorteio foi gerado ainda.');
        return;
    }

    let conteudo = '';
    resultados.forEach(resultado => {
        conteudo += resultado.textContent + '\n';
    });

    const blob = new Blob([conteudo], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sorteios.txt';
    a.click();
    URL.revokeObjectURL(url);
});