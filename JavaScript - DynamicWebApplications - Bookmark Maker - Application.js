// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/

let bookmarkFormEl = document.getElementById("bookmarkForm");
let siteNameInputEl = document.getElementById("siteNameInput");
let siteNameErrMsgEl = document.getElementById("siteNameErrMsg");
let siteUrlInputEl = document.getElementById("siteUrlInput");
let submitBtnEl = document.getElementById("submitBtn");
let siteUrlErrMsgEl = document.getElementById("siteUrlErrMsg");
let bookmarksListEl = document.getElementById("bookmarksList");

function AddBookMark() {
    let siteName = siteNameInputEl.value;
    let siteurl = siteUrlInputEl.value;
    let litItem = document.createElement("li");
    bookmarksListEl.appendChild(litItem);
    let bookmarkName = document.createElement("p");
    let bookmarkUrl = document.createElement("a");
    bookmarkName.textContent = siteName;
    bookmarkUrl.textContent = siteurl;
    bookmarkUrl.href = siteurl;
    bookmarkUrl.target = "_blank";
    bookmarksListEl.classList.toggle("d-none");
    litItem.appendChild(bookmarkName);
    litItem.appendChild(bookmarkUrl);

}

siteNameInputEl.addEventListener("change", function(Event) {
    if (Event.target.value === "") {
        siteNameErrMsgEl.textContent = "Required*";
    } else {
        siteNameErrMsgEl.textContent = "";
    }
});

siteUrlInputEl.addEventListener("change", function(Event) {
    if (Event.target.value === "") {
        siteUrlErrMsgEl.textContent = "Required*";
    } else {
        siteUrlErrMsgEl.textContent = "";
    }
});


bookmarkFormEl.addEventListener("submit", function(Event) {
    Event.preventDefault();
    AddBookMark();
});