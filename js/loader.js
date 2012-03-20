Drupal.behaviors.fb_app_helper = function(context) {
  var inCanvas = false, inPageTab = false;

  $(document).ready( function() {      
      var inCanvas = false;
      inCanvas = inCanvasCheck();
      if(inCanvas) {
        $("head").append("<link>");
        css = $("head").children(":last");
        css.attr({
          rel:  "stylesheet",
          type: "text/css",
          href: Drupal.settings.basePath + Drupal.settings.fb_app_helper.path + "/css/canvas.css"
        });
        $.getScript(Drupal.settings.basePath + Drupal.settings.fb_app_helper.path + "/js/canvas.js", function(){
          //wait before initialising to prevent intermittent load error
          setTimeout("attachCanvasHelpers()",250);
        });
       }	
  });  
   
  function inCanvasCheck () {
    if ((window.location.search.indexOf('fb_sig_in_iframe=1')>-1) ||
    (window.location.search.indexOf('session=')>-1) ||
    (window.location.search.indexOf('signed_request=')>-1) ||
    (window.name.indexOf('iframe_canvas')>-1) ||
    (window.name.indexOf('app_runner')>-1) ) {
          return true;
    }
    else {
          return false;
    }    
  }
  
}