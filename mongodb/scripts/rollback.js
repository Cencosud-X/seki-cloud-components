module.exports = async (runner, args) => {
  try {
    console.log("> Cleaning...");

    console.log("> Rollback ✅ DONE");
  } catch {
    throw new Error("failed to rollback");
  }
};
