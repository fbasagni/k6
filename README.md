# 🌟 **Projeto K6 - Testes de Performance**

[![k6](https://img.shields.io/badge/k6-Performance%20Testing-blueviolet?style=flat&logo=k6)](https://k6.io)  
Este repositório foi criado para gerenciar scripts de testes de performance utilizando o [K6](https://k6.io), uma ferramenta poderosa e de código aberto, para garantir a confiabilidade, escalabilidade e eficiência de sistemas e APIs. 🚀

URL Dashboard gerado pós execução no Actions : https://fbasagni.github.io/k6/

---

## 📋 **Descrição**

O objetivo deste projeto é validar o desempenho de sistemas através de testes de carga, estresse e performance com a ferramenta K6. Os scripts aqui presentes foram configurados para simular múltiplos usuários e coletar métricas importantes, como tempo de resposta, taxa de erros e throughput.

---

## 🛠 **Tecnologias Utilizadas**

- **[K6](https://k6.io):** Ferramenta principal para criação e execução de testes de performance.
- **JavaScript:** Linguagem para desenvolvimento dos scripts K6.
- **Docker (Opcional):** Para execução dos testes em contêineres.
- **GitHub Actions:** Configuração para automação dos testes (opcional).

---
## 🚀 Como Usar


Pré-requisitos
Instale o K6.
(Opcional) Tenha o Docker instalado no sistema.
Passos para Execução


1. **Clone o repositório:**

   ```bash
      git clone https://github.com/fbasagni/k6.git
      cd k6



2. **Execute um script específico:**

   ```bash
      k6 run scripts/script1.js
      cd k6


3. **Gere relatórios de resultados (JSON ou HTML):**


   ```bash
      k6 run --out json=results/result1.json scripts/script1.js
      k6 run --out html=results/result1.html scripts/script1.js


---


## 📊 Exemplo de Saída

```bash
plaintext
Copiar código
running (10s), 0/10 VUs, 100 complete and 0 interrupted iterations
default ✓ [======================================] 10s
  ✓ Teste de endpoint respondeu com sucesso
  ✓ Tempo de resposta abaixo de 200ms

    checks.....................: 100.00% ✓ 100     ✗ 0
    data_received..............: 1.2 MB  120 kB/s
    http_req_duration..........: avg=150ms  min=100ms  max=200ms,


