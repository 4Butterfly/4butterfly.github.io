$(function() {
    $('.animatePrize').find('.prizeDrop').css({
        'opacity': 0,
        'display': 'block',
        top: 0
    }).delay(300).animate({
        'opacity': 1,
        'top': 22
    }).delay(2000).jrumble({
        rumbleEvent: 'constant',
        rumbleSpeed: 100,
        posY: 'bottom',
        rangeRot: 1,
        rangeX: 0,
        rangeY: 0
    });
});

// Preloader
window.count = 0;
window.countSpeed = 1;
window.countPostback = null;

function timed_count() {
    var math_random = Math.floor(Math.random() * (1000 - 10 + 1)) + 10;
    count++;
    if (count <= 100) {
        var math_rand = (Math.floor(Math.random() * (40 - 10 + 1)) + 10) / window.countSpeed;
        $("#progress").animate({
            width: count + '%',
            opacity: 0.4
        }, 10);
        if (count == math_rand || count == math_rand - 5) {
            $('#count').html(count);
            setTimeout("timed_count()", 500)
        } else {
            $('#count').html(count);
            setTimeout("timed_count()", math_rand);

        }
    } else {
        $('#loader1').html('');
        $('.loader-fragment').hide();
        $('#result').show();
        if (typeof window.countPostback == 'function') {
            window.countPostback()
        }
        console.log('loaderstop');
        $('#result').show();
    }
}

function loading_date() {
    $('#loader1').html('<span style="display: block;  float: left;">' + '<div id="" style="float:left; border: 1px solid black; width: 100px;  margin-right: 15px;"><span id="progress"></span></div>&nbsp; <span id="count">0</span>%</span><div class="line"><!-- --></div>');
    timed_count()
}
// /Preloader




$.fn.simpleCountdown = function (options) {
    var settings = {
        'alertPeriod': 0,
        'timeLeft': 10,
        'onAlert': null,
        'onComplete': null
    };
    return this.each(function () {
        if (options) {
            $.extend(settings, options)
        }
        var $container = $(this);

        function doCountdown() {
            settings.timeLeft--;
            if (settings.alertPeriod && settings.timeLeft == settings.alertPeriod) {
                if (settings.onAlert) {
                    settings.onAlert()
                }
            }
            if (settings.timeLeft == 60) {
                $container.css({
                    color: '#f00'
                })
            }
            if (settings.timeLeft < 0) {
                clearInterval(interval);
                if (settings.onComplete) {
                    settings.onComplete()
                }
            } else if (!$container.closest('body').length || $('.step-2').attr('style') == "display: none;") {
                clearInterval(interval)
            } else {
                write()
            }
        }

        function write() {
            var minutes = Math.floor(settings.timeLeft / 60);
            var seconds = settings.timeLeft % 60;
            if (minutes < 10) {
                minutes = '0' + minutes
            }
            if (seconds < 10) {
                seconds = '0' + seconds
            }
            $container.html(minutes + ':' + seconds)
        }
        write();
        var interval = setInterval(doCountdown, 1000)
    })
};



//Step-1
$('#startButton').on('click', function(e) {
    e.preventDefault();
    $('.step-1').hide();
    $('.step-2').show();
    $('span.timer').simpleCountdown({
        timeLeft: 3 * 60,
        alertPeriod: 10,
        onAlert: function() {
            alert("Hurry up, the time is almost over!");
        }
    });
})

//Step-2

var correctAnswer = 13;
var checkAnswer = false;
$(function() {
    if ($('input.correctAnswer').length) {
        $('input.submitAnswers').hide();
    }
    $('input.trianglesAnswer').click(function(event) {
        event.preventDefault();
        $('input[name="trianglesNumber"]').val($(this).val());
    });
    $('form#form2').submit(function(event) {
        event.preventDefault();
        var ok = true;
        $('ol.quiz > li').each(function() {
            if (ok) {
                if (!$(this).find('input[type="radio"]:checked').length) {
                    ok = false;
                }
            }
        });
        if (!ok) {
            event.preventDefault();
            alert("Please answer all the questions!");
            return false;
        }
        var errorMessage = '';
        var $trianglesAnswerField = $('.trianglesNumber');
        if ($trianglesAnswerField.length) {
            var answer = $trianglesAnswerField.val();
            if ($trianglesAnswerField.attr('type') == 'number') {
                answer = parseInt(answer);
            }
            if (!answer) {
                errorMessage = "Please type your answer!";
            }
            if (checkAnswer && answer != correctAnswer) {
                errorMessage = "Your answer is incorrect. Please try again!";
            }
            if (answer == 1) {
                errorMessage = "There are more than one triangle!";
            }
            if (errorMessage) {
                event.preventDefault();
                alert(errorMessage);
                $trianglesAnswerField.focus();
                return false;
            }
        }
        
        //Step-3
        $('.step-2').hide();
        $('.step-3').show();
        $('#answer-err').html($trianglesAnswerField.val() - 1);
        $('#answer-true').html($trianglesAnswerField.val());
        console.log($trianglesAnswerField.val());
        loading_date();
        
    });
});
