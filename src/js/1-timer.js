import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css"
import errorIcon from "../img/iconizer-free-icon-font-cross-circle-3917206.svg";

const ref= {
    btnStart: document.querySelector('[data-start]'),
    timerDays: document.querySelector('[data-days]'),
    timerHours: document.querySelector('[data-hours]'),
    timerMinutes: document.querySelector('[data-minutes]'),
    timerSeconds: document.querySelector('[data-seconds]'),
};
ref.btnStart.disabled = true;
// let userSelectedDate = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const currentDate = new Date();
        if((selectedDates[0] - currentDate) > 0) {
            ref.btnStart.disabled = false;
        } else {
            ref.btnStart.disabled = true;
            iziToast.error({
                message: 'Please choose a date in the future',
                backgroundColor: 'red',
                messageColor: 'white',
                position: 'topRight',
                iconUrl: errorIcon,
                iconColor: '#959595',
            });
        }
    },
  };

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    return { days, hours, minutes, seconds };
  }
  
  function addLeadingZero(value) {
    return String(value).padStart(2, 0);
  }
function onTimer() {
    const selectedDates = flatPic.selectedDates[0];
    setInterval(()=> {
        const currentDate = new Date();
        const countDate = selectedDates - currentDate;
        ref.btnStart.disabled = true;
        if(countDate < 0) {
            return
        }
          updateTimer(convertMs(countDate));
        }, 1000); 
}

function updateTimer({ days, hours, minutes, seconds }) {
    ref.timerDays.textContent = addLeadingZero(days);
    ref.timerHours.textContent = addLeadingZero(hours);
    ref.timerMinutes.textContent = addLeadingZero(minutes);
    ref.timerSeconds.textContent = addLeadingZero(seconds);
  }

const flatPic = flatpickr("#datetime-picker", options);
ref.btnStart.addEventListener('click', onTimer);
