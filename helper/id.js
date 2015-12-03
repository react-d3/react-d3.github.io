module.exports= function(hbs){
  hbs.registerHelper('toID', function(str) {
      return str.toLowerCase().replace(/\s/g, '-');
  });
};
