$(document).ready(function() {

    $(".toast").toast("show")

    // Billing Method selection UI
    $(".billing-method-radio").click(function() {
        $(".billing-method-subform").hide();
        $("#" + this.id + "-subform").show();
    });

    $("#click-me").on("click", function(e) {
        $("#response-alert").fadeToggle("slow")
    })

    $("#request-workspace-form").on("submit", function(e) {
        e.preventDefault();
        e.stopPropagation();

        if (!(this.checkValidity() === false)) {
            $.ajax({
                url: 'https://ler9l6w54b.execute-api.us-east-1.amazonaws.com/store-request-info',
                type: 'POST',
                crossDomain: true,
                data: $(this).serialize(),
                success:function(result) {
                    var ele = $("#response-alert");
                    ele.html("Success! Created Workspace: " + result['workspace_id']);
                    ele.removeClass("alert-error alert-success");
                    ele.addClass("alert-success");
                    ele.fadeIn(1000);
                    window.setTimeout(function() {
                        ele.fadeOut(1000); 
                    }, 3000);
                },
                error: function(xhr, result) {
                    var ele = $("#response-alert");
                    ele.html("There was an error submitting your request. Please try again later.");
                    ele.removeClass("alert-danger alert-success");
                    ele.addClass("alert-danger");
                    ele.fadeIn(1000);
                    window.setTimeout(function() {
                        ele.fadeOut(1000); 
                    }, 3000);
                }
            })
        }

        this.classList.add('was-validated');
    })

});