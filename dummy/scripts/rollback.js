module.exports = async (runner, args) => {
  try {
    console.log("> Cleaning...");

    console.log(`args=${JSON.stringify(args)}`)

    await runner.execute([
      `echo "check this: 'rm -rf ${args.workspacePath}'"`
    ])

    console.log("> Rollback ✅ DONE");
  } catch {
    throw new Error("Failed to rollback");
  }
};
