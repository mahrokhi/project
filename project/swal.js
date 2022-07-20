const showbtn=document.getElementById('show');
showbtn.addEventListener('click',function(){
    
     
    swal("نظر شما:", {
        content: "input",
        button: "ثبت",
    
      })
      .then((value) => {
        swal(`نظر شما: ${value}`);
      });

      
})