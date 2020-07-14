//Wait until page loaded
$(document).ready(() =>{
    //'Delete' (will post to other list)
    $(".devourBtn").on("click", function(event) {
        event.preventDefault();
        let id = $(this).parent.data("id");

        $.ajax({
            URL: "/api/burger/" + id,
            method: "DELETE",
        }).then(() => {
            location.reload();
        })
    });
    //Add
    $("#addBurgerForm").on("submit", function(event) {
        event.preventDefault();
        let burgerName ={burgerName: $("#addBurger").val().trim()};
        console.log(burgerName);
        $.post("/api/burger", burgerName).then(() => {
            location.reload();
        })
    });
    //Put
    $("#updateBurgerForm").on("submit", function(event) {
        event.preventDefault();
        let burgerName = $(this).data("burgerName");
        let id = $(this).data("id");

        $.ajax({
            URL: "/api/burger/" + id,
            method: "PUT",
            data: burgerName
        }).then(() => {
            location.reload();
        })
    });
})