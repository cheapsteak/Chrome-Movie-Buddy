(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['ratings'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n	<div class=\"mb-critics\"><a href=\"";
  if (stack1 = helpers.link) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.link; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" title=\"See reviews for '";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "' at Rotten Tomatoes\"><span class=\"mb-icon ";
  if (stack1 = helpers.critics_rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.critics_rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">Critics Rating: ";
  if (stack1 = helpers.critics_rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.critics_rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span><span class=\"mb-score\">";
  if (stack1 = helpers.critics_score) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.critics_score; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "%</span></a></div>\r\n	<div class=\"mb-audience\"><a href=\"";
  if (stack1 = helpers.link) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.link; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" title=\"See reviews for '";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "' at Rotten Tomatoes\"><span class=\"mb-icon ";
  if (stack1 = helpers.audience_rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.audience_rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">Audience Rating: ";
  if (stack1 = helpers.audience_rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.audience_rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span><span class=\"mb-score\">";
  if (stack1 = helpers.audience_score) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.audience_score; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "%</span></a></div>\r\n	";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n	<div class=\"mb-not-found\"><a href=\"https://www.rottentomatoes.com/search/?search=";
  if (stack1 = helpers.query) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.query; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" target=\"rt\">check freshness</a></div>\r\n	";
  return buffer;
  }

  buffer += "<div class=\"mb-scores ";
  if (stack1 = helpers.classes) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.classes; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\r\n	";
  stack1 = helpers['if'].call(depth0, depth0.critics_score, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</div>";
  return buffer;
  });
})();