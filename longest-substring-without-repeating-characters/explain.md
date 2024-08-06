Passo 1: Inicializar Variáveis
Vamos começar inicializando as variáveis necessárias:

start: indica o início da janela deslizante.
maxLength: armazena o comprimento da substring mais longa encontrada.
charIndexMap: um mapa para rastrear a última posição de cada caractere.
Passo 2: Percorrer a String
Vamos percorrer a string com um laço, expandindo a janela deslizante e atualizando as variáveis conforme encontramos caracteres repetidos.

Passo 3: Atualizar a Janela Deslizante
Se encontrarmos um caractere repetido dentro da janela atual, movemos o início da janela (start) para a posição seguinte ao último índice desse caractere.

Passo 4: Calcular o Comprimento da Substring
A cada passo, calculamos o comprimento da substring atual e atualizamos maxLength se encontrarmos uma substring maior.