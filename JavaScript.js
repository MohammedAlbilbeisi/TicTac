// var table = document.getElementById("table");
  //  table.rows[i].cells[j].onclick = function()
                 
    
//document.getElementsByTagName("td")[0].addEventListener("click", function(){
 // document.getElementById("ggg").innerHTML = "x";

    var table = document.getElementById("table");
    
    var rIndex,cIndex;
            
            // table rows
            for(var i = 0; i < table.rows.length; i++)
            {
                // row cells
                for(var j = 0; j < table.rows[i].cells.length; j++)
                {
                    table.rows[i].cells[j].addEventListener("click", function(){
                 
                 
                       
                        //table.rows[i].cells[j].innerHTML = "x";
                        //  document.getElementsByTagName("td")[i].innerHTML = "x";
                       // table.rows[i].cells[j].innerHTML = "x";
                       // document.getElementsByTagName("td")[1][2].innerHTML = "x";
                        document.getElementById("table").rows[this.parentElement.rowIndex].cells[this.cellIndex].innerHTML="x";
                        
                    // document.getElementById("ggg").innerHTML = "x";

                });
            }}
    
    