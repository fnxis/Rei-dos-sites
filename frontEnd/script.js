var tl = gsap.timeline({
    scrollTrigger:{
        trigger:'.two',
        start:'0% 95%',
        end:'50% 50%',
        scrub:true,
       // markers:true,//
    },
});

tl.to(
    '#fanta',
    {
        top: '120%',
        left: '1%',
    },
    'orange'
);

tl.to(
    '#orange-cut',
    {
        top: '158%',
        left: '22%',
    },
    'orange'
);

tl.to(
    '#leaf',
    {
        top: '110%',
        left: '70%',
        rotate: '430deg',
    },
    'orange'
);

tl.to(
    '#leaf2',
    {
        top: '110%',
        left: '0%',
        rotate: '490deg',
    },
    'orange'
);
tl.to(
    '#orange',
    {
        top: '160%',
        left: '70%',
        rotate: '360deg',
    },
    'orange'
);

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:'.three',
        start:'0% 95%',
        end:'30% 50%',
        scrub:true,
     //   markers:true,//
    },
});

tl2.from(
    '.lemon1',
    {
        rotate:'-90deg',
        left:'-100%',
        top: '110%',
    },
    'coca'
);
tl2.from(
    '#cocacola',
    {
        rotate:'-90deg',
        left:'-100%',
        top: '110%',
    },
    'coca'
);
tl2.from(
    '#pepsi',
    {
        rotate:'-90deg',
        left:'-100%',
        top: '110%',
    },
    'coca'
);

tl2.to(
    '#orange-cut',
    {
        left:'41%',
        top: '211%',
        width: '320px',
    },
    'coca',
);

tl2.to(
    '#fanta',
    {
        left:'37%',
        top: '227%',
        width: '25%',
    },
    'coca',
);