module.exports= function(hbs){

  hbs.registerHelper('multiOr', function (options) {
    var args = [].slice.apply(arguments);
    var opts = args.pop();
    var flag = true; //true: all empty
    var fn = opts.fn;
    for(var i = 0; i < args.length; ++i) {
        if (arguments[i]) {
            flag = false;
            break;
        }
    }
    if (flag) {
        fn = opts.inverse;
    }
    return fn(this);
  });

}