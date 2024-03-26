function consultar() {
    const produto = document.getElementById('informe').value.toLocaleLowerCase()
    switch (produto) {
        case "banana":
        case "#001":
            document.getElementById('preco').innerText = 'O valor do produto é R$ 4,90Kg'
            return;

        case "mamao":
        case "#002":
            document.getElementById('preco').innerText = 'O valor do produto é R$ 7,99Kg'
            return;
        
        case "morango":
        case "#003":
            document.getElementById('preco').innerText = 'O valor do produto é R$ 12,50Kg'
            return;
        
        case "abacate":
        case "#003":
            document.getElementById('preco').innerText = 'O valor do produto é R$ 14,99Kg'
            return;
        
    }
}
