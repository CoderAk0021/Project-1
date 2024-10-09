const imgContainers = document.querySelectorAll(".image-container");
    const gallery = document.querySelector(".image-gallery");
    const maxWidth = gallery.getBoundingClientRect().width;
    const indicators = document.querySelectorAll(".indicators")



    gallery.onscrollend = (e) => {
      imgContainers.forEach((container, index) => {
        const rect = container.getBoundingClientRect();
        const conX = rect.x;
        const conWidth = rect.width;
        const factor = conWidth - conX
        indicators[index].classList.remove("active")
        if (factor > 0 && factor <= maxWidth)
        {
          indicators[index].classList.add("active")
        }
      })
    }
    
    function handleClick(num)
    {
      const badge = document.querySelector(".item-count");
      let currentItemNum = (badge.textContent .includes("+")) ? 100 : Number(badge.textContent);
      let setNum = currentItemNum + num;
      if(setNum > 0)
      {
        badge.style.transform = "scale(1)";
        badge.textContent = setNum < 100 ? setNum : 99 + "+";
      }
      else if(setNum == 0)
      {
        badge.style.transform = "scale(0)";
        setTimeout(()=>{
          badge.textContent = 0;
        },150)
      }
      else
      {
        badge.style.transform = "scale(0)";
      }
      
    }
    
    handleClick(0);


const navBtn = document.querySelector(".nav-btn");
const navContainer = document.querySelector(".nav-container");
const verticalNav = document.querySelector(".vertical-nav");

navContainer.addEventListener("click",(e)=>{
   //console.log(e.target.contains(verticalNav));
   if(e.target.contains(navContainer))
   {
     verticalNav.style.transform = "translateX(-100%)";
     setTimeout(()=>{
       navContainer.style.transform = "translateX(-100%)";
       document.body.style.overflow = "initial"
     },550)
     
   }
})

navBtn.addEventListener("click",()=>{
  navContainer.style.transform = "translateX(0)";
  verticalNav.style.transform = "translateX(0)";
  document.body.style.overflow = "hidden"
})


/*Dark Mode Toggle */
const modeBtn = document.querySelector(".mode-toggle");

const modeToggleIcon = document.querySelector(".mode-toggle img");

modeBtn.addEventListener("click",iconToggle)


function iconToggle() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  
  if (modeToggleIcon.getAttribute("src").includes("light"))
  {
    const stretch = `<div  class="stretch"></div>`;
    modeToggleIcon.style.transform = "rotate(360deg)";
    modeToggleIcon.style.opacity = 0;
    modeBtn.insertAdjacentHTML("beforeend", stretch)

    setTimeout(() => {
      modeToggleIcon.src = "dark_mode.png"
      modeToggleIcon.style.opacity = 1;
      modeBtn.querySelector(".stretch").remove();

    }, 600)

  }
  else {
    const stretch = `<div class="stretchBack"></div>`;
    modeToggleIcon.style.transform = "rotate(0deg)";
    modeToggleIcon.style.opacity = 0;
    modeBtn.insertAdjacentHTML("beforeend", stretch)

    setTimeout(() => {
      modeToggleIcon.src = "light_mode.png"
      modeToggleIcon.style.opacity = 1;
      modeBtn.querySelector(".stretchBack").remove();
    }, 300)

  }
  setDark(modeToggleIcon.getAttribute("src"));

}

function setDark(att) {
  let time = att.includes("light") ? 500 : 0;
  setTimeout(() => {
    if (att.includes("light"))
    {
      document.documentElement.style.setProperty("--bodyBackgroundColor", "hsla(235, 0%, 13%, 1)");
    }
    else {
      document.documentElement.style.setProperty("--bodyBackgroundColor", "white");
    }
  }, time)

}