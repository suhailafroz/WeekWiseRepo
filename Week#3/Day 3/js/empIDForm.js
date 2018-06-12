$('document').ready(() => {
    $('#errorFirstNameDisplay').hide();
    $('#errorFullNameDisplay').hide();
    $('#addEmpBtn').click(() => {
        console.log("Add Button Clicked");
        //isFirstNameEmpty
        if (isFirstNameEmpty()) {
            //isFullNameEmpty
            console.log("First Name has Value");
            $('#errorFirstNameDisplay').hide();
            if (isFullNameEmpty()) {
                console.log("Full Name has Content");
                $('#errorFullNameDisplay').hide();
                addEmployee();
            }
            else {
                //display Error Message for Full Name
                console.log("Enter value for Full Name");
                displayFullNameErrorMessage();
            }
        }
        else {
            //display Error Message for First Name
            console.log("Enter value for First Name");
            displayFirstNameErrorMessage();
        }
    });
    function isFirstNameEmpty() {
        if ($('#firstNameInput').val() == "") {
            return false;
        }
        return true;
    }
    function isFullNameEmpty() {
        if ($('#fullNameInput').val() == "") {
            return false;
        }
        return true;
    }
    function displayFullNameErrorMessage() {
        $('#errorFullNameDisplay').show();
    }
    function displayFirstNameErrorMessage() {
        $('#errorFirstNameDisplay').show();
    }

    function addEmployee() {
        const firstName = $('#firstNameInput').val();
        const fullName = $('#fullNameInput').val();
        var param = { firstName: $('#firstNameInput').val(), fullName: $('#fullNameInput').val() };
        $.ajax({
            type: 'POST',
            url: 'https://employee-id-form.firebaseio.com/employeeInfo.json',

            error: function () {

            },
            data: JSON.stringify(param),
            success: function (data) {
                console.log("data posted");
            }
        });
    }
})
