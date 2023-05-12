// js for edit and save btns
function EditSave() {
    if (document.getElementById('postText').getAttribute("contentEditable") === "true") {
        document.getElementById('postText').setAttribute("contentEditable", "false");
        document.getElementById('postTitle').setAttribute("contentEditable", "false");
        document.getElementById('postText').style.border = "none";
        document.getElementById('postTitle').style.border = "none";
        document.getElementById('editPostButton').innerHTML = "Edit<i class='fa fa-edit'></i>";
    } else {
        document.getElementById('postText').setAttribute("contentEditable", "true");
        document.getElementById('postTitle').setAttribute("contentEditable", "true");
        document.getElementById('postText').style.border = "2px solid pink";
        document.getElementById('postTitle').style.border = "2px solid pink";
        document.getElementById('editPostButton').innerHTML = "Save<i class='fa fa-save'></i>";
    }
}



// js for count btn
let Count=0;
function postCounts(){
    document.getElementById("likePostBtn").innerHTML = "<i class='fa fa-thumbs-up'></i>Liked";
    Count++;
    if(Count!==0){
        if (Count == 1) {
            document.getElementById('likesCount').innerHTML = Count + " person likes this!";
        } else {
            document.getElementById('likesCount').innerHTML = Count + " people like this!";
        }
    }
}
//  js for add comments
function addComments() {
    var comment = document.getElementById('commentText').value;
    var div = document.createElement("div");
    div.innerHTML = "<br>"
    div.style.backgroundColor = "#fff";
    div.style.margin = "10px";
    div.style.padding = "0 20px 20px 10px";
    var textDiv= document.createTextNode(comment);
    div.appendChild(textDiv);
    if (comment === "") { //if comments value is empty when we click comments btn alert msg pops out on the page.
        alert("Please add a comment!");
    } else {
        var newComment = document.getElementById("allCommentsBox");
        newComment.style.display = "block";
        newComment.insertBefore(div, newComment.childNodes[0]);
        document.getElementById('commentText').value = "";
    }
}