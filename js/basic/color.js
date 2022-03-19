var Body = {
    setColor : function(color){
        //document.querySelector('body').style.color = color;
        $('body').css('color', color);
    },
    setBackgroundColor : function(color) {
        //document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color);
    }
};

function NightOrDay(self) {            
    var color = 'powderblue';    

    if (self.value === 'night') {
        Body.setBackgroundColor('#242730');
        Body.setColor('white');
        self.value = 'day';
    }
    else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = 'night';
        color = 'blue'
    }
    
    // var lis = document.querySelectorAll('li');
    // for(i=0; i<lis.length; i++)
    // {
    //     lis[i].style.color = color;
    //     lis[i].style.fontWeight = 'bold';
    // }

    $('li').css('color', color);
    $('li').css('fontWeight', 'bold');
}