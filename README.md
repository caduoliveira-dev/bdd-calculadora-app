## Instalação

Instale as dependências do projeto:

```bash
npm install
```

## Executando os Testes

Para executar todos os testes BDD:

```bash
npm test
```

Para executar os testes utilizando a interface gráfica:
1. Certifique que você tenha o chormium instalado
2. Altere a linha 10 do arquivo "calculadora_steps.js" -> headless: false

  browser = await chromium.launch({ headless: true });

## Cenários de Teste Implementados

Os seguintes cenários estão implementados em Gherkin:

1. **Operação de Soma**: Testa a adição de dois números
2. **Operação de Subtração**: Testa a subtração de dois números
3. **Operação de Multiplicação**: Testa a multiplicação de dois números
4. **Operação de Divisão**: Testa a divisão de dois números
5. **Divisão por Zero**: Testa o comportamento ao dividir por zero
6. **Limpar Display**: Testa a funcionalidade de limpar o display
7. **Botão de Voltar**: Testa a funcionalidade de backspace
8. **Números Decimais**: Testa operações com números decimais
9. **Operação Composta**: Testa múltiplas operações em sequência

## Formato dos Testes (Gherkin)

Os testes são escritos em Gherkin, seguindo o padrão Given-When-Then:

```gherkin
Cenário: Realizar operação de soma simples
  Dado que o usuário acessa a calculadora
  Quando o usuário digita "5"
  E o usuário clica no botão de operação "+"
  E o usuário digita "3"
  E o usuário clica no botão de igual "="
  Então o resultado exibido deve ser "8"
```
