// 검색 버튼 누르면, 전체 notes를 서버로부터 받아옵니다.
const searchForm = document.querySelector('#search_form')
let htmlTags = '';
searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(document.querySelector("#keyword").value)
    getNotes()
})

async function getNotes() {
    const response = await fetch("http://localhost:3000/notes");
    const jsonData = await response.json();
    console.log(jsonData);
    printNotes(jsonData);
}

function printNotes(notes) {
    for (let i = 0; i < notes.length; i++)
        htmlTags += "<div calss=\"note\">" + "<p class=\"note_title\">" + notes[i].title+notes[i].wr_date + notes[i].content;
    document.querySelector("#notes").innerHTML = htmlTags;
}