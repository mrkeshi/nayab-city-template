class animateNumberScroll {
        status = 0;
        settings = {
        time: 5000,
        parentSelector: '#keshi',
    };
        options = {};
    constructor(option) {
             this.options = (Object.assign(this.settings, option));
   window.addEventListener("scroll", () => {
            if (this.Comparison() && this.status === 0) {
                this.status = 1;
                this.counter();
            }
        })
    }
    Comparison = () => {
        var offsetTop = document.querySelectorAll(this.settings.parentSelector)[0].offsetTop;
        if (((offsetTop - window.innerHeight)-50) < window.pageYOffset) {
            return true
        }
    };
    counter() {
        var ali;
        var timeout = Math.floor(this.settings.time / 250);
        document.querySelectorAll(this.settings.parentSelector+" "+'[data-count]').forEach((item) => {
            let t = setInterval(() => {
                if (Number(item.innerHTML.match(/[0-9]+/i)[0]) === Number(item.getAttribute('data-count'))) {
                    clearInterval(t);
                    return true;
                }
                ali=item.innerHTML.match(/[0-9]+/i)[0];
                ali=Number(ali)+1;
                item.innerHTML=item.innerHTML.replace(/[0-9]+/g,ali) ;
            }, 100/Number(item.getAttribute('data-count'))*timeout)
        });
    }
}

//  new animateNumberScroll({
//     time: 10000,//Millisecond
//     parentSelector: '#keshi2', // default selector=#keshi
// });


toggle = () => {
    let btn = document.querySelector('.bto');

    let input = document.querySelector('.inpo');

    if (input.className === 'inpo inputcontrolltrue') {
        input.className = 'inpo inputcontrollfalse';
        btn.className = ' bto btfalse';
    } else {
        btn.className = ' bto bttrue';
        input.className = 'inpo inputcontrolltrue';
    }


};
fadein = (el, time) => {
    el.className = 'texter fadeinn';
    let op = setInterval(() => {
        el.style.display = 'block'
    }, time);

};
fadeout = (el, time) => {
    el.className = ' texter fadeoutt';
    let op = setInterval(() => {
        el.style.display = 'none'
    }, time);

};
let conter = 0;
let conter2 = 2;
let conter1 = 0;
window.addEventListener('scroll', () => {
    let scroll = window.scrollY;
    let el = document.getElementById('top');
    if (scroll > 1500) {
        el.style.display = 'block'
    } else {
        el.style.display = 'none'
    }
});


topTo = () => {
    let ali = setInterval(() => {
        let scroll = window.scrollY;

        if (scroll === 0) {

            clearInterval(ali);
        }
        scroll -= 20;
        window.scrollTo(0, scroll)
    }, 10)
};

let co = 1;
togglee = () => {
    let bars = document.getElementById('bars');
    let ul = document.getElementById('ul');

    co++;
    if (co % 2 === 0) {
        bars.className = ' fart fa fa-angle-double-right';
        ul.className = "responsiveUl"
    } else {
        ul.className = "";

        bars.className = ' fart fa fa-bars';

    }
};

