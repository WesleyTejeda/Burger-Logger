//Wait until page loaded
$(document).ready(() =>{
    //Delete
    $(".devourBtn").on("click", function() {
        let id = $(this).parent.data("id");

        $.ajax({
            URL: "" + id,
            method: "DELETE",
        }).then(() => {
            location.reload();
        })
    });
    //Add
    $("#addBurgerForm").on("submit", function() {
        let burger = $(this).val().trim();

        $.post("/", burger).then(() => {
            location.reload();
        })
    });
    //Put
    $("#updateBurgerForm").on("submit", function() {
        let burger = $(this).data("burgerName");
        let id = $(this).data("id");

        $.ajax({
            URL: "" + id,
            method: "PUT",
            data: burger
        }).then(() => {
            location.reload();
        })
    });
})