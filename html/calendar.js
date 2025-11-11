
    // Get references to the date pickers
    const datePicker1 = document.getElementById('datePicker1');
    const datePicker2 = document.getElementById('datePicker2');
    
    // Get today's date 
    /*const today = new Date();
    const formattedToday = today.toISOString().split('T')[0];
    
    // Set the minimum date for datePicker1 to today
    datePicker1.min = formattedToday;
    
    // Attach an event listener to datePicker1
    datePicker1.addEventListener('change', function() {
        
        // Get the selected date from datePicker1
        const selectedDate = new Date(datePicker1.value);

        // Calculate the next day's date
        const nextDay = new Date(selectedDate);
        nextDay.setDate(selectedDate.getDate() + 1);

               
        // Format the next day's date as YYYY-MM-DD
        const formattedNextDay = nextDay.toISOString().split('T')[0];
        
        // Set the formatted next day's date as the value of datePicker2
        datePicker2.value = formattedNextDay;
        
    });*/

     // Get today's date 
 const today = new Date();
 const formattedToday = today.toISOString().split('T')[0];


    // Set the minimum date for datePicker1 to today
    datePicker1.min = formattedToday;

      // Attach an event listener to datePicker1
      datePicker1.addEventListener('change', function() {

        const selectedDate = new Date(datePicker1.value);
        
        // Get the selected date from datePicker1
        const selectedDate3 = new Date(datePicker2.value);
    
        // Calculate the difference in days between the two selected dates
        const dayDifference1 = (selectedDate - selectedDate3) / (1000 * 60 * 60 * 24);
    
        // If the difference is more than 1 day, adjust datePicker1's date
        if (dayDifference1 <= 1) {
            const nextDay = new Date(selectedDate);
            nextDay.setDate(selectedDate.getDate() + 1);
    
            // Format the before day's date as YYYY-MM-DD
            const formattednextDay = nextDay.toISOString().split('T')[0];
    
            // Set the formatted before day's date as the value of datePicker1
            datePicker2.value = formattednextDay;
        }
        else if(selectedDate !== null && selectedDate3 == null){
            const nextDay = new Date(selectedDate);
            nextDay.setDate(selectedDate.getDate() + 1);
    
            // Format the before day's date as YYYY-MM-DD
            const formattednextDay = nextDay.toISOString().split('T')[0];
    
            // Set the formatted before day's date as the value of datePicker1
            datePicker2.value = formattednextDay;
        }
       /* else if (dayDifference >= 1){
            const nextDay = new Date(selectedDate);
            nextDay.setDate(selectedDate.getDate() + 100);
    
            // Format the before day's date as YYYY-MM-DD
            const formattednextDay = nextDay.toISOString().split('T')[0];
    
            // Set the formatted before day's date as the value of datePicker1
            datePicker2.value = formattednextDay;
        }*/
    
        
      
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
        const dayDifference = (selectedDate2 - selectedDate1) / (1000 * 60 * 60 * 24);
    
        // If the difference is more than 1 day, adjust datePicker1's date
        if (dayDifference < 1) {
            const beforeDay = new Date(selectedDate2);
            beforeDay.setDate(selectedDate2.getDate() - 1);
    
            // Format the before day's date as YYYY-MM-DD
            const formattedBeforeDay = beforeDay.toISOString().split('T')[0];
    
            // Set the formatted before day's date as the value of datePicker1
            datePicker1.value = formattedBeforeDay;
        }
        else if (dayDifference >= 1){
            
        }
    
        
      
    });
    