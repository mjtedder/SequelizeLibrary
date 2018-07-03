// Make a get request to our api route that will return every "long" book (300 pages or more)
$.get('/api/games/classic', (data) => {
    // For each book that our server sends us back
    for (let i = 0; i < data.length; i++) {
        // Create a parent div to hold book data
        let wellSection = $('<div>')
        // Add a class to this div: 'well'
        wellSection.addClass('well')
        // Add an id to the well to mark which well it is
        wellSection.attr('id', 'game-well-' + i)
        // Append the well to the well section
        $('#well-section').append(wellSection)
        // Now  we add our book data to the well we just placed on the page
        $('#game-well-' + i).append('<h2>' + (i + 1) + '. ' + data[i].title + '</h2>')
        $('#game-well-' + i).append('<h4>Developer: ' + data[i].developer + '</h4>')
        $('#game-well-' + i).append('<h4>Console: ' + data[i].console + '</h4>')
        $('#game-well-' + i).append('<h4>Year: ' + data[i].year + '</h4>')
    }
})