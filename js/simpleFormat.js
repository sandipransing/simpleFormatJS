/* =============================================================
 * simpleFormat.js by Sandip Ransing
 * https://github.com/sandipransing/simpleFormatJS
 * ============================================================ */

(function($) {
   
  /* Returns text transformed into HTML using simple formatting rules.
   * Two or more consecutive newlines(\n\n) are considered as a paragraph and wrapped in <p> tags.
   * One newline (\n) is considered as a linebreak and a <br /> tag is appended.
   *
   * You can pass any HTML attributes into html_options. These will be added to all created paragraphs.
   */
  $.simpleFormat = function(str, html_options, options) {
    
    html_options = (typeof html_options === "undefined") ? {} : html_options;
    options = (typeof options === "undefined") ? {} : options;
    options = $.extend({sanitize: true}, options)

    str = options.sanitize ? str : str
    str = str.replace(/\r\n?/, "\n"); // \r\n and \r -> \n
    str = $.trim(str); // remove whitespaces
    if(str.length) {
      str = str.replace(/\n\n+/g, "</p><p>"); // 2+ newline  -> paragraph
      str = str.replace(/\n/g, "<br />"); // 1 newline   -> br
      
      wrapper_tag = options.wrapper_tag ? options.wrapper_tag : 'p'
      str = $('<' + escape(wrapper_tag) + '>', html_options).html(str);
    }
    return str;
  };

  $.fn.simpleFormat = function(html_options, options) {
    return this.html($.simpleFormat(this.html(), html_options, options));
  };
 
})(jQuery);
