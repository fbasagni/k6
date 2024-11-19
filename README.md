# 🌟 **Projeto K6 - Testes de Performance**

[![k6](https://img.shields.io/badge/k6-Performance%20Testing-blueviolet?style=flat&logo=k6)](https://k6.io)  
Um repositório para gerenciar scripts de testes de performance utilizando o [K6](https://k6.io), uma ferramenta poderosa e de código aberto. 🚀  

---

## 📋 **Descrição**

Este projeto contém scripts desenvolvidos com K6 para realizar testes de carga e performance. Ele permite validar a escalabilidade, confiabilidade e capacidade de serviços web, APIs ou sistemas sob condições de carga.

---

## 🛠 **Tecnologias Utilizadas**

- [K6](https://k6.io): Ferramenta para testes de performance.
- JavaScript: Linguagem para desenvolvimento dos scripts.
- GitHub Actions: Integração para automação de testes (opcional).
- Docker (opcional): Para execução dos testes em ambientes isolados.

---

## 📂 **Estrutura do Repositório**

```plaintext
k6/
├── scripts/
│   ├── script1.js        # Script para cenário de teste 1
│   ├── script2.js        # Script para cenário de teste 2
├── results/
│   ├── result1.json      # Resultados dos testes
│   ├── result2.html      # Relatório em HTML
├── Dockerfile            # Arquivo Docker para execução dos testes
├── config.json           # Configurações globais (opcional)
└── README.md             # Este arquivo
