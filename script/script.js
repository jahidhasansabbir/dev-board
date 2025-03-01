const completedBtns = document.querySelectorAll(".completed");
let taskAssigned = parseInt(document.getElementById("task-assigned").innerText);
let taskCount = parseInt(document.getElementById('task-count').innerText);

// time
const monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'nov', 'Dec'];
const dayList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const time = new Date();
const year = time.getFullYear()
const month = time.getMonth();
const day = time.getDay();
const date = time.getDate();
const hr = time.getHours();
const min = time.getMinutes();
const sec = time.getSeconds();

document.getElementById('day').innerText=dayList[day];
document.getElementById('month').innerText=monthList[month];
document.getElementById('date').innerText=date;
document.getElementById('year').innerText=year;

// completed btn
for (btn of completedBtns) {
  btn.addEventListener("click", function (e) {
    
    alert('Board updated Successfully');
    e.target.disabled = true;
    taskAssigned--;
    taskCount++;
    document.getElementById("task-assigned").innerText = taskAssigned;
    document.getElementById('task-count').innerText = taskCount;
    (taskAssigned===0)?alert("Congrats! You have completed all the current task."):"";
    const cardTitle =
      e.target.parentNode.parentNode.childNodes[2].nextSibling.innerText;
    const div = document.createElement("div");
    div.innerHTML = `
        <p class="p-3 rounded-lg bg-[#F4F7FF] ml-7 mr-4 my-6">You have Complete The Task ${cardTitle} at ${hr%12}:${min}:${sec}${(hr>12)?'PM':'AM'}</p>
        `;
    document.getElementById("activity-log").appendChild(div);
  });
}
// clear history btn
document.getElementById('clear-history-btn').addEventListener('click', function(){
    document.getElementById('activity-log').innerText = '';
})

// theme-btn
document.getElementById('theme-btn').addEventListener('click', function(){
  const red = Math.round(Math.random()*255);
  const green = Math.round(Math.random()*255);
  const blue = Math.round(Math.random()*255);
  document.body.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${0.3})`;
  console.log('dd')
})

