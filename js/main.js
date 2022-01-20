//Back to top button
div = document.getElementById("top-bt");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        div.innerHTML = '<i class="far fa-arrow-alt-circle-up" onclick="topFunction()"></i>';
    } else {
        div.innerHTML = ' ';
    }
}
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  home_current();
}

//change navbar link to current
var nav_home = document.getElementById('nav-home');
var nav_about = document.getElementById('nav-about');
var nav_videos = document.getElementById('nav-videos');
var nav_music = document.getElementById('nav-music');
var nav_cube = document.getElementById('nav-cube');
var nav_contact = document.getElementById('nav-contact')
function home_current() {
    nav_home.className = "current";
    nav_about.className = "not-current";
    nav_videos.className = "not-current";
    nav_music.className = "not-current";
    nav_cube.className = "not-current";
    nav_contact.className = "not-current";
}
function about_current() {
    nav_home.className = "not-current";
    nav_about.className = "current";
    nav_videos.className = "not-current";
    nav_music.className = "not-current";
    nav_cube.className = "not-current";
    nav_contact.className = "not-current";
}
function videos_current() {
    nav_home.className = "not-current";
    nav_about.className = "not-current";
    nav_videos.className = "current";
    nav_music.className = "not-current";
    nav_cube.className = "not-current";
    nav_contact.className = "not-current";
}
function music_current() {
    nav_home.className = "not-current";
    nav_about.className = "not-current";
    nav_videos.className = "not-current";
    nav_music.className = "current";
    nav_cube.className = "not-current";
    nav_contact.className = "not-current";
}
function cube_current() {
    nav_home.className = "not-current";
    nav_about.className = "not-current";
    nav_videos.className = "not-current";
    nav_music.className = "not-current";
    nav_cube.className = "current";
    nav_contact.className = "not-current";
}
function contact_current() {
    nav_home.className = "not-current";
    nav_about.className = "not-current";
    nav_videos.className = "not-current";
    nav_music.className = "not-current";
    nav_cube.className = "not-current";
    nav_contact.className = "current";
}


//check if element with specific id is visible
window.addEventListener('scroll', function() {
	var home = document.getElementById('home');
	var about = document.getElementById('about-tl');
	var videos = document.getElementById('videos-tl');
	var music = document.getElementById('music-tl');
	var cube = document.getElementById('cube-tl');
	var contact = document.getElementById('contact-tl');

	var home_position = home.getBoundingClientRect();
	var about_position = about.getBoundingClientRect();
	var videos_position = videos.getBoundingClientRect();
	var music_position = music.getBoundingClientRect();
	var cube_position = cube.getBoundingClientRect();
	var contact_position = contact.getBoundingClientRect();

	if(home_position.top >= 0) {home_current();}
	if(about_position.top >= 0 && about_position.top <= window.innerHeight) {about_current();}
	if(videos_position.top >= 0 && videos_position.top <= window.innerHeight) {videos_current();}
	if(music_position.top >= 0 && music_position.top <= window.innerHeight) {music_current();}
	if(cube_position.top >= 0 && cube_position.top <= window.innerHeight) {cube_current();}
	if(contact_position.top >= 0 && contact_position.top <= window.innerHeight) {contact_current();}
});


//pause audio once another is played
document.getElementById('audio1').addEventListener('play', () => {
    document.getElementById('audio2').pause();
    document.getElementById('audio3').pause();
    document.getElementById('audio4').pause();
    document.getElementById('audio5').pause();
})
document.getElementById('audio2').addEventListener('play', () => {
    document.getElementById('audio1').pause();
    document.getElementById('audio3').pause();
    document.getElementById('audio4').pause();
    document.getElementById('audio5').pause();
})
document.getElementById('audio3').addEventListener('play', () => {
    document.getElementById('audio1').pause();
    document.getElementById('audio2').pause();
    document.getElementById('audio4').pause();
    document.getElementById('audio5').pause();
})
document.getElementById('audio4').addEventListener('play', () => {
    document.getElementById('audio1').pause();
    document.getElementById('audio2').pause();
    document.getElementById('audio3').pause();
    document.getElementById('audio5').pause();
})
document.getElementById('audio5').addEventListener('play', () => {
    document.getElementById('audio1').pause();
    document.getElementById('audio2').pause();
    document.getElementById('audio3').pause();
    document.getElementById('audio4').pause();
})

//pause video once another is played
document.getElementById('video1').addEventListener('play', () => {
    document.getElementById('video2').pause();
    document.getElementById('video3').pause();
    document.getElementById('video4').pause();
    document.getElementById('video5').pause();
    document.getElementById('video6').pause();
})
document.getElementById('video2').addEventListener('play', () => {
    document.getElementById('video1').pause();
    document.getElementById('video3').pause();
    document.getElementById('video4').pause();
    document.getElementById('video5').pause();
    document.getElementById('video6').pause();
})
document.getElementById('video3').addEventListener('play', () => {
    document.getElementById('video1').pause();
    document.getElementById('video2').pause();
    document.getElementById('video4').pause();
    document.getElementById('video5').pause();
    document.getElementById('video6').pause();
})
document.getElementById('video4').addEventListener('play', () => {
    document.getElementById('video1').pause();
    document.getElementById('video2').pause();
    document.getElementById('video3').pause();
    document.getElementById('video5').pause();
    document.getElementById('video6').pause();
})
document.getElementById('video5').addEventListener('play', () => {
    document.getElementById('video1').pause();
    document.getElementById('video2').pause();
    document.getElementById('video3').pause();
    document.getElementById('video4').pause();
    document.getElementById('video6').pause();
})
document.getElementById('video6').addEventListener('play', () => {
    document.getElementById('video1').pause();
    document.getElementById('video2').pause();
    document.getElementById('video3').pause();
    document.getElementById('video4').pause();
    document.getElementById('video5').pause();
})