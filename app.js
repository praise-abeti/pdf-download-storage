
// ================================
// PDF DOWNLOAD COUNT
// ================================
const pdfDownload = document.getElementById('pdf_download');
const countDisplay = document.getElementById('count_display');

let countDownloads = 0;
let daysToLive = 365 * 10
pdfDownload.addEventListener('click', () => {
    console.log(countDownloads++);
    createCookies('downloads', countDownloads, daysToLive)
    countDisplay.innerHTML = getCookies('downloads');
    
});

// Storage Function
countDownloads = getCookies('downloads')
getCookies('downloads')
countDisplay.innerHTML = countDownloads

// Delete Cookie usign 👉 deleteCookies('downloads')

// Cookie Storage
function createCookies(name, value, expires){
    let date = new Date;
    date.setTime(date.getTime() + (expires*24*60*60*1000))
    let expire = 'expires=' + date.toUTCString();
    document.cookie = `${name}=${value}; ${expire}; path=/`
}

function deleteCookies(name){
    createCookies(name, null, null)
}

function getCookies(name){
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null;

    cArray.forEach(element =>{
        if(element.indexOf(name) == 0){
            result = element.substring(name.length + 1)
        }
    })

    return result
}