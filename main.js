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
    