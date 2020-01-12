

const oneStarColor = '#FF5D00';
const twoStarColor = '#FFA800';
const threeStarColor = '#DAE700';
const fourStarColor = '#ABD02D';
const fiveStarColor = '#67C600';

// if (document.getElementsByClassName('rating__text_bold')[0].textContent === '4.0') {
//     let parentSVG = this.parentNode.getElementsByTagName('svg path');
//     parentSVG.fill = fiveStarColor;
// }


let rating = document.getElementsByClassName('rating__text_bold')[0];

console.log(rating.parentNode.parentNode.parentNode);
console.log(rating.parentNode.parentNode.parentNode.children[0].children[0].children);
rating.parentNode.parentNode.parentNode.children[0].children[0].children.fill = oneStarColor;

// switch-case???

// let rating = document.getElementsByClassName('rating__text_bold');
// console.log(rating);
//
// let ratingList = [];
// for(let i = 0; i < rating.length; i++) {
//     ratingList.push(parseFloat(rating[i].textContent));
// }
//
// console.log(ratingList);
//
// for (let i = 1; i <=5; i++) {
//
// }
//
// let paintingStars = function(number) {
//
//
//
// };