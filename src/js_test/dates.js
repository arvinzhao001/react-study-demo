//write a function to find all images without alternate text and give them a red border
export function FindImagesWithoutAltText() {
    const images = document.getElementsByTagName('img');
    for (let img of images) {
        if (!img.hasAttribute('alt') || img.getAttribute('alt') === '') {
            img.style.border = '1px solid red';
        }
    }
}

export function CalculateDaysUntilChristmas() {
    const today = new Date();
    const year = today.getFullYear();
    const christmas = new Date(year, 11, 25); // December 25th

    // If today is after Christmas, calculate for next year's Christmas
    if (today > christmas) {
        christmas.setFullYear(year + 1);
    }

    const oneDay = 24 * 60 * 60 * 1000; // milliseconds in one day
    const daysUntilChristmas = Math.ceil((christmas - today) / oneDay);

    return daysUntilChristmas;
}

