# 🛒 Product CRUD

Um projeto simples de CRUD (Create, Read, Update, Delete) de produtos, feito com HTML, CSS e JavaScript puro. Ideal para aprender manipulação de DOM, formulários e organização de dados no front-end.

## 📸 Preview

![screenshot]

## 🚀 Funcionalidades

- ✅ Adicionar produto (nome, descrição e preço)
- ✅ Listar produtos
- ✅ Atualizar informações de um produto
- ✅ Remover produto da lista
- ✅ Estilização moderna com formulário e lista centralizados

## 🧠 Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)

## 📂 Estrutura do projeto


/
├── index.html          # Estrutura da página
├── style.css           # Estilos da aplicação
├── app.js              # Lógica do CRUD com JS
└── README.md           # Documentação do projeto
▶️ Como usar
Clone o repositório ou baixe os arquivos.

Abra o arquivo index.html em seu navegador.

Use o formulário para adicionar produtos.

Edite ou remova produtos conforme necessário.

✍️ Personalização
Você pode adaptar para salvar os dados em localStorage, Firebase ou uma API real.

Pode também melhorar a UI com bibliotecas como Bootstrap ou Tailwind.

---

# Deploy Frontend na AWS EC2 com Apache

Este guia descreve o passo a passo para subir o projeto frontend [supabaseFRONT](https://github.com/bebetofreitass/supabaseFRONT) em uma instância EC2 na AWS, utilizando Apache como servidor web.

---

## Pré-requisitos

- Conta na AWS
- Par de chaves (.pem) para acesso SSH
- Projeto frontend no GitHub
- Perfil IAM já criado 

---

## 1. Criar Instância EC2

- Tipo: Ubuntu Server (por exemplo, Ubuntu 22.04)
- Tipo de instância: t2.micro (gratuito no free tier)
- Selecionar par de chaves existente
- Associar um IAM Role (opcional)
- Criar um grupo de segurança com:
  - Porta **22** liberada (SSH)
  - Porta **80** liberada (HTTP)
  - **Porta 3000** liberada 

---

## 2. Acessar a Instância via SSH

### No terminal:

```bash
Abrir bash na pasta da key
chmod 400 key01-front.pem
ssh -i "key01-front.pem" ubuntu@<IP-PÚBLICO-DA-EC2>


3. Instalar Apache e Git

sudo apt update
sudo apt install apache2 git -y

4. Clonar e Configurar Projeto Frontend

cd /var/www/html
sudo rm index.html
sudo git clone https://github.com/bebetofreitass/supabaseFRONT.git
sudo cp -r supabaseFRONT/* .
sudo rm -rf supabaseFRONT
sudo chown -R www-data:www-data /var/www/html

5. Editar o app.js
Substitua URLs ou endpoints da API:
sudo nano /var/www/html/app.js

Salve com CTRL + O, pressione Enter e saia com CTRL + X.

6. Acessar o Site
Abra seu navegador e acesse:
http://<IP-PÚBLICO-DA-EC2>

---
