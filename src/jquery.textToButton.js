(function ($) {

    var defaults = {
        classNames: '',
        closeIcon: false
    };

    $.fn.textToButton = function (text, opts) {

        var textField = this;
        defaults.classNames = textField.attr('class');

        $.extend(defaults, opts);

        var button = $('<button type="button">');
        button.html(text);
        button.addClass(defaults.classNames);

        if(defaults.closeIcon) {
            var icon = $('<span class="close">');
            icon.html('&times;').css('float', 'right');
            icon.appendTo(button);
        }

        button.click(function () {
            $(this).fadeOut(100, function () {
                textField.fadeIn(100, function () {
                    $(this).focus();
                });
                $(this).remove();
            });
        });

        button.css({'display': 'none', 'cursor': 'text'});

        this.after(button);

        this.fadeOut(100, function () {
            button.fadeIn(100);
        });

        return this;

    };

}(jQuery));