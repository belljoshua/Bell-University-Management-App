function filterClassesByStudent() {
    //get the id of the selected student from the filter dropdown
    var student_id = document.getElementById('student_class_filter').value
    //construct the URL and redirect to it
    window.location = '/taking/filter/' + parseInt(student_id)
}
