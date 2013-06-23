(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['ratings'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"mb-scores\">\r\n	<div class=\"mb-critics\"><span class=\"mb-icon ";
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
    + "%</span></div>\r\n	<div class=\"mb-audience\"><span class=\"mb-icon ";
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
    + "%</span></div>\r\n</div>";
  return buffer;
  });
})();