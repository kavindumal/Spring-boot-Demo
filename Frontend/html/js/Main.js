$('#savepost').click(function () {
    // Get the value from fields
    let postId=$('#postId').val();
    let postTitle=$('#postTitle').val();
    let postContent=$('#postContent').val();
    let postCategory=$('#postCategory').val();
    console.log(postId,postTitle,postContent,postCategory);
})