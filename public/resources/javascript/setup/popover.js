/*
* Bootstrap popovers and tooltips
*/


var $ = require('jquery');


module.exports = function () {

  // initialise all popovers
  $('body').popover({
    selector: '[data-toggle="popover"]',
    container: 'body',
    viewport: { selector: 'body', padding: 20 }
  }).on("show.bs.popover", function(e){
     $('.popover').not(this).popover('hide');
  });

  // Initialise Bootstrap tooltips
  $('[data-toggle="tooltip"]').tooltip();
};
