const path = require('path');

module.exports = async (runner, args) => {
  try {
    console.log('> POST: Cloudflare Tunnel');

    // const productConfigPath = path.join(process.cwd(), "config");
    // const repoPath = args.repoClonedPath;
    // const rc = args.rc;

    console.log('> Creating settings file for local environment...');

    console.log('> POST: process ✅ DONE');

  } catch (ex) {
    throw new Error(`Failed run post script (${ex})`);
  }
}
