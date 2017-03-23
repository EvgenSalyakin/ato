$(window).ready(function () {
    var animation = true;

    var day = moment().day();

    if (day == 1) {
        $('.monday').addClass('mon');
    } else if (day == 2) {
        $('.tuesday').addClass('tue');
    } else if (day == 3) {
        $('.wednesday').addClass('wed');
    } else if (day == 4) {
        $('.thursday').addClass('thu');
    } else if (day == 5) {
        $('.friday').addClass('fr');
    } else if (day == 6) {
        $('.saturday').addClass('sat');
    } else if (day == 7) {
        $('.sunday').addClass('sun');
    }

//  OPEN WIDGET
    var display;
    $('.on-btn').click(function () {
        display = document.getElementById('box').style.display;
        if (display == 'none') {
            document.getElementById('box').style.display = 'block';

            $('.flexslider').flexslider({
                animation: 'slide',
                slideshow: false,
                controlNav: false,
                controlsContainer: $('.custom-controls-container'),
                customDirectionNav: $('.custom-navigation a'),
                keyboard: false,
                animationLoop: animation
            });


        } else if (display == 'block') {
            document.getElementById('box').style.display = 'none';
        }
    });

// CLOSES WIDGET

    $('.close-button').click(function () {
        document.getElementById('box').style.display = 'none';
    });

// SELECTOR

// DAYTIME ONLY OFF OR ON

    var on = 1;
    var off = 0;

    $('.switch-on').click(function () {
        if (on == 0) {
            $('.switch-off').removeClass('active');
            $('.switch-on').addClass('active');
            $('.slide-wrap').addClass('default-wrap');
            $('.default-wrap').removeClass('slide-wrap');
            $('.slider').addClass('default-slider');
            $('.default-slider').removeClass('slider');
            function sliders_day_time_only() {
                $(function () {
                    $('.default-slider').slider({
                        orientation: 'vertical',
                        min: 4,
                        max: 14,
                        step: 1,
                        animate: true
                    });
                    $('.monday').slider({
                        orientation: 'vertical',
                        min: 4,
                        max: 14,
                        step: 1,
                        animate: true,
                        slide: function (event, ui) {
                            var mondayValue = 23 - ui.value;
                            $(".contentSlider").html(mondayValue + ' hour');
                        }
                    });
                    $('.tuesday').slider({
                        orientation: 'vertical',
                        min: 4,
                        max: 14,
                        step: 1,
                        animate: true,
                        slide: function (event, ui) {
                            var mondayValue = 23 - ui.value;
                            $(".contentSlider").html(mondayValue + ' hour');
                        }
                    });
                    $('.wednesday').slider({
                        orientation: 'vertical',
                        min: 4,
                        max: 14,
                        step: 1,
                        animate: true,
                        slide: function (event, ui) {
                            var mondayValue = 23 - ui.value;
                            $(".contentSlider").html(mondayValue + ' hour');
                        }
                    });
                    $('.thursday').slider({
                        orientation: 'vertical',
                        min: 4,
                        max: 14,
                        step: 1,
                        animate: true,
                        slide: function (event, ui) {
                            var mondayValue = 23 - ui.value;
                            $(".contentSlider").html(mondayValue + ' hour');
                        }
                    });
                    $('.friday').slider({
                        orientation: 'vertical',
                        min: 4,
                        max: 14,
                        step: 1,
                        animate: true,
                        slide: function (event, ui) {
                            var fridayValue = 23 - ui.value;
                            $(".contentSlider").html(fridayValue + ' hour');
                        }
                    });
                    $('.saturday').slider({
                        orientation: 'vertical',
                        min: 4,
                        max: 14,
                        step: 1,
                        animate: true,
                        slide: function (event, ui) {
                            var saturdayValue = 23 - ui.value;
                            $(".contentSlider").html(saturdayValue + ' hour');
                        }
                    });
                    $('.sunday').slider({
                        orientation: 'vertical',
                        min: 4,
                        max: 14,
                        step: 1,
                        animate: true,
                        slide: function (event, ui) {
                            var sundayValue = 23 - ui.value;
                            $(".contentSlider").html(sundayValue + ' hour');
                        }
                    });
                });
            }

            sliders_day_time_only();
            on = 1;
            off = 0;
        } else if (on == 1) {
            $('.switch-on').removeClass('active');
            $('.switch-off').addClass('active');
            $('.default-wrap').addClass('slide-wrap');
            $('.default-slider').addClass('slider');
            $('.slider').removeClass('default-slider');
            $(function () {
                $('.slider').slider({
                    orientation: 'vertical',
                    min: 0,
                    max: 23,
                    step: 1,
                    animate: true,
                    slide: function (event, ui) {
                        var value = 23 - ui.value;
                        $(".contentSlider").html(value + ' hour');
                    }
                });
                $('.monday').slider({
                    orientation: 'vertical',
                    min: 0,
                    max: 23,
                    step: 1,
                    animate: true,
                    slide: function (event, ui) {
                        var mondayValue = 23 - ui.value;
                        $(".contentSlider").html(mondayValue + ' hour');
                    }
                });
                $('.tuesday').slider({
                    orientation: 'vertical',
                    min: 0,
                    max: 23,
                    step: 1,
                    animate: true,
                    slide: function (event, ui) {
                        var tuesdayValue = 23 - ui.value;
                        $(".contentSlider").html(tuesdayValue + ' hour');
                    }
                });
                $('.wednesday').slider({
                    orientation: 'vertical',
                    min: 0,
                    max: 23,
                    step: 1,
                    animate: true,
                    slide: function (event, ui) {
                        var wednesdayValue = 23 - ui.value;
                        $(".contentSlider").html(wednesdayValue + ' hour');
                    }
                });
                $('.thursday').slider({
                    orientation: 'vertical',
                    min: 0,
                    max: 23,
                    step: 1,
                    animate: true,
                    slide: function (event, ui) {
                        var thursdayValue = 23 - ui.value;
                        $(".contentSlider").html(thursdayValue + ' hour');
                    }
                });
                $('.friday').slider({
                    orientation: 'vertical',
                    min: 0,
                    max: 23,
                    step: 1,
                    animate: true,
                    slide: function (event, ui) {
                        var fridayValue = 23 - ui.value;
                        $(".contentSlider").html(fridayValue + ' hour');
                    }
                });
                $('.saturday').slider({
                    orientation: 'vertical',
                    min: 0,
                    max: 23,
                    step: 1,
                    animate: true,
                    slide: function (event, ui) {
                        var saturdayValue = 23 - ui.value;
                        $(".contentSlider").html(saturdayValue + ' hour');
                    }
                });
                $('.sunday').slider({
                    orientation: 'vertical',
                    min: 0,
                    max: 23,
                    step: 1,
                    animate: true,
                    slide: function (event, ui) {
                        var sundayValue = 23 - ui.value;
                        $(".contentSlider").html(sundayValue + ' hour');
                    }
                });
            });
            on = 0;
            off = 1;
        }
    });

    $('.switch-off').click(function () {
        if (off == 0) {
            $('.switch-on').removeClass('active');
            $('.switch-off').addClass('active');
            $('.default-wrap').addClass('slide-wrap');
            $('.default-slider').addClass('slider');
            $('.slider').removeClass('default-slider');
            $(function () {
                $('.slider').slider({
                    orientation: 'vertical',
                    min: 0,
                    max: 23,
                    step: 1,
                    animate: true,
                    slide: function (event, ui) {
                        var value = 23 - ui.value;
                        $(".contentSlider").html(value + ' hour');
                    }
                });
                $('.monday').slider({
                    orientation: 'vertical',
                    min: 0,
                    max: 23,
                    step: 1,
                    animate: true,
                    slide: function (event, ui) {
                        var mondayValue = 23 - ui.value;
                        $(".contentSlider").html(mondayValue + ' hour');
                    }
                });
                $('.tuesday').slider({
                    orientation: 'vertical',
                    min: 0,
                    max: 23,
                    step: 1,
                    animate: true,
                    slide: function (event, ui) {
                        var tuesdayValue = 23 - ui.value;
                        $(".contentSlider").html(tuesdayValue + ' hour');
                    }
                });
                $('.wednesday').slider({
                    orientation: 'vertical',
                    min: 0,
                    max: 23,
                    step: 1,
                    animate: true,
                    slide: function (event, ui) {
                        var wednesdayValue = 23 - ui.value;
                        $(".contentSlider").html(wednesdayValue + ' hour');
                    }
                });
                $('.thursday').slider({
                    orientation: 'vertical',
                    min: 0,
                    max: 23,
                    step: 1,
                    animate: true,
                    slide: function (event, ui) {
                        var thursdayValue = 23 - ui.value;
                        $(".contentSlider").html(thursdayValue + ' hour');
                    }
                });
                $('.friday').slider({
                    orientation: 'vertical',
                    min: 0,
                    max: 23,
                    step: 1,
                    animate: true,
                    slide: function (event, ui) {
                        var fridayValue = 23 - ui.value;
                        $(".contentSlider").html(fridayValue + ' hour');
                    }
                });
                $('.saturday').slider({
                    orientation: 'vertical',
                    min: 0,
                    max: 23,
                    step: 1,
                    animate: true,
                    slide: function (event, ui) {
                        var saturdayValue = 23 - ui.value;
                        $(".contentSlider").html(saturdayValue + ' hour');
                    }
                });
                $('.sunday').slider({
                    orientation: 'vertical',
                    min: 0,
                    max: 23,
                    step: 1,
                    animate: true,
                    slide: function (event, ui) {
                        var sundayValue = 23 - ui.value;
                        $(".contentSlider").html(sundayValue + ' hour');
                    }
                });
            });
            on = 0;
            off = 1;
        } else if (off == 1) {
            $('.switch-off').removeClass('active');
            $('.switch-on').addClass('active');
            $('.slide-wrap').addClass('default-wrap');
            $('.default-wrap').removeClass('slide-wrap');
            $('.slider').addClass('default-slider');
            $('.default-slider').removeClass('slider');
                $(function () {
                    $('.default-slider').slider({
                        orientation: 'vertical',
                        min: 4,
                        max: 14,
                        step: 1,
                        animate: true
                    });

                    $('.monday').slider({
                        orientation: 'vertical',
                        min: 4,
                        max: 14,
                        step: 1,
                        animate: true,
                        slide: function (event, ui) {
                            var mondayValue = 23 - ui.value;
                            $(".contentSlider").html(mondayValue + ' hour');
                        }
                    });
                    $('.tuesday').slider({
                        orientation: 'vertical',
                        min: 4,
                        max: 14,
                        step: 1,
                        animate: true,
                        slide: function (event, ui) {
                            var mondayValue = 23 - ui.value;
                            $(".contentSlider").html(mondayValue + ' hour');
                        }
                    });
                    $('.wednesday').slider({
                        orientation: 'vertical',
                        min: 4,
                        max: 14,
                        step: 1,
                        animate: true,
                        slide: function (event, ui) {
                            var mondayValue = 23 - ui.value;
                            $(".contentSlider").html(mondayValue + ' hour');
                        }
                    });
                    $('.thursday').slider({
                        orientation: 'vertical',
                        min: 4,
                        max: 14,
                        step: 1,
                        animate: true,
                        slide: function (event, ui) {
                            var mondayValue = 23 - ui.value;
                            $(".contentSlider").html(mondayValue + ' hour');
                        }
                    });
                    $('.friday').slider({
                        orientation: 'vertical',
                        min: 4,
                        max: 14,
                        step: 1,
                        animate: true,
                        slide: function (event, ui) {
                            var fridayValue = 23 - ui.value;
                            $(".contentSlider").html(fridayValue + ' hour');
                        }
                    });
                    $('.saturday').slider({
                        orientation: 'vertical',
                        min: 4,
                        max: 14,
                        step: 1,
                        animate: true,
                        slide: function (event, ui) {
                            var saturdayValue = 23 - ui.value;
                            $(".contentSlider").html(saturdayValue + ' hour');
                        }
                    });
                    $('.sunday').slider({
                        orientation: 'vertical',
                        min: 4,
                        max: 14,
                        step: 1,
                        animate: true,
                        slide: function (event, ui) {
                            var sundayValue = 23 - ui.value;
                            $(".contentSlider").html(sundayValue + ' hour');
                        }
                    });
                });
            on = 1;
            off = 0;
        }
    });

// SLIDERS
    $(function () {
        $('.default-slider').slider({
            orientation: 'vertical',
            min: 4,
            max: 14,
            step: 1,
            animate: true,
            slide: function (event, ui) {
                var v = 23 - ui.value;
                $(".contentSlider").html(v + ' hour');
            }
        });
        $('.slider').slider({
            orientation: 'vertical',
            min: 0,
            max: 23,
            step: 1,
            animate: true,
            slide: function (event, ui) {
                var v = 23 - ui.value;
                $(".contentSlider").html(v + ' hour');
            }
            /* create: function (event, ui) {
             val = $(".slider").slider("value");//При создании слайдера, получаем его значение в перемен. val
             $(".contentSlider").html(val);//Заполняем этим значением элемент с id contentSlider
             },
             slide: function (event, ui) {
             $(".contentSlider").html(ui.value + ' hour');//При изменении значения ползунка заполняем элемент с id contentSlider
             // $(this .ui-state-default).html('<div class="popup-wrap"><div class="popup">' + ui.val + ' hour</div></div>')
             }*/
        });
        $('.monday').slider({
            orientation: 'vertical',
            min: 4,
            max: 14,
            value: moment().hour(),
            step: 1,
            animate: true,
            slide: function (event, ui) {
                var v = 23 - ui.value;
                $(".contentSlider").html(v + ' hour');
            }
        });
        $('.tuesday').slider({
            orientation: 'vertical',
            min: 4,
            max: 14,
            value: (moment().hour + 1) - 5,
            step: 1,
            animate: true,
            slide: function (event, ui) {
                var v = 23 - ui.value;
                $(".contentSlider").html(v + ' hour');
            }
        });

        $('.wednesday').slider({
            orientation: 'vertical',
            min: 4,
            max: 14,
            step: 1,
            animate: true,
            slide: function (event, ui) {
                var v = 23 - ui.value;
                $(".contentSlider").html(v + ' hour');
            }
        });
        $('.thursday').slider({
            orientation: 'vertical',
            min: 4,
            max: 14,
            step: 1,
            animate: true,
            slide: function (event, ui) {
                var v = 23 - ui.value;
                $(".contentSlider").html(v + ' hour');
            }
        });
        $('.friday').slider({
            orientation: 'vertical',
            min: 4,
            max: 14,
            step: 1,
            animate: true,
            slide: function (event, ui) {
                var v = 23 - ui.value;
                $(".contentSlider").html(v + ' hour');
            }
        });
        $('.saturday').slider({
            orientation: 'vertical',
            min: 4,
            max: 14,
            step: 1,
            animate: true,
            slide: function (event, ui) {
                var v = 23 - ui.value;
                $(".contentSlider").html(v + ' hour');
            }
        });
        $('.sunday').slider({
            orientation: 'vertical',
            min: 4,
            max: 14,
            step: 1,
            animate: true,
            slide: function (event, ui) {
                var v = 23 - ui.value;
                $(".contentSlider").html(v + ' hour');
            }
        });
    });

// When clicking on the arrows generate weeks
    var m = moment();
    var monday = m.day(1).format('DD');
    var sunday = m.day(7).format('DD');
    var thisMonth = m.format('MM');
    $('.item-week').html('Week ' + monday + '-' + sunday + '.' + thisMonth);


    var thisWeek = moment().week();
    var week = moment().week();

    if (week == thisWeek) {
        $('.flex-prev').css('display', 'none');
        $('.flex-prev-block').css('display', 'block');
    } else {
        $('.flex-prev-block').css('display', 'none');
        $('.flex-prev').css('display', 'block');
    }

    $('.flex-next').click(function () {
        $('.flex-prev').css('display', 'block');
        $('.flex-prev-block').css('display', 'none');
        if (week == thisWeek) {
            week = thisWeek + 1;
        } else if (week == prevWeek) {
            week = prevWeek + 1;
        }
        else {
            week = week + 1;
        }
        var mom = moment().week(week);
        var monday = mom.day(1).format('DD');
        var sunday = mom.day(7).format('DD');
        var thisMonth = mom.format('MM');
        $('.item-week').html('Week ' + monday + '-' + sunday + '.' + thisMonth);
    });

    var theWeek = week;
    var prevWeek;
    $('.flex-prev').click(function () {
        if (week == thisWeek) {
            return false;
        } else {
            week = week - 1;
        }
        theWeek = week;
        if (theWeek == thisWeek) {
            $('.flex-prev').css('display', 'none');
            $('.flex-prev-block').css('display', 'block');
        } else {
            $('.flex-prev').css('display', 'block');
            $('.flex-prev-block').css('display', 'none');
        }

        var mom = moment().week(week);
        var monday = mom.day(1).format('DD');
        var sunday = mom.day(7).format('DD');
        var thisMonth = mom.format('MM');
        $('.item-week').html('Week ' + monday + '-' + sunday + '.' + thisMonth);

        prevWeek = week;
    });


// ADD AND DEL BUTTON
    $('.default-wrap').click(function () {
        $('.wednesday').addClass('twoHandles');
        $(this).click(function () {
            $('.wednesday').slider({
                values: [13, 14, 15]
            });
        });
    });


    //var createSlider = function ($slider, values) {
    // $slider.slider({
    //  min: 4,
    // max: 14,
    //  step: 1,
    //  values: values
    //});
    // };
    // var values = [10, 14, 15],
    // $slider = $('.wednesday');
    //createSlider($slider, values);
    // destroy slider
    //$slider.slider('destroy');
    // add new value (simplyfied of course)
    //values = [10, 14, 17, 19];
    // create new slider again with new values
    //createSlider($slider, values);
});
