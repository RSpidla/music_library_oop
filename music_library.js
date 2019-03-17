
// Library constructor function declaration
// Library has 'name' as string
// Library has 'creator' as string
// Library has 'playlists' as empty array
function Library(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}

// Playlist constructor function declaration
// Playlist has 'name' as string
// Playlist has 'tracks' as empty array
function Playlist(name) {
  this.name = name;
  this.tracks = [];
}

// 'overallRating' function expression
// 'overallRating' calculates the rating by averaging the rating of each track
Playlist.prototype.overallRating = function() {
  let overallRating = 0;
  this.tracks.forEach((track) => {
    overallRating += track.rating;
  });
  return overallRating / this.tracks.length;
};

// 'totalDuration' function expression
// 'totalDuration' sums the duration of all of its tracks
Playlist.prototype.totalDuration = function() {
  let totalDuration = 0;
  this.tracks.forEach((track) => {
    totalDuration += track.length;
  });
  return totalDuration;
};

// Track constructor function declaration
// Track has 'title' as string
// Track has 'rating' as integer
// Track has 'length' as integer
function Track(title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}
