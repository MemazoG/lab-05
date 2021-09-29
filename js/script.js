$("#btnPost").on("click", (e) => {
    e.preventDefault();
    
    const todoName = $("#todoText").val();

    if(todoName !== "") {
        //List element structure
        let msg = 
        `<div class="todoItem">
            <input type="checkbox" name="todo" class="check">
            <label>${todoName}</label> <br>
        </div>`
        //Appends todo-item to container
        $("#todoList").append(msg)
        //Clears input field
        $("#todoText").val("")
    } else {
        alert("Make sure to write an item before adding it");
    }
})

$(".buttons").on("click", "button", function(e) {
    e.preventDefault();
    const btn = $(this);
    if(btn.hasClass("clearButton")) {
        alert("1");
    } else if(btn.hasClass("markAllButton")) {
        alert("2");
    } else if(btn.hasClass("deleteButton")) {
        deleteAll();
    }
});

function clearAll() {

}

function markAll() {
    
}

function deleteAll() {
    $("#todoList").empty();
}