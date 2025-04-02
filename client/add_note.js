// form : 기본 동작 (데이터 송신 + 화면 새로고침) 제어

// fetch api :

const noteForm = document.querySelector("#note_form")

noteForm.addEventListener("submit", function(e){
    e.preventDefault();
    const data = { 
        title: noteForm.querySelector("#title").value,
        wr_date: noteForm.querySelector("#wr_date").value,
        content: noteForm.querySelector("#content").value
       }
       addNote(data);
})

async function addNote(data) {
    try {
      const response = await fetch("http://localhost:3000/notes", {
        method: "POST", // 또는 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
      console.log("성공:", result);
    } catch (error) {
      console.error("실패:", error);
    }
  }