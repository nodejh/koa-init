const testGet = async (ctx) => {
  const row = await ctx.db.get('user');
  ctx.body = {
    success: true,
    data: row,
  };
};


const testPost = async (ctx) => {
  ctx.body = {
    success: true,
    data: {},
  };
};


module.exports = {
  testGet,
  testPost,
};
