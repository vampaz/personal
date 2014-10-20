
/* Author:
  carlos@conekto.pt
*/

(function(window){
    "use strict";

    $(function () {
        $(window).load(function (e) {
            var $body =  $('body');
            $body.removeClass('inv');
            if (window.print) {
                $body.find('#print').click(function (e) {
                    window.print();
                    e.preventDefault();
                });
            }
        });

        //handle external links without messing the (original) html, not that I strongly disagree with _blank
        $('a[href^="http://"], a[href^="https://"]').attr('target', '_blank');
    });

})(window);