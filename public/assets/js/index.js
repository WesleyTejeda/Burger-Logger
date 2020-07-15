//Wait until page loaded
$(document).ready(() =>{
    //( post to devour list)
    $(".devourBtn").on("click", function(event) {
        event.preventDefault();
        let id = $(this).parent().data("id");
        let burgerStatus = {
            devoured: 1
        }
        $.ajax({
            url: "/api/burger/" + id,
            method: "PUT",
            data: burgerStatus
        }).then(() => {
            location.reload();
        })
    });
    //Add
    $("#addBurgerForm").on("submit", function(event) {
        event.preventDefault();
        let burgerName ={burgerName: $("#addBurger").val().trim()};
        $.post("/api/burger", burgerName).then(() => {
            location.reload();
        })
    });
    //Put
    $("#updateBurgerForm").on("submit", function(event) {
        event.preventDefault();
        let id = $(this[0])[0].value;
        let newName = {
            newBurgerName: $("#updateBurgerName").val().trim()
        };
        $.ajax("/api/burger/swap/" + id,
         {
            method: "PUT",
            data: newName
        }).then(() => {
            location.reload();
        })
    });
})