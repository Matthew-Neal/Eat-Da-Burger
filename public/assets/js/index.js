$(function () {
    $(".change-eaten").on("click", function (event) {
        // event.preventDefault();
        const id = $(this).data("id");
        const devoured = $(this).data("devoured");

        const devouredState = {
            devoured: devoured,
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState,
        }).then(function () {
            console.log("changed devouted to", devoured);
            // Reload the page to get the updated list
            location.reload();
        });
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        const newBurger = {
            burger_name: $("#ca").val().trim(),
            devoured: false,
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger,
        }).then(function () {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
        });
    });
});