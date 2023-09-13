const path = require('path');

module.exports = async (runner, args) => {
  try {
    console.log('> POST: dummy');

    // Write code to generate local resources. For example:

    // console.log('> Creating settings file for local environment...');
    // const productConfigPath = path.join(process.cwd(), "config");
    // const repoPath = args.repoClonedPath;
    // const settingsJsonPath = path.join(repoPath, "templates", "settings.json");
    // const rc = args.rc;
    // await runner.execute([
    //   `cat ${settingsJsonPath} > ${productConfigPath}/${rc.kind}_${rc.identifier}_settings.json`
    // ])

    console.log('> POST: ✅ DONE');
  } catch (ex) {
    throw new Error(`> POST: Failed(${ex})`);
  }
}
