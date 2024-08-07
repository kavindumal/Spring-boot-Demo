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

$('#deletepost').click(function () {
    let postId = $('#postId').val();
    console.log(postId);
    $.ajax({
        url: 'http://localhost:8080/blog/deletepost/' + postId,
        method: 'Delete',
        contentType: 'application/json',
        success:function (result) {
            console.log(result);
            alert("Post Deleted Successfully");
        },
        error:function (error) {
            console.log(error);
            alert("Try again");
        }
    });
});

$('#getAllPost').click(function () {
    $.ajax({
        url: 'http://localhost:8080/blog/getallpost',
        method: 'GET',
        contentType: 'application/json',
        success: function (result) {
            console.log(result);
            let tableBody = $('#postTableBody');
            tableBody.empty();
            result.forEach(function (post) {
                tableBody.append(`
                    <tr>
                        <th scope="row">${post.id}</th>
                        <td>${post.title}</td>
                        <td>${post.content}</td>
                        <td>${post.category}</td>
                    </tr>
                `);
            });
        },
        error: function (error) {
            console.log(error);
            alert("Try again");
        }
    });
});
