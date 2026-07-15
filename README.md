# Neuralis X - Landing Page de Vendas de Alta Performance

Este é o repositório da página de vendas oficial para o **Neuralis X**, um wearable de elite construído com compósitos de grafeno. A página foi desenvolvida com foco em alta conversão, performance visual (Core Web Vitals - LCP) e acessibilidade.

---

## 🚀 Tecnologias Utilizadas

O projeto adota uma arquitetura limpa e sem necessidade de etapas de compilação complexas, permitindo carregamento instantâneo:

- **HTML5 Semântico**: Estruturação organizada e amigável para SEO (Search Engine Optimization).
- **Tailwind CSS (via CDN)**: Estilização rápida e responsiva, estendida com paleta de cores personalizada baseada em HSL e temas escuros premium.
- **Vanilla Javascript & ES Modules**: Lógica de comportamento moderna sem dependência de frameworks pesados.
- **Motion (framer-motion equivalente para Vanilla JS)**: Utilizado via CDN de forma nativa para animações fluidas (`inView` e `animate`) a 60 FPS.

---

## 📁 Estrutura do Projeto

```bash
├── .agents/                 # Customizações e regras do agente de desenvolvimento
├── css/
│   └── style.css            # Estilos personalizados, fontes e animações secundárias
├── js/
│   └── main.js              # Script comportamental principal (animações, efeito 3D parallax, sticky CTA)
├── index.html               # Estrutura principal da Landing Page
├── .env.example             # Modelo para variáveis de ambiente
├── .gitignore               # Regras de exclusão para o Git
└── README.md                # Documentação técnica do projeto (este arquivo)
```

---

## 💻 Como Rodar o Projeto Localmente

Por se tratar de uma aplicação front-end estática, existem duas formas de executá-la:

### Opção 1: Direto no Navegador (Simples)
Basta abrir o arquivo `index.html` diretamente em qualquer navegador moderno.

### Opção 2: Servidor Local (Recomendado)
Para carregar os módulos ES e evitar problemas de políticas CORS no navegador, execute um servidor local rápido utilizando `npx`:

```bash
# Executa um servidor HTTP local na pasta do projeto
npx serve .
```

Ou, caso use o VS Code, utilize a extensão **Live Server** para recarregamento em tempo real.

---

## 🛡️ Segurança e Boas Práticas

- **Segredos e Credenciais**: O código foi auditado e está livre de chaves de API ou segredos expostos diretamente.
- **Variáveis de Ambiente**: Caso precise integrar serviços como Pixels de Rastreamento (Meta/Google) ou Gateways de Pagamento, duplique o arquivo `.env.example`, renomeie para `.env` e preencha as chaves. O arquivo `.env` está devidamente listado no `.gitignore` e não será publicado.

---

## 🔗 Publicando no GitHub (Sincronização Remota)

Para conectar este repositório local ao repositório criado no GitHub e realizar o envio inicial de forma segura, siga os passos abaixo:

### Passo a Passo Manual no Terminal:

1. **Adicionar o endereço remoto**:
   ```bash
   git remote add origin https://github.com/professortoniati/atg2607-05-pagina-vendas.git
   ```

2. **Definir o branch principal como `main`**:
   ```bash
   git branch -M main
   ```

3. **Enviar o código para o GitHub**:
   ```bash
   git push -u origin main
   ```

> [!TIP]
> Também disponibilizamos um script automatizado na raiz do projeto chamado `setup-git-remote.ps1` que executa todas as etapas de configuração do repositório remoto para você de forma simples e rápida no Windows PowerShell.
