import UrlBuilder from './UrlBuilder.js';

const urlBuilder = new UrlBuilder('https://google.com')
const googleUrl = urlBuilder.build();
console.log(googleUrl);

const thisMonth = 'October';
export let day = 13;
export function printTheDate() {
  console.log(`The month is: ${thisMonth}, and the day is: ${day}`);
}

export { thisMonth as month }
