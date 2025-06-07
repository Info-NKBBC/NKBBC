const { execSync } = require('child_process');

console.log('Building Sanity Studio...');

// 清理 node_modules 和 lockfile
console.log('Cleaning node_modules and package-lock.json...');
execSync('rm -rf node_modules package-lock.json', { stdio: 'inherit' });

// 重新安裝依賴
console.log('Installing dependencies...');
execSync('npm install', { stdio: 'inherit' });

// 執行構建
console.log('Running build...');
execSync('npm run build --no-minify', { stdio: 'inherit' });
