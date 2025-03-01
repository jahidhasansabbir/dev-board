const completedBtns = document.querySelectorAll(".completed");
let taskAssigned = parseInt(document.getElementById("task-assigned").innerText);

for (btn of completedBtns) {
  btn.addEventListener("click", function (e) {
    const date = new Date();
    const hr = date.getHours() % 12 || 12;
    const min = String(date.getMinutes()).padStart(2, "0");
    const sec = String(date.getSeconds()).padStart(2, "0");
    const amPm = date.getHours() >= 12 ? "PM" : "AM";
    // alert('Board updated Successfully');
    e.target.disabled = true;
    taskAssigned--;
    document.getElementById("task-assigned").innerText = taskAssigned;
    const cardTitle =
      e.target.parentNode.parentNode.childNodes[2].nextSibling.innerText;
    const div = document.createElement("div");
    div.innerHTML = `
        <p class="p-3 rounded-lg bg-[#F4F7FF] ml-7 mr-4 my-6">You have Complete The Task ${cardTitle} at ${hr}:${min}:${sec} ${amPm}</p>
        `;
    document.getElementById("activity-log").appendChild(div);
    console.log(div.innerText);
  });
}
