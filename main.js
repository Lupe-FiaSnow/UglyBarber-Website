const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');



    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
         navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index/5+0.5}s`;
            }
         });
         //Burger Animation
         burger.classList.toggle('toggle');
    });

}
navSlide();

var dayOfWeek = (new Date).getDay();
var hours = ["Closed",          // Sunday
             "9.30 AM to 6 PM",   // Monday
             "9.30 AM to 6 PM",   // Tuesday
             "9.30 AM to 6 PM",   // Wednesday
             "9.30 AM to 6 PM",   // Thursday
             "9.30 AM to 6 PM",   // Friday
             "9 PM to 4.20 PM"];  // Saturday
var todaysHours = hours[dayOfWeek];
document.getElementById("hours").innerHTML = todaysHours;