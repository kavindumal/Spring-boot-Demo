$('#savepost').click(function () {
    // Get the value from fields
    let postId=$('#postId').val();
    let postTitle=$('#postTitle').val();
    let postContent=$('#postContent').val();
    let postCategory=$('#postCategory').val();
    console.log(postId,postTitle,postContent,postCategory);
    $.ajax({
        url:'http://localhost:8080/blog/savepost',
        method:'POST',
        contentType:'application/json',
        "data":JSON.stringify({
            "id":postId,
            "title":postTitle,
            "content":postTitle,
            "category":postCategory,
        }),
        success:function (result){
            console.log(result)
            alert("Done")
        },
        error:function (error){
            console.log(error)
            alert("Try again later")
        }
    })
})

$('#updatepost').click(function () {
    let postId=$('#postId').val();
    let postTitle=$('#postTitle').val();
    let postContent=$('#postContent').val();
    let postCategory=$('#postCategory').val();
    console.log(postId,postTitle,postContent,postCategory);
    $.ajax({
        url:'http://localhost:8080/blog/updatepost',
        method:'Put',
        contentType:'application/json',
        "data":JSON.stringify({
            "id":postId,
            "title":postTitle,
            "content":postTitle,
            "category":postCategory,
        }),
        success:function (result){
            console.log(result)
            alert("Update Successfully")
        },
        error:function (error){
            console.log(error)
            alert("Try again")
        }
    })

})