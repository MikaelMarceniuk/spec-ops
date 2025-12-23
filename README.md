# SpecOps

**SpecOps** é um sistema web para **planejamento, execução e acompanhamento de operações complexas**, onde tempo, responsabilidade e dependência entre tarefas são críticos.

Ele foi projetado para substituir planilhas, mensagens soltas e controles informais usados em operações como:

- eventos
- projetos com data fixa
- operações internas críticas
- coordenação logística ou técnica

---

## 📌 Em termos simples (para quem não é técnico)

Imagine que você precisa organizar algo importante — por exemplo:

- um evento
- um treinamento
- uma operação logística
- um projeto com prazo fixo

Normalmente, isso é controlado com:

- planilhas
- mensagens no WhatsApp
- anotações espalhadas

O problema é que:

- ninguém sabe exatamente **quem é responsável por quê**
- tarefas “quase prontas” viram problemas
- atrasos só aparecem quando já é tarde

👉 **O SpecOps resolve isso dando uma visão clara da operação como um todo.**

Ele mostra:

- o que precisa ser feito
- em qual ordem
- por quem
- até quando
- e o que está atrasado ou em risco

---

## 🧠 Conceito central

O SpecOps é baseado na ideia de **operações**, não apenas tarefas soltas.

Uma operação é composta por:

```
Operação
 ├─ Fases (momentos da execução)
 │   ├─ Ações (o que precisa ser feito)
 │   │   └─ Checkpoints (validações reais)
 └─ Recursos (pessoas, serviços, equipamentos)
```

Isso permite acompanhar **execução real**, não apenas intenção.

---

## 🧩 Principais entidades

### Operation

Representa a missão/operação em si.

Exemplo:

> Workshop Técnico — 15/03

Campos principais:

- nome
- descrição
- data de início e fim
- status (planning, active, completed, aborted)

---

### Phase

Divide a operação em etapas temporais.

Exemplo:

- Preparação
- Execução
- Pós-operação

Cada fase tem:

- ordem
- datas
- progresso

---

### Action

Ações concretas que precisam ser executadas.

Exemplo:

- Contratar local
- Testar equipamentos
- Confirmar palestrantes

Cada ação possui:

- responsável
- prazo
- status
- prioridade

---

### Checkpoint

Valida se uma ação foi **realmente concluída**.

Exemplo:
Ação: _Contratar local_  
Checkpoints:

- contrato assinado
- pagamento efetuado

Uma ação só pode ser finalizada quando seus checkpoints forem concluídos.

---

### Resource

Recursos envolvidos na operação:

- pessoas
- equipamentos
- serviços

Permite visualizar dependências e gargalos.

---

## 🕰️ Timeline (diferencial do projeto)

O SpecOps possui uma visão temporal da operação:

- ações organizadas por data
- atrasos destacados
- impacto de atrasos visível nas fases seguintes

Isso permite **agir antes do problema virar crise**.

---

## 🏗️ Arquitetura técnica

O projeto foi construído com foco em **clareza, separação de responsabilidades e tipagem forte**.

### Stack

- **Frontend**: Next.js (App Router)
- **Backend**: Elysia
- **Runtime**: Bun
- **Banco de dados**: PostgreSQL
- **ORM**: Prisma
- **UI**: React + Tailwind / shadcn/ui
- **Autenticação**: em desenvolvimento

---

### Organização (monorepo)

```
apps/
 ├─ web/        # Next.js (UI)
 └─ server/        # Elysia (API)
```

---

## 🎯 Objetivo do projeto

Este projeto foi desenvolvido com foco em:

- modelagem de domínio real
- lógica temporal e dependências
- separação clara entre frontend e backend
- arquitetura moderna com Bun
- criação de um sistema **vendável e escalável**

Ele **não é um projeto de tutorial**, mas sim um exemplo de como estruturar um produto real.

---

## 🚧 Status

🚧 Em desenvolvimento

---

## 📄 Licença

MIT
