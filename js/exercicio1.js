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

#########################
Obrigado e volte sempre


*/

<script>

    var nomeCliente = prompt('Digite o nome do cliente')

        console.log("Nome do cliente: " + nomeCliente)

    var nomeProduto = prompt('Digite o nome do produto');

        console.log("Produto: " + nomeProduto)

    var valorUnitario = prompt('Digite a valor por unidade')

        console.log("Valor Unitário: " + valorUnitario)

    var quantidade = prompt('Digite a quantidade')

        console.log("Total da compra: " + quantidade * valorUnitario)

        console.log("Obrigado e volte sempre")


</script>