const profileElement1 = document.getElementById("profile-element1");
const profileElement2 = document.getElementById("profile-element2");
const profileElement3 = document.getElementById("profile-element3");
const feedBack1 = document.getElementById("feedback1");
const feedBack2 = document.getElementById("feedback2");
const feedBack3 = document.getElementById("feedback3");

const aboutProfile = document.getElementById("about-profile");
const contactDoc = document.getElementById("contact-doc");
const upButton = document.getElementById("up-button");
const removeHidden1 = function () {
  aboutProfile.classList.remove("hidden");
  aboutProfile.classList.add("opacity");
  // console.log("隠した");
};
const addHidden1 = function () {
  aboutProfile.classList.remove("opacity");
  aboutProfile.classList.add("hidden");
  // console.log("隠した");
};
const removeHidden2 = function () {
  contactDoc.classList.remove("hidden");
  contactDoc.classList.add("opacity");
  // console.log("隠した");
};
const addHidden2 = function () {
  contactDoc.classList.remove("opacity");
  contactDoc.classList.add("hidden");
  // console.log("隠した");
};

window.addEventListener("scroll", function () {
  if ((400 < window.scrollY) & (window.scrollY <= 1400)) {
    removeHidden1();
  } else {
    addHidden1();
  }
});
window.addEventListener("scroll", function () {
  if (1200 < window.scrollY) {
    removeHidden2();
  } else {
    addHidden2();
  }
});
window.addEventListener("scroll", function () {
  if (800 < window.scrollY) {
    upButton.classList.remove("hidden");
    upButton.classList.add("opacity");
  } else {
    upButton.classList.remove("opacity");
    upButton.classList.add("hidden");
  }
});

const submitButton = document.getElementById("submit-button");
// console.log(nameValue);
const inputName = document.getElementById("name-input");
const inputMail = document.getElementById("mail-input");
const inputPhone = document.getElementById("phone-input");
const inputQuestion = document.getElementById("question-input");
submitButton.onclick = function () {
  let full = 0;
  if (inputName.value == "") {
    full = 1;
  } else if (inputMail.value == "") {
    full = 1;
  } else if (inputPhone.value == "") {
    full = 1;
  } else if (inputQuestion.value == "") {
    full = 1;
  }

  if (full == 0) {
    const nameValue = String(inputName.value);
    alert(nameValue + "様、本当に送信してもよろしいですか？");
    // console.log("送信してもよろしいですか？");
  } else {
    alert("お問い合わせ内容が記入されていません。");
  }
};
