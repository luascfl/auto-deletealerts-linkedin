# Exclusor de Alertas do LinkedIn
Este script automatiza o processo de exclusão de notificações de alertas de emprego no LinkedIn. Ele foi projetado para ser injetado no console do navegador.

## Recursos Principais
* Clica automaticamente no processo de exclusão de alertas de emprego no LinkedIn.
* Usa um mecanismo de espera robusto para lidar com o carregamento dinâmico da página.
* Fornece registros no console para acompanhar o progresso e identificar possíveis problemas.

## Tecnologias Utilizadas
* JavaScript

## Pré-requisitos
* Um navegador web (Chrome, Firefox, etc.) com as ferramentas de desenvolvedor habilitadas.
* Acesso a uma conta do LinkedIn com alertas de emprego para excluir.

## Instalação
1. **Copie o script:** Copie todo o conteúdo de `Apagar todos os alertas LinkedIn.js` da base de código fornecida.
2. **Abra o LinkedIn:** Navegue até o seu perfil no LinkedIn no navegador. Vá para a [seção de alertas de emprego](https://www.linkedin.com/jobs/jam/).
3. **Abra as Ferramentas de Desenvolvimento:** Abra as ferramentas de desenvolvimento do navegador (geralmente pressionando F12).
4. **Acesse o Console:** Vá para a aba "Console".
5. **Cole e Execute:** Cole o código JavaScript copiado no console e pressione Enter.

## Uso
O script começará automaticamente a excluir seus alertas de emprego. Ele tentará clicar no botão "Editar", depois no botão "Excluir" e, finalmente, confirmará a exclusão. Cada etapa é registrada no console.

## Estrutura do Projeto
O projeto consiste em um único arquivo JavaScript:
* `Apagar todos os alertas LinkedIn.js`: Contém o script principal para excluir alertas de emprego no LinkedIn.
* `LICENSE`: Contém a Licença MIT para o projeto.

## Configuração
Não é necessária nenhuma configuração para este script.

## Tratamento de Erros e Solução de Problemas
O script usa as funções `waitForElement` e `isClickable` para lidar com o carregamento dinâmico da página e garantir que os elementos estejam prontos antes de interagir com eles. No entanto, alguns erros ainda podem ocorrer. Aqui estão algumas mensagens de erro potenciais e etapas de solução de problemas:

* **`console.log("Botão Editar não está clicável.")` ou mensagens semelhantes:** Isso indica que o script não conseguiu encontrar ou interagir com o botão relevante na página. Isso pode ser devido a mudanças no layout do site do LinkedIn. Tente atualizar a página e executar o script novamente. Se o problema persistir, inspecione o código-fonte da página para verificar se os seletores corretos estão sendo usados.
* **O script para inesperadamente:** O LinkedIn pode ter medidas anti-automação em vigor. Se isso acontecer, tente executar o script novamente após uma breve pausa.

## Licença
Este projeto está licenciado sob a Licença MIT - consulte o arquivo [LICENSE](LICENSE) para obter detalhes.