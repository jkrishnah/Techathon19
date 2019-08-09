var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Create')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Code')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Present')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Win')
    .pauseFor(2500)
    .start();