// dates.test.js
import { FindImagesWithoutAltText, CalculateDaysUntilChristmas } from './dates';

describe('FindImagesWithoutAltText', () => {
    document.body.innerHTML = `
        <img src="image1.jpg" alt="Image 1">
        <img src="image2.jpg">
        <img src="image3.jpg" alt="">
        <img src="image4.jpg" alt="Image 4">
    `;

    it('should give a red border to images without alt text or with empty alt text', () => {
        FindImagesWithoutAltText();
        const images = document.getElementsByTagName('img');

        expect(images[0].style.border).toBe('');
        expect(images[1].style.border).toBe('1px solid red');
        expect(images[2].style.border).toBe('1px solid red');
        expect(images[3].style.border).toBe('');
    });
});

describe('CalculateDaysUntilChristmas', () => {
    it('should calculate the correct number of days until Christmas', () => {
        const today = new Date();
        const year = today.getFullYear();
        const christmas = new Date(year, 11, 25);

        if (today > christmas) {
            christmas.setFullYear(year + 1);
        }

        const oneDay = 24 * 60 * 60 * 1000;
        const expectedDays = Math.ceil((christmas - today) / oneDay);

        expect(CalculateDaysUntilChristmas()).toBe(expectedDays);
    });
});