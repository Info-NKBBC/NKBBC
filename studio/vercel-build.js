const { execSync } = require('child_process');

console.log('Building Sanity Studio...');
execSync('npm run build', { stdio: 'inherit' });
