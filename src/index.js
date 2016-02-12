import lintConfig from 'eslint-config-canonical/eslintrc';
import fs from 'fs';
import path from 'path';
import co from 'co';
import marked from 'marked';
import mdRenderer from 'marked-to-md';
import reEsc from 'regex-escape';

const IS_PROBLEM = /will be considered( a)? problem/;
const IS_NOT_PROBLEM = /will not be considered( a)? problem/;

const canRead = fnm => new Promise(resolve => {
  fs.access(fnm, fs.R_OK, err => {
    resolve(!Boolean(err));
  });
});

const readFile = fnm => new Promise((resolve, reject) => {
  fs.readFile(fnm, (err, data) => {
    if (err) return reject(err);
    resolve(data);
  });
});

const lexer = new marked.Lexer();

function isApplicable(rule, decl) {
  switch (true) {
    case (typeof rule === 'number'): switch (true) {
      case (typeof decl === 'number'): return rule === decl;
      default: return false;
    }
    case (Array.isArray(rule)): switch (true) {
      case (Array.isArray(decl)): return rule[0] === decl[0] && rule[1] === decl[1];
      default: return false;
    }
    default: return false;
  }
}

co(function *() {
  const {rules} = lintConfig;

  for (let ruleKey in rules) {
    let fnm = path.resolve(__dirname, '..', 'eslint', 'docs', 'rules', `${ruleKey}.md`);
    const exists = yield canRead(fnm);
    if (exists) {
      const rule = rules[ruleKey];
      let md = (yield readFile(fnm)).toString();
      const lintDeclRe = new RegExp(`/\\*\\s*eslint\\s+${reEsc(ruleKey)}:\\s*(.+)\\*/`);
      let parsedMd = lexer.lex(md);
      console.log(`## ${ruleKey}`);
      console.log(`${md.split('\n')[0].replace(/^\s*#+/, '')}`);
      console.log(`\n**Setting:** \`${JSON.stringify(rule)}\`\n\n`)
      parsedMd.filter(section => section.type === 'code')
        .map(s => s.text)
        .forEach(code => {
          const lintDeclMatch = lintDeclRe.exec(code.split('\n')[0]);
          if (!lintDeclMatch) return;
          try {
            const lintDecl = JSON.parse(lintDeclMatch[1]);
            //console.log(lintDecl, isApplicable(rule, lintDecl));
            if (isApplicable(rule, lintDecl)) {
              console.log('\n' + code.split('\n').map(line => `    ${line}`).join('\n'));
            }
          } catch (err) {
            return;
          }
      })
    }
  }


}).catch(err => console.error(err));
