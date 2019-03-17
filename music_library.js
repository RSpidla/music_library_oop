
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
function Playlist(name) {
  this.name = name;
}
