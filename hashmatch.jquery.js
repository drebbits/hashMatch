/*
 *  hashMatch js v1.0.0
 *  Use #hash to show/hide an element that matches the hash in the URL bar.
 *
 *  @author Dreb Bits
 *  @authorurl http://drebbits.com
 *  @twitter http://twitter.com/drebbits
 *  @license MIT
 */
;(function ($) {
    
    $.hashmatch = function (options) {

        var js = this,
            defaults = {
                dataHash: true,
                prefix: "",
                selector: "",
                excludes: "",
                transition: "showHide"
            },
            settings = $.extend(defaults, options), 
            prefix = settings.prefix,
            selector = settings.selector, 
            $body = $(document.body), 
            $window = $(window), 
            $hashMatch,
            hashMatchEl;

        js.init = function() {  
            hashMatchEl = selector.trim();
            hashMatchEl += ( settings.dataHash ) ? "[data-hash^=#]" : "[class*="+ prefix +"]";

            $hashMatch = $(hashMatchEl).not(settings.excludes);

            $hashMatch.hide();

            $(window).trigger("hashchange");

            $body.on("click", "a[href^=#]", function(e) {
                var hash = location.hash,
                    $self =  $(this), 
                    href = $self.attr("href");

                $self.addClass("hash-match");

                if(hash === href) {

                    $self.removeClass("hash-match");

                    if(history.pushState) {
                        history.pushState(null, null, "#");
                    }
                    else {
                        location.hash = "#";
                    }

                    $(window).trigger("hashchange");

                    //@TODO add API here..

                    e.preventDefault();
                }

            });

            $window.on( "hashchange", function() {
                var hashUrl = location.hash,  
                    fx = settings.transition,
                    hasHashData = settings.dataHash,
                    hashData;

                $hashMatch.each(function() {
                    
                    if(hasHashData){
                        hashData = $(this).attr("data-hash");
                    } else {
                        var cssClasses = $(this).attr("class").split (" ");

                        for ( var index in cssClasses ) {
                            var  cons = new RegExp(prefix+"\\w+$","g");

                            if ( cssClasses[index].match(cons) ) {
                                hashData = "#" + String(cssClasses[index].replace (prefix, ""));
                                break;
                            }
                        }
                    }

                    if(fx === "slideToggle") {
                        $(this).slideUp();
                    } else {
                        $(this).hide(); 
                    }
                    
                    if( hashUrl === hashData) {
                        if(fx === "slideToggle") {
                            $(this).slideToggle();
                        } else {
                            $(this).show();
                        }
                    }
                });
            }); 
        };

        js.init();
    };

})(jQuery);