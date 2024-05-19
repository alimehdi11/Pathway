const processes = [
  {
    img:"./images/Process - Application.png",
    step:"./images/15.png",
    heading:"1.Application",
    description:"Apply to join the program by filling the form with your details here"
  },
  {
    img:"./images/Process - Interview.png",
    step:"./images/16.png",
    heading:"2.Interview",
    description:"Once you applied, you will have an informational session to explain further the program and take part of interview to further access your elgibility."
  },
  {
    img:"./images/Process - Payment.png",
    step:"./images/17.png",
    heading:"3.Fee Payment",
    description:"If accepted the candidate will be sent a contact that includes the fee,will be asked to pay the fee."
  },
  {
    img:"./images/Process - Enjoy.png",
    step:"./images/18.png",
    heading:"4.Enjoy!",
    description:"Once the fee is settled the candidate will be officially embark their journy abroad and live their experience to the fullest!"
  },
]

//get elements
let menuBtn = document.querySelector(".menu");
let sideBar = document.querySelector(".sidebar");
let overlay = document.querySelector(".overlay");
let process = document.querySelector(".process");
let mobile_process = document.querySelector(".mobile-process");
let step = 0;
const setCardData = (icon) => {
  mobile_process.innerHTML=`
  <div class="flex between vcenter">
    <h3>${processes[step].heading}</h3>
    <button class="bg1 card-icon" id="cardBtn">
      <i class="fa-solid ${icon}"></i>
    </button>
  </div>
  <div class="process-content">
    <img src="${processes[step].img}" alt="">
    <p>${processes[step].description}</p>
  </div>
  <img src="${processes[step].step}" class="stepper" alt="">`
  
  // Add event listener for cardBtn inside setCardData
  let cardBtn = document.querySelector("#cardBtn");
  cardBtn.addEventListener("click", () => {
    step = (step + 1) % processes.length;
    if(step == processes.length -1){
      setCardData("fa-angle-left");
    }
    else{
      setCardData("fa-angle-right");
    }
  });
}

setCardData("fa-angle-right");

//functions definations
const handleSidebar = () =>{
  sideBar.classList.toggle("active")
  overlay.classList.toggle("active")
};

for(let elem of processes){
  process.innerHTML+=
  `
  <div class="process-content between">
    <img src="${elem.img}" alt="">
    <div>
      <h3>${elem.heading}</h3>
      <p>${elem.description}</p>
    </div>
  </div>
  `
}
