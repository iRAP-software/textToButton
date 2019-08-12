/*
 * jquery.textToButton.js v1.1 2019-07-23
 * https://github.com/iRAP-software/textToButton
 */
(function ($) {

    var defaultText = 'textToButton';

    var defaults = {
        classNames: '',
        closeIcon: false,
        text: defaultText
    };

    $.fn.textToButton = function (textOrMethod, opts) {

        var textField = this;
        var button, icon;

        var methods = {
            init: function () {
                defaults.classNames = textField.attr('class');

                $.extend(defaults, opts);

                if(typeof defaults.text === 'undefined' || defaults.text === '') defaults.text = defaultText;

                button = $('<button type="button">');
                button.html(methods[textOrMethod] ? defaults.text : textOrMethod);
                button.addClass(defaults.classNames);
                button.attr('data-ttb', '');

                if (defaults.closeIcon) {
                    icon = $('<span class="close">');
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

                textField.next('button[data-ttb]').remove();

                textField.after(button);

                textField.fadeOut(100, function () {
                    button.fadeIn(100);
                });

                return textField;
            },
            clear: function () {
                button = textField.next('button');
                button.trigger('click');
                return textField;
            }
        };

        if(methods[textOrMethod]) {
            return methods[textOrMethod].apply(this);
        } else {
            return methods.init();
        }

    };

}(jQuery));