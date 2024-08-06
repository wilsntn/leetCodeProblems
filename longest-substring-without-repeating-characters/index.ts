function lengthOfLongestSubstring(s: string): number {
  let start = 0; // Início da janela deslizante
  let maxLength = 0; // Comprimento da maior substring encontrada
  let charIndexMap: { [key: string]: number } = {}; // Mapa para rastrear a última posição de cada caractere

  for (let end = 0; end < s.length; end++) {
      const currentChar = s[end];

      // Se o caractere atual já apareceu e está dentro da janela atual
      if (charIndexMap[currentChar] !== undefined && charIndexMap[currentChar] >= start) {
          // Move o início da janela para a posição seguinte ao último índice desse caractere
          start = charIndexMap[currentChar] + 1;
      }

      // Atualiza a última posição do caractere atual
      charIndexMap[currentChar] = end;

      // Calcula o comprimento da substring atual
      const currentLength = end - start + 1;

      // Atualiza o maxLength se encontrarmos uma substring maior
      maxLength = Math.max(maxLength, currentLength);
  }

  return maxLength;
}

// Teste
const testString = "abcabcbb";
console.log(lengthOfLongestSubstring(testString)); // Output: 3
