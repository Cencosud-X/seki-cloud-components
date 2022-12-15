module.exports = async (runner, args) => {
  try {
    console.log("> Cleaning...");

    await runner.execute([
      `rm ${args.workspacePath}`
    ])

    console.log("> Rollback ✅ DONE");
  } catch {
    throw new Error("Failed to rollback");
  }
};
