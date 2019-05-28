var friends = [
    {
        name: "Kermit",
        picture: "../public/assets/images/kermit.jpg",
        scores: [5,4,4,2,3,5,1,4,4,5],

    },
    {
        name: "Sweetums",
        picture: "../public/assets/images/sweetums.jpg",
        scores: [4,2,2,3,2,3,3,4,5,3],
    },
    {
        name: "Swedish Chef",
        picture: "../public/assets/images/swedish-chef.jpg",
        scores: [2,3,1,2,4,3,3,2,3,4],
    },
    {
        name: "Statler and Waldorf",
        picture: "../public/assets/images/statler-and-waldorf.jpg",
        scores: [1,1,4,1,3,4,5,4,2,1],
    },
    {
        name: "Beaker",
        picture: "../public/assets/images/beaker.jpg",
        scores: [4,1,1,3,2,4,2,5,2,3],
    },
    {
        name: "Animal",
        picture: "../public/assets/images/animal.jpg",
        scores: [4,4,2,5,1,2,3,2,3,3],
    },
    {
        name: "Janice",
        picture: "../public/assets/images/janice.jpg",
        scores: [4,3,4,4,5,4,3,2,4,3],
    },
    {
        name: "Miss Piggy",
        picture: "../public/assets/images/miss-piggy.jpg",
        scores: [2,4,4,1,2,2,4,1,5,3],
    },
    {
        name: "Gonzo",
        picture: "../public/assets/images/gonzo.jpg",
        scores: [4,3,3,5,2,2,3,1,4,4],
    },
    {
        name: "Rizzo",
        picture: "../public/assets/images/rizzo.jpg",
        scores: [1,1,4,2,4,5,5,4,2,2],
    },
    {
        name: "Sam the Eagle",
        picture: "../public/assets/images/sam-the-eagle.jpg",
        scores: [3,1,5,1,1,5,3,3,3,3],
    },
    {
        name: "Pepe the King Prawn",
        picture: "../public/assets/images/pepe.jpg",
        scores: [1,3,3,2,4,3,5,3,3,2],
    },
    {
        name: "Scooter",
        picture: "../public/assets/images/scooter.jpg",
        scores: [4,3,5,2,3,5,2,5,3,4],
    },
    {
        name: "Lew Zealand",
        picture: "../public/assets/images/lew-zealand.jpg",
        scores: [2,4,3,4,3,2,3,2,3,3],
    },
    {
        name: "Dr. Teeth",
        picture: "../public/assets/images/doctor-teeth.jpg",
        scores: [4,3,4,4,4,4,3,2,4,4],
    },
    {
        name: "Zoot",
        picture: "../public/assets/images/zoot.jpg",
        scores: [3,3,4,3,4,3,3,3,3,2],
    },

];

module.exports = friends;

$('#friend-btn').on('click', function(event) {
    event.preventDefault();
    var newFriend = {
        name: $('#name')
            .val()
            .trim(),
        picture: $('#picture-link')
            .val()
            .trim(),
       /*  age: $('#age')
            .val()
            .trim(),
        forcePoints: $('#force-points')
            .val()
            .trim(), */
    };

    // Question: What does this code do??
    $.post('/api/characters', newCharacter).then(function(data) {
        console.log('add.html', data);
        alert('Adding character...');
    });
});