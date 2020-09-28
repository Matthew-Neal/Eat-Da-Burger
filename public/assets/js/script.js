// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".devour-form").on("submit", (event) => {
        event.preventDefault();

        var burger_id = $(this).children(".burger_id").val();
        console.log(burger_id);
        $.ajax({
            method: "PUT",
            url: "/burgers/" + burger_id
        }).then((data) => {
            location.reload() //reloads page to show burger in the new location
        });
    });

    // $(".delete-cat").on("click", function (event) {
    //     var id = $(this).data("id");

    //     // Send the DELETE request.
    //     $.ajax("/api/cats/" + id, {
    //         type: "DELETE"
    //     }).then(
    //         function () {
    //             console.log("deleted cat", id);
    //             // Reload the page to get the updated list
    //             location.reload();
    //         }
    //     );
    // });
});
