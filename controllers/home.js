const home = async (ctx) => {
  const title = 'Home Page';
  await ctx.render('index', {
    title,
  });
};


module.exports = {
  home,
};
