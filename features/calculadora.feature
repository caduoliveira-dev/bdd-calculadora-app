# language: pt
Funcionalidade: Calculadora
  Como um usuário
  Eu quero realizar operações matemáticas básicas
  Para obter resultados corretos

  Cenário: Realizar operação de soma simples
    Dado que o usuário acessa a calculadora
    Quando o usuário digita "5"
    E o usuário clica no botão de operação "+"
    E o usuário digita "3"
    E o usuário clica no botão de igual
    Então o resultado exibido deve ser "8"

  Cenário: Realizar operação de subtração simples
    Dado que o usuário acessa a calculadora
    Quando o usuário digita "10"
    E o usuário clica no botão de operação "-"
    E o usuário digita "4"
    E o usuário clica no botão de igual
    Então o resultado exibido deve ser "6"

  Cenário: Realizar operação de multiplicação simples
    Dado que o usuário acessa a calculadora
    Quando o usuário digita "7"
    E o usuário clica no botão de operação "*"
    E o usuário digita "6"
    E o usuário clica no botão de igual
    Então o resultado exibido deve ser "42"

  Cenário: Realizar operação de divisão simples
    Dado que o usuário acessa a calculadora
    Quando o usuário digita "20"
    E o usuário clica no botão de operação "/"
    E o usuário digita "4"
    E o usuário clica no botão de igual
    Então o resultado exibido deve ser "5"

  Cenário: Realizar operação de divisão por zero
    Dado que o usuário acessa a calculadora
    Quando o usuário digita "10"
    E o usuário clica no botão de operação "/"
    E o usuário digita "0"
    E o usuário clica no botão de igual
    Então o resultado exibido deve ser "Infinity"

  Cenário: Limpar o display da calculadora
    Dado que o usuário acessa a calculadora
    Quando o usuário digita "123"
    E o usuário clica no botão de limpar
    Então o display deve estar vazio

  Cenário: Usar botão de voltar (backspace)
    Dado que o usuário acessa a calculadora
    Quando o usuário digita "123"
    E o usuário clica no botão de voltar
    Então o display deve exibir "12"

  Cenário: Realizar operação com números decimais
    Dado que o usuário acessa a calculadora
    Quando o usuário digita "3.5"
    E o usuário clica no botão de operação "+"
    E o usuário digita "2.5"
    E o usuário clica no botão de igual
    Então o resultado exibido deve ser "6"

  Cenário: Realizar operação composta (múltiplas operações)
    Dado que o usuário acessa a calculadora
    Quando o usuário digita "10"
    E o usuário clica no botão de operação "+"
    E o usuário digita "5"
    E o usuário clica no botão de operação "*"
    E o usuário digita "2"
    E o usuário clica no botão de igual
    Então o resultado exibido deve ser "20"

