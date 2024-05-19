//Select elemeents using  jQuery selectors
let $menuBtn = $(".menu");
let $sideBar = $(".sidebar");
let $overlay = $(".overlay");
let $footerMenu = $("footer ul");
let $accordian = $(".accordian-menu");
let $details = $(".accordian .details");
let $accommodation = $(".accordian .accommodation");
let $card2 = $(".cards2");
let $process = $(".process");
let $mobile_process = $(".mobile-process");
let $input = $(".inpBox input");
let $faqBtn = $(".faq button");

// Toggle sidebar and overlay
const handleSidebar = () => {
  $sideBar.toggleClass("active");
  $overlay.toggleClass("active");
};

// Footer menu active link handling
$footerMenu.children().removeClass("active");
let currentPath = window.location.pathname;
$footerMenu.children().each(function() {
  let $anchor = $(this).find("a");
  if ($anchor.attr("href").slice(1) === currentPath) {
    $(this).addClass("active");
  }
});

// Accordion menu handling
if ($accordian.length) {
  $accordian.on("click", "li", function() {
    $accordian.children().removeClass("active");
    $(this).addClass("active");

    $details.css("display", $accordian.children().first().hasClass("active") ? "flex" : "none");
    $accommodation.css("display", $accordian.children().eq(1).hasClass("active") ? "flex" : "none");
  });
}

// Destinations data
const destinations = [
  { img: "./images/penang1.jpg", name: "Penang, Malaysia", time: "12 hours 50 mins",link:"./destination1.html" },
  { img: "./images/dubai1.jpg", name: "Dubai, UAE", time: "1 hours 10 mins",link:"./destination2.html"},
  { img: "./images/agra1.jpg", name: "Agra, India", time: "10 hours 30 mins",link:"./destination3.html"},
  { img: "./images/cairo1.jpg", name: "Cairo, Egypt", time: "10 hours 30 mins",link:"./destination4.html"}
];

// Render destinations cards
if ($card2.length) {
  destinations.forEach(item => {
    $card2.append(`
      <a href="${item.link}">
        <div class="card">
          <img src="${item.img}" alt="">
          <div class="py-5">
            <div class="flex between vcenter">
              <h4>${item.name}</h4>
              <button class="bg1 card-icon">
                <i class="fa-solid fa-angle-right"></i>
              </button>
            </div>
            <p><i class="fa-solid fa-plane plane-icon"></i> ${item.time}</p>
          </div>
        </div>
      </a>
    `);
  });
}

// Processes data
const processes = [
  { img: "./images/Process - Application.png", step: "./images/15.png", heading: "1. Application", description: "Apply to join the program by filling the form with your details here" },
  { img: "./images/Process - Interview.png", step: "./images/16.png", heading: "2. Interview", description: "Once you applied, you will have an informational session to explain further the program and take part of interview to further access your eligibility." },
  { img: "./images/Process - Payment.png", step: "./images/17.png", heading: "3. Fee Payment", description: "If accepted the candidate will be sent a contract that includes the fee, and will be asked to pay the fee." },
  { img: "./images/Process - Enjoy.png", step: "./images/18.png", heading: "4. Enjoy!", description: "Once the fee is settled the candidate will officially embark on their journey abroad and live their experience to the fullest!" }
];

// Render process content
if ($process.length) {
  processes.forEach(elem => {
    $process.append(`
      <div class="process-content between">
        <img src="${elem.img}" alt="">
        <div>
          <h3>${elem.heading}</h3>
          <p>${elem.description}</p>
        </div>
      </div>
    `);
  });
}

// Mobile process navigation
let step = 0;
const setCardData = (icon) => {
  $mobile_process.html(`
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
    <img src="${processes[step].step}" class="stepper" alt="">
  `);

  // Add event listener for cardBtn
  $("#cardBtn").on("click", () => {
    step = (step + 1) % processes.length;
    setCardData(step == processes.length - 1 ? "fa-angle-left" : "fa-angle-right");
  });
};

if ($mobile_process.length) {
  setCardData("fa-angle-right");
}

// Render destinations based on search query
const renderDestinations = (filteredDestinations) => {
  $card2.html("");
  filteredDestinations.forEach(item => {
    $card2.append(`
      <a href="${item.link}">
        <div class="card">
          <img src="${item.img}" alt="">
          <div class="py-5">
            <div class="flex between vcenter">
              <h4>${item.name}</h4>
              <button class="bg1 card-icon">
                <i class="fa-solid fa-angle-right"></i>
              </button>
            </div>
            <p><i class="fa-solid fa-plane plane-icon"></i> ${item.time}</p>
          </div>
        </div>
      </a>
    `);
  });
};

// Filter destinations on input
if ($input.length) {
  $input.on("input", (e) => {
    const searchQuery = e.target.value.toLowerCase();
    const filteredDestinations = destinations.filter(destination =>
      destination.name.toLowerCase().includes(searchQuery)
    );
    renderDestinations(filteredDestinations);
  });
}

// FAQ button toggle
if ($faqBtn.length) {
  $faqBtn.on("click", function() {
    $(this).find("i").toggleClass('fa-plus fa-minus');
    $(this).parent().next().toggleClass("active");
  });
}
