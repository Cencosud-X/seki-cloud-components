module.exports = async (runner, args) => {
  try {
    console.log("> PRE: Installing prerequisites:");

    console.log("> PRE: requisites ✅ DONE");
  } catch (ex) {
    console.error(ex);
    throw new Error("failed to install pre-requisites");
  }
};
