//get random number in range from 0 to size
let getRandomNumber = (size) => {
    return Math.floor(Math.random() * size);
};

//count a distance between event and target
let getDistance = (event, target) => {
    let diffX = event.offsetX - target.x,
        diffY = event.offsetY - target.y;

    return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

//get a string what show a distance
let getDistanceHint = (distance) => {
    if (distance < 10) {
        return 'Boiling Hot!';
    } else if (distance < 20) {
        return 'Really Hot!';
    } else if (distance < 40) {
        return 'Hot!';
    } else if (distance < 80) {
        return 'Warmer!';
    } else if (distance < 160) {
        return 'Colder!';
    } else if (distance < 320) {
        return 'Really Cold!';
    } else if (distance < 450) {
      return 'Realy-realy Cold!';
    }else {
        return 'Freezing!'
    }
}

let width = 500,
    height = 500,
    clicks = 0,
    clicksLimit = 30;

//create random location
let target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height),
}

//add evend function
$('#map').click(function (event) {
    clicks++;

    if (clicks > clicksLimit) {
        alert('Game over! You spent all 30 clicks');
        return;
    }
    //get a distance between event and target
    let distance = getDistance(event, target),
        distanceHint = getDistanceHint(distance);

    //add text in p element
    $('#distance').text(`${distanceHint} You clicked ${clicks} times. You have ${30 - clicks} clicks` );

    //say to a player that he won
    if (distance < 8) {
        alert(`You win! Found a treasure in ${clicks} clicks!`)
    }

})
