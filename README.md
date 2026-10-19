# 🧁 Delícias da Dessa

Vitrine online para uma confeitaria artesanal. O cliente conhece os produtos, monta o carrinho e envia o pedido já formatado direto para o WhatsApp da confeiteira, sem cadastro, sem checkout e sem custo de plataforma.

🔗 **Online:** https://deliciasdadessa.vercel.app _(endereço temporário, até a compra do domínio próprio)_

> **Status:** a vitrine do cliente está no ar e funcional. A área administrativa (login e gerenciamento de produtos) está em desenvolvimento. Veja o [roadmap](#roadmap).

## Sobre o projeto

Projeto real, feito para uma confeitaria, do protótipo no Figma ao deploy. A ideia é dar ao negócio uma vitrine própria, simples de manter e gratuita de hospedar.

O sistema tem duas partes:

- **Front-end (este repositório):** a vitrine que o cliente usa.
- **API (repositório separado):** protege a área administrativa, onde a proprietária gerenciará o que está à venda. Hospedada no Render.

## Funcionalidades

**Para o cliente**

- Catálogo de produtos com foto, descrição e preço
- Página de detalhe de cada produto, com descrição completa
- Variações por produto (ex.: pacote com 25 biscoitinhos, caixa de 5 bombons), cada uma com seu preço
- Seletor de quantidade
- Carrinho de compras que permanece salvo ao fechar a página (`localStorage`)
- Itens que saíram do catálogo são descartados do carrinho automaticamente
- Finalização do pedido pelo WhatsApp, com mensagem pronta contendo itens, quantidades e total
- Páginas "Sobre nós" e "Contato"
- Estados de carregamento e de erro nas telas que consultam o catálogo
- Carregamento sob demanda das páginas (code splitting)

**Para a proprietária (em desenvolvimento)**

- Login protegido por JWT
- Dashboard para criar, editar e pausar produtos
- Troca das imagens dos produtos
- Configurações do site (imagens da home)

## Tecnologias

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [ESLint](https://eslint.org/) com `typescript-eslint`
- Fonte [Inknut Antiqua](https://fonts.google.com/specimen/Inknut+Antiqua) (Google Fonts)
- [Supabase Storage](https://supabase.com/storage) para o catálogo e as imagens
- Deploy na [Vercel](https://vercel.com/)

## Técnicas e decisões de projeto

- **Sem banco de dados.** O catálogo é pequeno e muda pouco, então fica em um único `products.json` no Supabase Storage. Isso mantém o custo em zero e a manutenção simples.
- **Modelo de produto com variações.** Um produto tem uma lista `variants[]` (id, label, preço) e uma unidade. Pacotes viram quantidade no carrinho, em vez de itens repetidos no catálogo.
- **Carrinho com `useReducer` + Context API.** As ações (`add`, `setQuantity`, `remove`, `clear`) ficam em um reducer. O carrinho guarda só `productId`, `variantId` e `quantity`; preço e nome são resolvidos a partir do catálogo, então nada fica desatualizado.
- **Leitura defensiva do `localStorage`.** JSON quebrado, dado antigo ou modo privado não derrubam a aplicação.
- **WhatsApp por link, não por API.** O pedido usa o formato `https://wa.me/<número>?text=<mensagem>`: gratuito, sem aprovação de conta e sem backend no caminho do cliente.
- **Rotas carregadas com `lazy` + `Suspense`**, reduzindo o bundle inicial.
- **Proteção contra atualização de estado após desmontar** nos efeitos que buscam dados (flag `cancelled` com cleanup).
- **Tipagem estrita** (`ProductVariant` com pelo menos uma variação garantida pelo tipo).
- **Vitrine estática.** O front é servido como arquivos estáticos; as rotas são reescritas para `index.html` via `vercel.json`.

## Arquitetura

```
Cliente (navegador)
   │
   ├── Front-end estático (este repositório, na Vercel)
   │       │
   │       │  GET products.json
   │       ▼
   │   Supabase Storage  →  products.json + imagens dos produtos
   │
   └── Pedido finalizado → link wa.me → WhatsApp da confeiteira

Área administrativa (em desenvolvimento)
   Front-end ──► API (Render) ──► Supabase Storage
                  └─ login com JWT; CRUD de produtos e imagens
```

## Estrutura do projeto

```
src/
├── assets/        # logo, ícones e imagens (about, categories, hero, icons)
├── components/    # Header, Footer, FloatingMenu, ProductCard, QuantitySelector...
│   └── admin/     # componentes da área administrativa (em desenvolvimento)
├── context/       # CartProvider, CartContext e hook useCart
├── pages/         # Home, Produtos, Detalhe, Carrinho, Sobre nós e Contato
│   └── admin/     # login, dashboard e configurações do site (em desenvolvimento)
├── services/      # acesso ao catálogo (products.ts)
├── types/         # tipos do carrinho
├── utils/         # formatação de moeda e geração do link do WhatsApp
├── App.tsx
├── index.css
└── main.tsx
public/            # arquivos estáticos servidos na raiz
```

## Roadmap

- [x] Layout das páginas Home, Produtos, Sobre nós e Contato
- [x] Header, Footer e menu flutuante
- [x] Roteamento entre as páginas
- [x] Consumo do catálogo, com estados de carregamento e erro
- [x] Página de detalhe do produto, com variações e quantidade
- [x] Carrinho de compras persistente
- [x] Finalização do pedido pelo WhatsApp com mensagem pronta
- [x] Deploy na Vercel
- [ ] Envio do formulário de contato
- [ ] Painel administrativo: login (JWT), CRUD de produtos e configurações do site

## Autor e direitos de uso

Desenvolvido por **Hugo Souza** ([@hgsouz](https://github.com/hgsouz)).

O código deste repositório é de autoria do desenvolvedor. A marca **Delícias da Dessa**, o logotipo, a foto e o texto da página "Sobre nós" pertencem à proprietária do negócio.
