# ts-utils-kit

![CI](https://github.com/SEU_USUARIO/ts-utils-kit/actions/workflows/ci.yml/badge.svg)

Biblioteca simples em TypeScript com funções utilitárias de matemática (soma, subtração, multiplicação, divisão, média) e texto (palíndromo, capitalização), com testes unitários e pipeline de CI.

## Instalação

```bash
npm install
```

## Scripts

```bash
npm test    # roda os testes com Jest
npm run build   # compila TypeScript para dist/
```

## CI/CD

O workflow em `.github/workflows/ci.yml` roda a cada push/PR na branch `main`:
1. Instala as dependências (`npm ci`)
2. Executa os testes (`npm test`)
3. Faz o build (`npm run build`)

## Estrutura

```
src/index.ts        # funções utilitárias
tests/index.test.ts # testes unitários
```
