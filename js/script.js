// quick fix for Cloud9 warning:
/* global $ */

// Class 2:
// Complete displayList() to show a single song in the list

// Class 2:
// Complete displayList() to show all the songs in the list
// Complete clearList() funcion

// Class 3:
// Complete the addSong function to take an input from input boxes and push a new song to the playlist array. 

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

// Songs
var mySong = {
	title:"To Be Alive",
	artist:"MonsterCat",
	mp3url:"https://open.spotify.com/album/2HmrtGzfaTtuqaFMbiBmw1",
	imageurl:"https://t2.genius.com/unsafe/220x0/https%3A%2F%2Fimages.genius.com%2F670c3dc0158515701984b5dc762bab51.1000x1000x1.jpg",
}

var myPlayList = [
	{
	"title":"To Be Alive",
	"artist":"MonsterCat",
	"mp3url":"https://open.spotify.com/album/2HmrtGzfaTtuqaFMbiBmw1",
	"imageurl":"https://t2.genius.com/unsafe/220x0/https%3A%2F%2Fimages.genius.com%2F670c3dc0158515701984b5dc762bab51.1000x1000x1.jpg",
	},
	{
	
		"title":"24K Magic",
		"artist":"Bruno Mars",
		"mp3url":"https://open.spotify.com/track/6b8Be6ljOzmkOmFslEb23P",
		"imageurl":"https://images-na.ssl-images-amazon.com/images/I/71Gr9aCHQfL._SY355_.jpg",
	},
	{
		"title":"Sir Duke",
		"artist":"Stevie Wonder",
		"mp3url":"https://open.spotify.com/track/2udw7RDkldLFIPG9WYdVtT",
		"imageurl":"https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/Songs_in_the_key_of_life.jpg/220px-Songs_in_the_key_of_life.jpg",
	},
	{
		"title":"Sorry",
		"artist":"Justin Bieber",
		"mp3url":"https://open.spotify.com/track/09CtPGIpYB4BrO8qb1RGsF",
		"imageurl":"http://assets-s3.usmagazine.com/uploads/assets/articles/93827-justin-biebers-sorry-choreographer-spills-video-style-secrets-parris-goebel/1445638548_justin-bieber-sorry-dancers-zoom.jpg",
	}

]



// DOCUMENT READY FUNCTION
$( document ).ready(function() {
$("#submit").click(function() {
	addSong();
	clearList();
	displayList();
	
	
}); 

displayList();



});

function displayList(){
	
	myPlayList.forEach(function(item) {
		
		var title =  item.title;
		var artist = item.artist;
		var mp3 = item.mp3url;
		var picture = item.imageurl;
		
		$(".songs").append(`
			<img src="${picture}">
			<h1>${title}</h1>
			<p>${artist}</p>
			<a href>${mp3}</a>
			
		`)
		
	})

  
}

function clearList(){
	$(".songs").empty();
  
  
  
}

function addSong(){
    var titleInput = $("#title").val();
    var artistInput = $("#artist").val();
    var playlinkInput = $("#play-link").val();
    var albumimageInput = $("#album-image").val();
      
		

    var newSong = {
        "title": titleInput,
		"artist": artistInput,
		"mp3url": playlinkInput,
		"imageurl":albumimageInput
	
    };
    myPlayList.push(newSong);
  
}
