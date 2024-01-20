function updateClock() {
    //Date
    const curr = new Date();
    //Hours
    const h = curr.getHours();
    //Minutes
    const m = curr.getMinutes();
    //Seconds
    const s = curr.getSeconds();

    //Angles Calculation (Mathematical)..!!
    const hAngle = (((h % 12) * 30) + m * 0.5);
    const mAngle = m * 6;
    const sAngle = s * 6;

    // Needles Rotation according to Angle..! (using Transform CSS Property)
    //Hour Line
    $("#hLine").css("transform", `rotate(${hAngle}deg)`).children(".clock_number").html(h).css("transform", `rotate(${-hAngle}deg)`);
    //Minute Line
    $("#mLine").css("transform", `rotate(${mAngle}deg)`).children(".clock_number").html(m).css("transform", `rotate(${-mAngle}deg)`);
    //Second Line
    $("#sLine").css("transform", `rotate(${sAngle}deg)`).children(".clock_number").html(s).css("transform", `rotate(${-sAngle}deg)`);
}

//Update the clock every second (1 sec = 1000 msec)
setInterval(updateClock, 1000);

//Function Call to initialize Clock and Display on Page
updateClock();

/*
    $("#hourLine") :: Selects HTML element with ID (hourLine) using jQuery
    
    .css("transform", `rotate(${hAngle}deg)`) :: property to rotate element by angle 

    .children(".clock_number") :: selects the child elements of "hourLine" element that have class "clock-number". It essentially targets the clock numbers associated with the hour hand.

    .html(h) :: This part sets the HTML content of the selected elements (clock numbers) to the calculated hours. It updates the displayed hour value near the hour hand.

    .css("transform", rotate(${-hAngle}deg)) :: This part sets the CSS transform property for the selected clock number elements to rotate them in the opposite direction by the negative of the hourAngle. This ensures that the clock numbers are displayed upright and correctly aligned with the hour hand.
*/

/*
The fourth point is all about making sure the numbers on the clock (the ones that represent the hours) are displayed correctly.

Imagine the hour hand pointing at 3 on the clock. If you just rotate the numbers by the same angle as the hour hand, the numbers would appear upside down. So, to make them look right-side up and aligned properly with the hour hand, you rotate the numbers in the opposite direction (that's why it uses the negative sign in front of hourAngle). This way, the numbers always stay readable and correctly positioned next to the hour hand, no matter where it is on the clock.
*/