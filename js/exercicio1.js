/*


Desenvolva um sistema de compra onde o usuario digitará:

- Nome do produto
- Quantidade que comprou
- Valor de uma unidade
- Nome do cliente

Seu programa deverá calcular o total da compra e imprimir as informações da compra:

Exemplo de saída
#########################

Nome do cliente: xxxxxx
Produto: xxxxx
Valor Unitário: xxxxx
Total da compra: xxxxx
Total de imposto: 20%

#########################
Obrigado e volte sempre

Imposto sobre total da compra
Calcule um imposto de 20% sobre o total da compra

Fórmula = totalCompra + totalCompra * 0.2


*/


    const imposto = 0.2;

    const campos = [
        'Nome do cliente: ',
        'Produto: ', 
        'Valor Unitário: ', 
        'Total da compra: ',
    ]

    const mensagens = [
        'Digite o nome do cliente',
        'Digite o nome do produto',
        'Digite a quantidade',
        'Digite o valor do produto'
    ];

    for(let i = 0; i < mensagens.length; i++) {
        let dados = prompt(mensagens[i])

        if (i == 3) {
            dados
        }

        console.log (`${campos[i]} ${dados}`)
    }

    var nomeProduto = prompt('Digite o nome do produto')  
    var quantidade = prompt('Digite a quantidade')
    var valorUnitario = prompt('Digite a valor por unidade')     
    var nomeCliente = prompt('Digite o nome do cliente')
    var totalCompra = valorUnitario * quantidade
    var totalImposto = totalCompra * 0.2
    

        console.log("Nome do cliente: " + nomeCliente)
        console.log("Produto: " + nomeProduto)
        console.log("Valor Unitário: " + valorUnitario)
        console.log("Total da compra: " + totalCompra + totalCompra * 0.2)
        console.log("Total de imposto: " + totalImposto)
        console.log("Obrigado e volte sempre")  


