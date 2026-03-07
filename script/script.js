
function countDown() {
    
    let yearDisplay = document.getElementById("yearCount") ;
    let date = new Date() ;
    let anniInfo = '2018 21:23:45 Mar 25' ;
    let currentYear = date.getFullYear() ;
    let anniDate = new Date(anniInfo) ;
    let anniYear = anniDate.getFullYear() ;
    let yearCount = currentYear - anniYear ;
    let monthsDisplay = document.querySelector(".countMonths") ;
    let weeksDisplay = document.querySelector(".countWeeks") ;
    let dateDisplay = document.querySelector(".countDates") ;

    //set yeardisplay 
    yearDisplay.textContent = yearCount ;

    let countdown = date - anniDate;
    // let daysPass = Math.floor(countdown / 1000 / 60 / 60 / 24) + 1;
    // // let weeksPass = Math.floor 
    let days = Math.ceil(countdown / 86400000) ; 
    // 1 day = 86400000ms 
    let months = (countdown / 2629800000).toFixed() ;
    //1 month = 2629800000ms
    let weeks = (countdown / 604800000).toFixed() ;
    //1 week = 604800000ms 

    dateDisplay.textContent = days ;
    weeksDisplay.textContent = weeks ;
    monthsDisplay.textContent = months ;
    
}

setInterval(countDown() , 1000 ) ;



//Setup Observer

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // Check if the element is visible on screen 
        if (entry.isIntersecting) {
            // Add the CSS class that triggers the animation 
             entry.target.classList.add('start-typing') ;

             // (Optional) Stop watching so it only happens once 
             observer.unobserve(entry.target) ; 
        }
    }) ;
} , { threshold : 0.5}) ; //Trigger when 50% of the text is visible 

//Tell the observer to watch my .textBox 

const target = document.querySelector('.textBox') ;
observer.observe(target) ;
