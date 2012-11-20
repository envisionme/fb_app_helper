  /*
   * Add all canvas related bindings here
   */
  function attachCanvasHelpers(){
    //initLinkFixer();
  }

  /*
   * For canvas pages - only external urls should open in new window.
   * I use this but feel free to remove it if you don't need it
   */
  function initLinkFixer() {
    $('a').attr('target','_self');
    $('a').each(function()
    {
       var reg_exp = new RegExp('/*' + window.location.host.replace('www.','') + '/');
       if (!reg_exp.test(this.href))
       {
         // External Link Found
         this.target = "_blank";
       } else {
         this.target="_self";
       }
    });  
  }
  
  /*
   * Add your own helper functions below and be sure to call them 
   * in the attachCanvasHelpers() function above
   */
