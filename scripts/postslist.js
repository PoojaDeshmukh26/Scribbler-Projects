function morePosts(){
    window.location.href = "./post.html";
}
function showDeletePostModal(id) {
    document.getElementById('deletePostModal').style.display = 'block';
    document.getElementById('deletePostModal').setAttribute('DeleteId', id);
}
function closeDeletePostModal() {
    document.getElementById('deletePostModal').style.display = 'none';
    event.preventDefault(); 
}
function deletePost(e) {
    event.preventDefault(); 
    document.getElementById('deletePostModal').style.display = 'none';
    var DeleteId = document.getElementById('deletePostModal').getAttribute('DeleteId');
    document.getElementById(DeleteId).remove();
    
}