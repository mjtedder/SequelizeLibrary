$('#add-btn').on('click', (event)=>{
    event.preventDefault()

    let newGame = {
        title: $("#title").val().trim(),
        developer: $('#developer').val().trim(),
        console: $('#console').val().trim(),
        year:$('#year-released').val().trim()
    }

    $.post('/api/new', newGame)
        .then((data)=>{
            console.log(data)
        })

    $("#title").val('')
    $("#developer").val('')
    $("#console").val('')
    $("#year-released").val('')

})