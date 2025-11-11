// Get references to the date pickers
const datePicker1 = document.getElementById('datePicker1');
const datePicker2 = document.getElementById('datePicker2');

// Get today's date
const today = new Date();
const formattedToday = today.toISOString().split('T')[0];

// Set the minimum date for datePicker1 and datePicker2 to today
datePicker1.min = formattedToday;
datePicker2.min = formattedToday;

// Attach event listener to datePicker1
datePicker1.addEventListener('change', function () {
    const selectedDate1 = new Date(datePicker1.value);
    const selectedDate2 = new Date(datePicker2.value);

    const oneDayInMilliseconds = 24 * 60 * 60 * 1000;

    if (selectedDate1 - selectedDate2 < oneDayInMilliseconds) {
        const nextDay2 = new Date(selectedDate1);
        nextDay2.setDate(selectedDate1.getDate() + 1);
        datePicker2.value = nextDay2.toISOString().split('T')[0];
    }
});

// Attach event listener to datePicker2
datePicker2.addEventListener('change', function () {
    const selectedDate1 = new Date(datePicker1.value);
    const selectedDate2 = new Date(datePicker2.value);

    const oneDayInMilliseconds = 24 * 60 * 60 * 1000;

    if (selectedDate2 - selectedDate1 < oneDayInMilliseconds) {
        const previousDay1 = new Date(selectedDate2);
        previousDay1.setDate(selectedDate2.getDate() - 1);
        datePicker1.value = previousDay1.toISOString().split('T')[0];
    }
});

// Disable dates in datePicker1 that are later than today
datePicker1.addEventListener('input', function () {
    const selectedDate1 = new Date(datePicker1.value);
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    if (selectedDate1 > tomorrow) {
        datePicker1.value = '';
    }
});

// Disable dates in datePicker2 that are more than one day later than today
datePicker2.addEventListener('input', function () {
    const selectedDate2 = new Date(datePicker2.value);
    const dayAfterTomorrow = new Date(today);
    dayAfterTomorrow.setDate(today.getDate() + 2);

    if (selectedDate2 > dayAfterTomorrow) {
        datePicker2.value = '';
    }
});
