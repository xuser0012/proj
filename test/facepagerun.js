let copyText = document.querySelector(".copy-text");
copyText.querySelector("button").addEventListener("click", function () {
    let input = copyText.querySelector("input.text");
    input.select();
    document.execCommand("copy");
    copyText.classList.add("active");
    window.getSelection().removeAllRanges("active");
    setTimeout(function () {
        copyText.classList.remove("active");
    }, 2500);
});



/* JS COPY TO CLIP-BORED*/