function searchStudents() {
    //get the first name 
    var student_search  = document.getElementById('student_search').value
    //construct the URL and redirect to it
    window.location = '/student/search/' + encodeURI(student_search)
}
