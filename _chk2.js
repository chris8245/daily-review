const fs=require('fs');
const s=fs.readFileSync('_v.html','utf8');
const m=s.match(/const DAYS = ([\s\S]*?);\nconst DAYS_END_SENTINEL/);
const D=eval('('+m[1]+')');
const d=D['2026-08-31'];
const p=d.panqian;
console.log('apac:',!!p.panorama.apac,'count:',p.panorama.apac?p.panorama.apac.length:0);
console.log('us left:',!!p.panorama.us);
console.log('tldr start:',p.tldr.substring(0,40));
