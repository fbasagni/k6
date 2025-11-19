# Testes de Performance com K6

Este repositório apresenta scripts de testes de performance utilizando a ferramenta K6. O objetivo é demonstrar como estruturo cenários de carga e estresse, coletando métricas essenciais para avaliar o comportamento de sistemas e APIs sob diferentes níveis de uso.

Os testes permitem identificar gargalos, acompanhar a estabilidade do sistema e apoiar decisões técnicas baseadas em dados.

Dashboard público gerado a partir das execuções:
https://fbasagni.github.io/k6/

---

## 1. Descrição do Projeto

O projeto reúne exemplos de testes escritos em JavaScript para execução no K6. Os arquivos mostram como criar cenários simples e escaláveis para:

- Validar tempos de resposta.  
- Medir throughput e taxa de erros.  
- Simular múltiplos usuários simultâneos.  
- Gerar relatórios em HTML ou JSON.  
- Automatizar execuções via pipeline.

A estrutura segue um padrão organizado, facilitando a leitura, a manutenção e a evolução dos testes.

---

## 2. Tecnologias Utilizadas

- K6  
- JavaScript  
- Docker (execução opcional)  
- GitHub Actions (execuções automatizadas)  

---

## 3. Estrutura do Projeto

```plaintext
k6/
 ├── scripts/              Scripts de teste em JavaScript
 ├── tests/                Cenários adicionais
 ├── tests_web/            Testes voltados a endpoints específicos
 ├── report/               Relatórios gerados (HTML e JSON)
 ├── .github/workflows/    Pipeline para execução automática
 ├── buildspec.yml         Arquivo para uso em CI/CD
 └── README.md
```
---

## 4. Como Executar

Pré-requisitos 
 - K6 instalado
 - Docker instalado (opcional)


Passos

   1. Clone o repositório:
        
```plaintext
git clone https://github.com/fbasagni/k6.git
cd k6

```

   2. Execute um script:

   ```plaintext
k6 run scripts/script1.js

```

   3. Gere relatórios (Relatório JSON / Relatório HTML):
   
   ```plaintext

JSON 

k6 run --out json=results/result.json scripts/script1.js

HTML 

k6 run --out html=results/result.html scripts/script1.js

```
   
Os arquivos podem ser abertos diretamente no navegador.


## 5. Exemplo de Saída
   
   ```plaintext

running (10s), 0/10 VUs, 100 complete and 0 interrupted iterations

checks...................... 100% ✓
http_req_duration.......... avg=195ms min=180ms max=200ms
data_received.............. 1.2 MB

```

## 6. Considerações Finais

O projeto demonstra uma abordagem prática para criação e execução de testes de performance. A estrutura foi organizada para facilitar a compreensão do fluxo de testes, a análise das métricas e a integração com pipelines.

Este repositório pode servir como base para estudos, entrevistas técnicas, validação de sistemas ou projetos maiores de performance que envolvam cenários mais complexos.
