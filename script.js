
 const throttleFunction=(func, delay)=>{
     
      let prev = 0;
      return (...args) => {
        let now = new Date().getTime();
     
        if(now - prev> delay){
          prev = now;
     
          return func(...args); 
        }
      }
    }


    const imageArray = [
      "https://i.pinimg.com/564x/8c/4a/51/8c4a51e005629a084505649079b0a949.jpg",
      "https://i.pinimg.com/564x/76/09/09/760909639b65a73251b38d8b9a06d2a0.jpg",
      "https://i.pinimg.com/236x/c2/1b/9c/c21b9c23cd9736dbfd41668ffe1f3452.jpg",
      "https://i.pinimg.com/236x/b5/75/ee/b575eef423f7211e1f011b4ea09498a0.jpg",
      "https://i.pinimg.com/236x/fe/6e/d5/fe6ed5eb5c8c8fb98fa8c409fcc3c6ea.jpg",
      "https://i.pinimg.com/236x/7f/e4/20/7fe42026a9f21b53bd5e6df4303423bb.jpg",
      "https://i.pinimg.com/236x/85/ac/ff/85acff2f3f0278dfc1bfa3e9393e7026.jpg",
      "https://i.pinimg.com/236x/c1/dd/55/c1dd5568ca37f153480e448fe74a3d37.jpg",
      "https://i.pinimg.com/236x/1e/de/d6/1eded69eed40704b69fac23adc246615.jpg",
      "https://i.pinimg.com/236x/1a/1c/bc/1a1cbc18f7189546f9170d5ac6b9cf22.jpg",
      "https://i.pinimg.com/236x/0f/44/19/0f441942273f9cd305a3f8fdf5d04a6e.jpg",
      "https://i.pinimg.com/236x/80/64/58/806458121ae9c5b287b129cffd86d6f1.jpg",
      "https://i.pinimg.com/236x/60/f9/bf/60f9bf670918784f65878a5f8c709cb7.jpg",
     
    ];


    document.querySelector(".trailcontainer").addEventListener("mousemove", throttleFunction((dets)=>{
      

      var div =  document.createElement("div");
      div.classList.add("imgcontainer");
      var img =  document.createElement("img");


      const randomImage = imageArray[Math.floor(Math.random() * imageArray.length)];
      img.setAttribute("src", randomImage);


      const centerX = window.innerWidth / 2;
      const rotation = dets.clientX > centerX ? "20deg" : "-20deg";


      div.style.left = dets.clientX + "px"
      div.style.top = dets.clientY + "px"

      div.appendChild(img);
      document.body.appendChild(div);


     
      gsap.to(img, {
        y: "0%",
        duration: .6,
        rotation,
        ease: Back.easeOut,
        

      }
        )



      gsap.to(img, {
        y: "150%",
         delay: .6,
         ease: Back.easeOut,
       

      }
        )

      setTimeout(() => {
        div.remove()
   
      }, 1500);

    }, 150));
  
 




  