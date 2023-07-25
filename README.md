Galeria de Imagens com Javascript
=================================

Este é um projeto de galeria de imagens com funcionalidades avançadas, desenvolvido utilizando Javascript, HTML e CSS. A galeria utiliza a API do Pexels, que oferece uma vasta coleção de fotos de alta qualidade para uso pessoal e comercial.

Funcionalidades
---------------

1.  Pesquisa de Imagens: Os usuários podem pesquisar imagens digitando palavras-chave na caixa de pesquisa. A galeria exibe automaticamente as imagens relacionadas à pesquisa à medida que o usuário digita.

2.  Exibição em Lightbox: Ao clicar em uma imagem da galeria, uma lightbox é exibida, permitindo que os usuários vejam a imagem em tamanho maior com o nome do fotógrafo. Na lightbox, é possível baixar a imagem clicando no botão correspondente.

3.  Carregamento de Mais Imagens: A galeria carrega inicialmente um conjunto de imagens selecionadas (curated). Ao chegar ao final da galeria, os usuários podem carregar mais imagens clicando no botão "Carregar mais", proporcionando uma visualização contínua de diversas imagens.

4.  Responsividade: O layout da galeria é responsivo, adaptando-se automaticamente a diferentes tamanhos de tela e dispositivos, proporcionando uma experiência de usuário agradável em qualquer dispositivo.

Recursos Técnicos
-----------------

-   Utiliza a biblioteca Unicons para os ícones e a fonte Inter do Google Fonts para garantir uma experiência visual atraente e coesa.

-   A interação com a API do Pexels é realizada através de chamadas assíncronas usando a função `fetch()`.

-   O código Javascript é responsável por interagir com a API, buscar e carregar as imagens, além de criar os elementos HTML para exibição das imagens na galeria.

-   As funções principais incluem `downloadImg()`, `showLightbox()`, `hideLightbox()`, `generateHTML()` e `getImages()`.

-   Os eventos de clique do botão de carregar mais, da caixa de pesquisa e dos botões de download são tratados com funções de callback nomeadas.

Como Utilizar
-------------

1.  Clone ou baixe o repositório para o seu computador.

2.  Abra o arquivo `index.html` em seu navegador.

3.  Utilize a caixa de pesquisa para procurar imagens com palavras-chave relevantes.

4.  Clique nas imagens da galeria para visualizá-las em uma lightbox, onde você pode baixar a imagem.

API do Pexels
-------------

Este projeto utiliza a API do Pexels para obter as imagens exibidas na galeria. Para utilizar a API, é necessário obter uma chave de API válida do Pexels. Você pode acessar a documentação da API e solicitar sua chave em <https://www.pexels.com/pt-br/api/>.

Licença
-------

Este projeto é distribuído sob a Licença MIT. Sinta-se livre para usá-lo e modificá-lo conforme suas necessidades. Verifique o arquivo `LICENSE` para obter mais detalhes.


Observações
-----------

-   Certifique-se de obter uma chave de API válida do Pexels para garantir o funcionamento correto do projeto e evitar problemas de acesso à API.

-   O projeto foi desenvolvido com as melhores práticas de programação, seguindo padrões modernos e técnicas para fornecer uma experiência de usuário suave e agradável. No entanto, é recomendado que você faça as devidas modificações para adaptá-lo às necessidades específicas do seu próprio projeto.