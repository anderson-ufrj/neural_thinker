#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const title = args[0];
const langIndex = args.findIndex(arg => arg === '--lang');
const language = langIndex !== -1 ? args[langIndex + 1] : 'pt';

if (!title) {
  console.error('❌ Por favor, forneça um título para o post');
  console.log('Uso: npm run new-post "Título do Post" --lang pt');
  process.exit(1);
}

const slug = title
  .toLowerCase()
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '') // Remove acentos
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-+|-+$/g, '');

const date = new Date().toISOString().split('T')[0];
const fileName = `${slug}.${language}.mdx`;
const filePath = path.join(process.cwd(), 'content', 'posts', fileName);

const template = `---
title: "${title}"
date: "${date}"
language: "${language}"
tags: []
excerpt: ""
translations:
  ${language === 'pt' ? 'en: null\n  es: null' : language === 'en' ? 'pt: null\n  es: null' : 'pt: null\n  en: null'}
---

# ${title}

Comece a escrever seu post aqui...
`;

// Criar diretório se não existir
const postsDir = path.join(process.cwd(), 'content', 'posts');
if (!fs.existsSync(postsDir)) {
  fs.mkdirSync(postsDir, { recursive: true });
}

// Verificar se o arquivo já existe
if (fs.existsSync(filePath)) {
  console.error(`❌ O arquivo ${fileName} já existe!`);
  process.exit(1);
}

// Criar o arquivo
fs.writeFileSync(filePath, template);

console.log(`✅ Post criado com sucesso!`);
console.log(`📝 Arquivo: ${fileName}`);
console.log(`📂 Caminho: ${filePath}`);
console.log(`\nAgora você pode editar o arquivo e adicionar seu conteúdo.`);