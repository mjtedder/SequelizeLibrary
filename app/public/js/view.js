// When user hits the search-btn
$('#search-btn').on('click', (event) => {
    event.preventDefault()

    // Save the game they typed into the book-search input
    let gameSearched = $('#game-search').val().trim()
    // Make an AJAX get request to our api, including the user's game in the url
    $.get('/api/' + gameSearched, (data) => {
        console.log(data)
        // Call our renderGames function to add our games to the page
        renderGames(data)
    })
})

// When user hits the developer-search-btn
$('#developer-search-btn').on('click', () => {
    // Save the developer they typed into the developer-search input
    let developerSearched = $('#developer-search').val().trim()

// Make an AJAX get request to our api, including the user's developer in the url
$.get('/api/developer/' + developerSearched, (data) => {
    // Log the data to the console
    console.log(data)
    // Call our renderBooks function to add our books to the page
    renderGames(data)
    })
})

// When user hits the console-search-btn
$('#console-search-btn').on('click', () => {
  // Save the game they typed into the console-search input
  let consoleSearched = $('#console-search').val().trim()
  // Make an AJAX request to our api, including the user's console in the url
 $.get('/api/genre/' + consoleSearched, (data) => {
   
   console.log(data)
   renderGames(data)
 })
})


renderGames(data) {
    if(data.length !== 0) {
        $('#stats').empty()
        $('#stats').show()
    
    for (let i = 0; i < data.length; i++) {

        let div = $('<div>')
    
        div.append('<h2>' + data[i].title + '</h2>')
        div.append('<p>Developer: ' + data[i].developer + '</p>')
        div.append('<p>Console: ' + data[i].console + '</p>')
        div.append('<p>Current')
    }
    }
}