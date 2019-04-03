function deletePerson(id){
    $.ajax({
        url: '/class/' + id,
        type: 'DELETE',
        success: function(result){
            window.location.reload(true);
        }
    })
};

function withdrawStudent(){
    var sid = document.getElementById('student_id').value
    var cid = document.getElementById('class_id').value
  $.ajax({
      url: '/class/' + sid + '/' + cid,
      type: 'DELETE',
      success: function(result){
          if(result.responseText != undefined){
            alert(result.responseText)
          }
          else {
            window.location.reload(true)
          } 
      }
  })
};

function deleteBuilding(){
    var bid = document.getElementById('building_id').value
  $.ajax({
      url: '/building/' + bid,
      type: 'DELETE',
      success: function(result){
          if(result.responseText != undefined){
            alert(result.responseText)
          }
          else {
            window.location.reload(true)
          } 
      }
  })
};