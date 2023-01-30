
// ================================
// PDF DOWNLOAD COUNT
// ================================
const pdfDownload = document.getElementById('pdf_download');
const countDisplay = document.getElementById('count_display');

let countDownloads = 0;
countDisplay.innerHTML = countDownloads;

pdfDownload.addEventListener('click', () => {
    console.log(countDownloads++);
    countDisplay.innerHTML = countDownloads;
});