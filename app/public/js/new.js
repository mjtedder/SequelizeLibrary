$.get('/api/games/new', (data) => {

    for (let i = 0; i < data.length; i ++) {
        // Setting variable to create a parent div
        let wellSection = $('<div>')
        // Adding a class of 'well' to the div
        wellSection.addClass('well')
        // Adding id to the well to mark which well it is
        wellSection.attr('id', 'game-well-' + i)
        // Append the well to the well section
        $('#well-section').append(wellSection)

        // Now we add our game data to the well we just dynamically created on the page
        $('#game-well-' + i).append('<h2>' + (i + 1) + '. ' + data[i].title + '</h2>')
        $('#game-well-' + i).append('<h3>Developer: ' + data[i].developer + '</h3>')
        $('#game-well-' + i).append('<h3>Console: ' + data[i].console + '</h3>')
        $('#game-well-' + i).append('<h3>Year: ' + data[i].year + '</h3>')
        console.log(data)
    }
})