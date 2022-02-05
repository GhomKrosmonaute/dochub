module.exports = function(config) {
  config.addLayoutAlias('post', 'layouts/post.njk');
  config.addPassthroughCopy("assets");
}
