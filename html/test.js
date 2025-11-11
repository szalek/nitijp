   /* // Get references to the date pickers
    const datePicker1 = document.getElementById('datePicker1');
    const datePicker2 = document.getElementById('datePicker2');

    const today = new Date();
    const formattedToday = today.toISOString().split('T')[0];
    
    // Set the minimum date for datePicker2 to today
    datePicker1.min = formattedToday;
    
    datePicker1.addEventListener('change', function() {
        // Get the selected date from datePicker1
        const selectedDate1 = new Date(datePicker1.value);    
           
        // Get the selected date from datePicker2
        const selectedDate2 = new Date(datePicker2.value);
        
    
        // Calculate the difference in days between the two selected dates
        const dayDifference = (selectedDate1 - selectedDate2) / (86400);
    
        // If the difference is more than 1 day, adjust datePicker1's date
        if (dayDifference < 1) {
            const nextDay = new Date(selectedDate1);
            nextDay.setDate(selectedDate1.getDate() + 1);
    
            // Format the before day's date as YYYY-MM-DD
            const formattednextDay = nextDay.toISOString().split('T')[0];
    
            // Set the formatted before day's date as the value of datePicker1
            datePicker1.value = formattednextDay;
        }
    }); 
// Get references to the date pickers
const datePicker1 = document.getElementById('datePicker1');
const datePicker2 = document.getElementById('datePicker2');

// Get today's date 
const today = new Date();
const formattedToday = today.toISOString().split('T')[0];

// Set the minimum date for datePicker1 to today
datePicker1.min = formattedToday;

// Attach an event listener to datePicker1
datePicker1.addEventListener('change', function () {
    const selectedDate1 = new Date(datePicker1.value);
    const selectedDate2 = new Date(datePicker2.value);

    // Calculate the next day's date
    const nextDay1 = new Date(selectedDate1);
    nextDay1.setDate(selectedDate1.getDate() + 1);

    // If datePicker1's next day is after datePicker2's date, adjust datePicker2
    if (nextDay1 > selectedDate2) {
        const formattedNextDay1 = nextDay1.toISOString().split('T')[0];
        datePicker2.value = formattedNextDay1;
    }
    
    const selectedDate = new Date(datePicker1.value);
        
        // Calculate the next day's date
        const nextDay = new Date(selectedDate);
        nextDay.setDate(selectedDate.getDate() + 1);
        
        // Format the next day's date as YYYY-MM-DD
        const formattedNextDay = nextDay.toISOString().split('T')[0];
        
        // Set the formatted next day's date as the value of datePicker2
        datePicker2.value = formattedNextDay;
        
    


});

 // Get today's date
 const today2 = new Date();
 const formattedToday2 = today.toISOString().split('T')[0];
 
 // Set the minimum date for datePicker2 to today
 datePicker2.min = formattedToday2;

// Attach an event listener to datePicker2
datePicker2.addEventListener('change', function () {
    const selectedDate1 = new Date(datePicker1.value);
    const selectedDate2 = new Date(datePicker2.value);

    // Calculate the previous day's date
    const previousDay2 = new Date(selectedDate2);
    previousDay2.setDate(selectedDate2.getDate() - 1);

    // If datePicker2's previous day is before datePicker1's date, adjust datePicker1
    if (previousDay2 < selectedDate1) {
        const formattedPreviousDay2 = previousDay2.toISOString().split('T')[0];
        datePicker1.value = formattedPreviousDay2;
    }
});

    */











    // Get references to the date pickers
    const datePicker1 = document.getElementById('datePicker1');
    const datePicker2 = document.getElementById('datePicker2');
    
    // Get today's date 
    const today = new Date();
    const formattedToday = today.toISOString().split('T')[0];
    
    // Set the minimum date for datePicker1 to today
    datePicker1.min = formattedToday;
    
    // Attach an event listener to datePicker1
    datePicker1.addEventListener('change', function() {
        
        // Get the selected date from datePicker1
        const selectedDate = new Date(datePicker1.value);
        //const selectedDate3 = new Date(datePicker2.value);

        // Calculate the next day's date
        const nextDay = new Date(selectedDate);
        nextDay.setDate(selectedDate.getDate() + 1);

 
        /*if (selectedDate > selectedDate3) {
            nextDay.setDate(selectedDate.getDate + 1);
         }
         else {
         nextDay.setDate(selectedDate.getDate + 0);
         }*/
        
        
        // Format the next day's date as YYYY-MM-DD
        const formattedNextDay = nextDay.toISOString().split('T')[0];
        
        // Set the formatted next day's date as the value of datePicker2
        datePicker2.value = formattedNextDay;
        
    });
    
    // Get today's date
    const today2 = new Date();
    const formattedToday2 = today.toISOString().split('T')[0];
    
    // Set the minimum date for datePicker2 to today
    datePicker2.min = formattedToday2;
    
    datePicker2.addEventListener('change', function() {
        // Get the selected date from datePicker2
        const selectedDate2 = new Date(datePicker2.value);
        
        // Get the selected date from datePicker1
        const selectedDate1 = new Date(datePicker1.value);
    
        // Calculate the difference in days between the two selected dates
        const dayDifference = (selectedDate2 - selectedDate1) / (86400);
    
        // If the difference is more than 1 day, adjust datePicker1's date
        if (dayDifference < 1) {
            const beforeDay = new Date(selectedDate2);
            beforeDay.setDate(selectedDate2.getDate() - 1);
            // Format the before day's date as YYYY-MM-DD
            const formattedBeforeDay = beforeDay.toISOString().split('T')[0];
    
            // Set the formatted before day's date as the value of datePicker1
            datePicker1.value = formattedBeforeDay;
        }
        else {
        const beforeDay1 = new Date(selectedDate2)
        beforeDay1.setDate(selectedDate2.getDate + 20)
         // Format the before day's date as YYYY-MM-DD
         const formattedBeforeDay = beforeDay.toISOString().split('T')[0];
    
         // Set the formatted before day's date as the value of datePicker1
         datePicker1.value = formattedBeforeDay;
     }
    
    });





































