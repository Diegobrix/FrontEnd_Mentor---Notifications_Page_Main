//Elements
const btnClear = document.querySelector(".notifications-clear");
const unreadNotifications = document.querySelectorAll(".notification-fancy");
const display = document.querySelector(".notifications-display");

//Listeners
btnClear.addEventListener("click", ClearNotifications);
window.addEventListener("load", NotificationsCounter);
unreadNotifications.forEach((element) => {
    element.addEventListener("click", ReadNotifications);
});

//Functions
function ClearNotifications() 
{
    unreadNotifications.forEach((element) => {
        element.setAttribute("visualized", "true");
    });

    display.innerHTML = ("0");
}

function NotificationsCounter() 
{
    let notificationsTotal = 0;

    unreadNotifications.forEach(((item) => {
        if(item.getAttribute("visualized") == "false") 
        {
            notificationsTotal += 1;
        }
    }));

    display.innerHTML = (notificationsTotal);
}

function ReadNotifications()
{
    this.setAttribute('visualized', 'true');
}