function saveKanapLS(kanap){
    localStorage.setItem("kanap",JSON.stringify(kanap));
  }
  
  function getKanapLS(){
    let kanap = localStorage.getItem("kanap");
    if (kanap == null){
      return[];
    } else{
      return JSON.parse(kanap);
      const parseici = console.log(kanap);
    }
  }
  