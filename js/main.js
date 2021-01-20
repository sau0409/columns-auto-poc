document.addEventListener("DOMContentLoaded", () => {
  let textSet = {
    text1:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ut praesentium aut deleniti? Culpa nostrum voluptate",
    text2: "text2",
    text3: "text3",
    text4: "text4",
    text5: "text5",
  };

  let btn = document.querySelector(".column__btn");
  let input = document.querySelector(".column__text");
  let colCont = document.querySelector(".column__container");
  let possibleColumnsInRow = Math.floor(window.visualViewport.width / 110);

  let textArr = Object.values(textSet);

  addColumns(textArr);

  //creates elements on the basis of input text array
  function addColumns(textArray) {
    textArray.forEach((text) => {
      let newText = document.createElement("div");
      newText.classList.add("col");
      newText.innerText = text;
      colCont.appendChild(newText);
      colCont.setAttribute(
        "style",
        `grid-template-columns: repeat(${possibleColumnsInRow}, 100px)`
      );
    });
  }


  //listner for new columns to be added
  btn.addEventListener("click", () => {
    let newCol = document.createElement("div");
    //calculate total rows possible in a row, column width: 100px + gap: 10px

    newCol.innerText = input.value;
    newCol.classList.add("col");
    colCont.appendChild(newCol);
    input.value = "";
  });
});
