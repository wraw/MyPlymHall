function initialise()
{
    repopulateList();
}

function addToReviews()
{
    var newName = document.getElementById("name").value;
    document.getElementById("name").value = "";
    var currentList = localStorage.getItem("review");
    if(currentList == null) currentList = ""
    currentList = currentList + newName + "\n";
    localStorage.setItem("review", currentList);
    repopulateList();
}

function clearreview()
{
    localStorage.removeItem("review");
    repopulateList();
}

function repopulateList()
{
    $("#reviewlist").empty();
    var currentList = localStorage.getItem("review");
    if(currentList != null) {
        var array = currentList.split("\n");
        for(var i=0; i<array.length-1 ;i++) {
            $("#reviewlist").append("<li>" + array[i] + "</li>");
        }
    }
    $("#reviewlist").listview("refresh",true);
}