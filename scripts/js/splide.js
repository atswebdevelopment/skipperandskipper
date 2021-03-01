const splides = document.querySelectorAll('.splide')

splides.forEach((e, i) => {
    let perMove = 1
    let focus = 'center'
    let trimSpace = true
    let arrows = false
    let height = '526'
    let type = 'slide'
    let fixedWidth = '526'
    let pagination = false

    // if (e.classList.contains('splide--vertical')) {
    //     direction = 'ttb'
    //     height = '526px'
    //     perPage = 3
    // } else {
    //     perPage = window.innerWidth < 767 ? perPage : 2
    // }
    new Splide(e, {
        type,
        arrows,
        height,
        fixedWidth,
        perMove,
        focus,
        trimSpace,
        pagination
        // arrowPath: "M40,5.765,34.483,0,20,15.181,5.517,0,0,5.765l20,20.9Z"
        // breakpoints: {
        //     600: {
        //         perPage: 2,
        //         height : '6rem',
        //     }
        // }
    }).mount()
})
