// consultar o preco
let produtos = [
    {
        "nome": "banana",
        "preco": "R$ 4,90Kg",
        "codigo": "#001"
    },
    {
        "nome": "mamao",
        "preco": "R$ 8,90Kg",
        "codigo": "#002"
    },
    {
        "nome": "pessego",
        "preco": "R$ 6,90Kg",
        "codigo": "#003"
    },
    {
        "nome": "morango",
        "preco": "R$ 10,90Kg",
        "codigo": "#004"
    },
    {
        "nome": "abacate",
        "preco": "R$ 12,90Kg",
        "codigo": "#005"
    }
]


function consultar() {
    let input = document.getElementById('informe').value.toLocaleLowerCase()
    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].nome.toLocaleLowerCase() === input || produtos[i].codigo === input) {
            alert(produtos[i].preco)
        }
    }
}

// comprar 

let carrinho = []

function comprar() {
    let input = document.getElementById('informe').value.toLocaleLowerCase()
    let itensNoCarrinho = document.getElementById('itensNoCarrinho')
    let achouProduto = null

    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].nome === input || produtos[i].codigo === input) {
            achouProduto = produtos[i]
        }
    }

    if (achouProduto) {
        carrinho.push({
            nome: achouProduto.nome,
            preco: achouProduto.preco
        })

        localStorage.setItem('carrinho', JSON.stringify(carrinho))
    }

    else {
        alert('Produto nao encontrado')
    }

    itensNoCarrinho.innerText = `Itens no carrinho ${carrinho.length}`
}

// Limpar o carrinho

function limparCarrinho() {
    localStorage.removeItem('carrinho')

    if (limparCarrinho) {
        itensNoCarrinho.innerText = ""
        valorTotal.innerText = ""
    }
}

// Consultar valor do carrinho


function consultarValor() {
    let soma = 0
    let valorTotal = document.getElementById('valorTotal')
    for (let i = 0; i < carrinho.length; i++) {
        if (carrinho !== "") {
            soma += parseFloat(carrinho[i].preco.replace('R$ ', '').replace('Kg', '').replace(',', '.'));
        }
    }

    valorTotal.innerText = `O total do seu carrinho é R$${soma.toFixed(2)}`
}

