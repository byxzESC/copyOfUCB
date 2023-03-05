export const headerClick = () => {
  const header = document.getElementById('header');
  if (header.style.color === 'blue') {
    console.log('in if')
    header.style.color = 'black';
  } else {
    console.log('in else')
    header.style.color = 'blue';
  }
};
// TODO: Try changing the 'blue' to 'orange' to see if hot reloading works

// export const headerClick = () => {
//   const header = document.getElementById('header');
//   if (header.style.color === 'blue') {
//     header.style.color = 'black';
//   }
//   if (header.style.color === 'black') {
//     header.style.color = 'orange';
//   }  
//   if (header.style.color !== 'blue' && header.style.color !== 'black') {
//     header.style.color = 'blue';
//   }
// };