const path = require('path');
const fs = require('fs');

module.exports = async (runner, args) => {
  try {
    console.log('> POST: PostgreSQL');

    const rc = args.rc;
    const productPath = path.join(process.cwd());
    const productConfigPath = path.join(productPath, "config");
    const settingsJsonPath = path.join(productConfigPath, `${rc.kind}_${rc.identifier}_settings.json`)
    
    console.log('> Creating settings file for local environment...');
    
    // const packageJson = JSON.parse(fs.readFileSync(path.join(productPath, 'package.json'), {encoding:'utf8'}));
    const data = {
      connection_string: `postgresql://localhost:5432`
    };
    fs.writeFileSync(settingsJsonPath, JSON.stringify(data, null, 2));

    console.log('> POST: process ✅ DONE');

  } catch (ex) {
    throw new Error(`Failed run post script (${ex})`);
  }
}
