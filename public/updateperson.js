function updateStudent(){
    var id = document.getElementById('student_to_change').value
    $.ajax({
        url: '/student/' + id,
        type: 'PUT',
        data: $('#change_student').serialize(),
        success: function(result){
            window.location.reload(true);
        }
    })
};
