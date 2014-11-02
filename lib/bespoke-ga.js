/* global ga */
module.exports = function(options) {
  return function() {
    if (options && options.trackingId) {

      /* jshint ignore:start */
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
      /* jshint ignore:end */

      ga('create', options.trackingId, 'auto');
      ga('send', 'pageview');
    } else {
      console.log('Bespoke.js GA: Please provide your Google Analytics Tracking ID in the option');
    }
  };
};
