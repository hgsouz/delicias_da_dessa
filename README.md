# 🧁 Delícias da Dessa

Vitrine online para uma confeitaria artesanal. O objetivo é que o cliente conheça os produtos, monte o carrinho e envie o pedido já formatado direto para o WhatsApp da confeiteira, sem cadastro, sem checkout e sem custo de plataforma.

> 🚧 **Em desenvolvimento.** Este repositório contém o front-end. As páginas e o layout estão prontos; carrinho, pedido pelo WhatsApp e integração com a API estão no [roadmap](#roadmap).

## Sobre o projeto

Projeto real, desenvolvido para uma confeitaria, do protótipo no Figma até o código. A ideia é dar ao negócio uma vitrine própria, simples de manter e gratuita de hospedar.

O sistema completo terá duas partes:

- **Front-end (este repositório):** a vitrine que o cliente usa.
- **API:** serve o catálogo de produtos e protege a área administrativa, onde a proprietária gerenciará o que está à venda.

## Tecnologias

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [ESLint](https://eslint.org/) com `typescript-eslint`
- Fonte [Inknut Antiqua](https://fonts.google.com/specimen/Inknut+Antiqua) (Google Fonts)

## Estrutura do projeto

```
src/
├── assets/        # logo, ícones e imagens (about, categories, hero, icons, products)
├── components/    # Header, Footer, FloatingMenu, Card, ProductCard, HeroHome, Input...
├── pages/         # Home, Produtos, Sobre nós e Contato
├── App.tsx
├── index.css
└── main.tsx
public/            # arquivos estáticos servidos na raiz
```

## Como executar localmente

**Pré-requisitos:** Node.js (versão LTS atual) e npm.

```bash
git clone https://github.com/hgsouz/delicias_da_dessa.git
cd delicias_da_dessa
npm install
npm run dev
```

O projeto ainda não usa variáveis de ambiente.

### Scripts

| Comando           | O que faz                                     |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Inicia o servidor de desenvolvimento          |
| `npm run build`   | Verifica os tipos e gera a versão de produção |
| `npm run preview` | Serve localmente a versão de produção         |
| `npm run lint`    | Executa o ESLint                              |

## Arquitetura planejada

```
Cliente (navegador)
   │
   ├── Front-end estático (este repositório)
   │       │
   │       │  GET /products
   │       ▼
   │   API (Fastify + Zod, hospedada no Render)
   │       │
   │       ▼
   │   Supabase Storage  →  products.json + imagens dos produtos
   │
   └── Pedido finalizado → link wa.me → WhatsApp da confeiteira
```

### Decisões de projeto

- **Sem banco de dados.** O catálogo é pequeno e muda pouco. Ele ficará em um único `products.json` no Supabase Storage, o que mantém o custo em zero e a manutenção simples.
- **WhatsApp por link, não por API.** O pedido usará o formato `https://wa.me/<número>?text=<mensagem>`: gratuito, sem aprovação de conta e sem backend no caminho do cliente.
- **Área administrativa protegida por JWT.** Apenas a proprietária poderá criar, editar e remover produtos.
- **Vitrine estática.** O front é servido como arquivos estáticos e só consulta a API para buscar o catálogo.

## Roadmap

- [x] Layout das páginas Home, Produtos, Sobre nós e Contato
- [x] Header, Footer e menu flutuante
- [ ] Roteamento entre as páginas
- [ ] Consumo do catálogo pela API, com estado de carregamento
- [ ] Carrinho de compras
- [ ] Finalização do pedido pelo WhatsApp com mensagem pronta
- [ ] Envio do formulário de contato
- [ ] Painel administrativo (login e CRUD de produtos)

## Autor e direitos de uso

Desenvolvido por [Hugo (@hgsouz)](https://github.com/hgsouz).

O código deste repositório é de autoria do desenvolvedor. A marca **Delícias da Dessa**, o logotipo, a foto e o texto da página "Sobre nós" pertencem à proprietária do negócio. As imagens de produtos deste repositório são ilustrativas.
