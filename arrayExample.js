

function arrayExample(){

// var array =["name", "diau","said"]

var array = new Array( "diau ", "said", "diau")
array[array.length]= "nuder"

// document.write(array[3])

document.getElementById("array").innerHTML=array

}


function jasonExample(){


    var student=[


        {firstname:"diau",
        lastname:"said",
        age:34 } ,
        {firstname:"diau",
        lastname:"said",
        age:34 } ,
        {firstname:"diau",
        lastname:"said",
        age:34 } 

    ]
// ]
//     fullname= student.firstname +" " + student.lastname
//     document.getElementById("student").innerHTML= "first name " +
//       student[0].firstname + "<br>" + "last name" + student[0].lastname
  var text = "<ul>"

  var len = student.length;
  document.writeln(len)
    
  for( i=0 ; i<len ;i++){

text =text +"<li>"  + student[i].firstname + "</li>" + "\n"
+"<li>"  + student[i].lastname + "</li>" ;

  }

  text = text + "</ul>"

  document.write(text)
}


