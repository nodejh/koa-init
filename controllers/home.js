const home = async (ctx) => {
  const title = 'Home Page';
  ctx.db();
  await ctx.render('index', {
    title,
  });
};


module.exports = {
  home,
};
