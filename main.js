import './style.css'


let icon = document.querySelector('.icon');
icon.addEventListener('mousedown', e => {
  e.preventDefault();
  console.log('Mouse Down');
  populateData();
});
icon.addEventListener('touchstart', e => {
  console.log('Touch Down');
  populateDataforTouch();
});
document.addEventListener('touchend', e => {
  console.log('Touch Up')
  document.removeEventListener('touchmove', setIconPosition, false)
});
document.addEventListener('mouseup', e => {
  console.log('Mouse Up')
  document.removeEventListener('mousemove', setIconPosition, false)
})

function setIconPosition(e) {
  console.log(`SET ICON: ${e.clientX}, ${e.clientY}`);
  document.querySelector('.float-app').style.left = `${e.clientX}px`
  document.querySelector('.float-app').style.top = `${e.clientY}px`
}

document.querySelector('.container').addEventListener('click', e => {
  console.log('Inside Click')
  if (e.target.tagName === 'IMG') {
    let appContent = document.querySelector('.app-content');
    let container = document.querySelector('.container');

    if (Math.trunc(container.offsetWidth / 2) > Math.ceil(e.clientX)) {
      console.log('Extend Right Side')
      if (getComputedStyle(appContent).display === 'none') {
        appContent.style.display = 'block';
        document.querySelector('.float-app').classList.add('dynamic');
      } else {
        appContent.style.display = 'none';
        document.querySelector('.float-app').classList.remove('dynamic');
      }
    } else {
      console.log('Extend Left Side')
      if (getComputedStyle(appContent).display === 'none') {
        appContent.style.display = 'block';
        document.querySelector('.float-app').classList.add('dynamic');
      } else {
        appContent.style.display = 'none';
        document.querySelector('.float-app').classList.remove('dynamic');
      }
    }
  }
});

let populateData = () => {
  document.addEventListener('mousemove', setIconPosition, false)
}
let populateDataforTouch = () => {
  document.addEventListener('touchmove', setIconPosition, false)
}
// document.querySelector('.container').addEventListener('mousemove', e => {
//   console.log(e.clientX);
//   console.log(e.clientY)
// })
// document.querySelector('.icon').addEventListener('click', e => {
//   console.log('Clicked');
//   let container = document.querySelector('.container')
//   let appContent = document.querySelector('.app-content');
//   let containerRect = container.getBoundingClientRect()
//   let appContentRect = appContent.getBoundingClientRect()
//   console.log('Conatiner:', containerRect);
//   console.log('App: ', appContentRect);
//   console.log('Container Mid ', Math.trunc(containerRect.width / 2));
//   console.log('App Left: ', Math.trunc(appContentRect.x - appContentRect.width));
//   // console.log(`Offset Y: ${appContentRect.left - containerRect.left}`);
//   // console.log(`Offset X: ${appContentRect.top - containerRect.top}`);
//   // document.querySelector('.float-app').style.top = '0';
//   let num = Math.trunc(Math.random() * 1000)
//   console.log(num)
//   document.querySelector('.float-app').style.left = `${num}px`;

//   /*if (getComputedStyle(appContent).display === 'none') {
//     appContent.style.display = 'block';
//   } else {
//     appContent.style.display = 'none';
//   }*/
//   e.preventDefault();
// })