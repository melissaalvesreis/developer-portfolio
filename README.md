# Developer Portfolio

Portfólio profissional desenvolvido com Angular standalone, TypeScript e CSS responsivo.

## Requisitos
- Node.js 20.19+ ou 22.12+
- npm

## Executar localmente

```bash
npm install
npm start
```

Acesse `http://localhost:4200`.

## Personalização antes de publicar

Edite `src/app/app.component.html` e `src/app/app.component.ts`:
- Substitua `[Seu nome]` pelo nome profissional que deseja divulgar.
- Atualize os links do GitHub e LinkedIn.
- Troque `seuemail@email.com` pelo e-mail profissional.
- Revise os níveis de habilidade para refletirem com precisão sua experiência.
- Acrescente período, empresa e resultados mensuráveis à experiência profissional.
- Adicione links, imagens ou repositórios públicos aos projetos que puder divulgar.

Os projetos corporativos estão descritos genericamente. Não publique código, capturas de tela, nomes de clientes ou dados internos sem autorização.

## Build de produção

```bash
npm run build
```

Saída: `dist/developer-portfolio/browser`.

## Publicar na Vercel
1. Envie o repositório para o GitHub.
2. Entre na Vercel e importe o repositório.
3. Framework Preset: Angular.
4. Build Command: `npm run build`.
5. Output Directory: `dist/developer-portfolio/browser`.
6. Publique.

## Publicar no GitHub Pages
Para este primeiro deploy, a Vercel é o caminho mais simples. No GitHub Pages, configure o `base-href` conforme o nome do repositório e publique a pasta gerada pelo build. Se o projeto estiver em `usuario.github.io`, o base href pode ser `/`; para um repositório de projeto, use `/nome-do-repositorio/`.

## Próximas melhorias sugeridas
- Adicionar foto profissional ou avatar.
- Adicionar currículo PDF.
- Criar páginas individuais de projeto.
- Configurar domínio próprio.
- Adicionar testes e pipeline de deploy.
