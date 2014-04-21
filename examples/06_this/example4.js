var countdownTimer = {
    count : 5,
    interval : 500,
    startCountdown : function(){
        var handler = setInterval(function(){
            console.log('Counting down... ' + this.count);

            this.count--;
            if(this.count < 1){
                clearInterval(handler);
            }
        }, this.interval);
    }
}

countdownTimer.startCountdown();

// ? What's wrong with this code?