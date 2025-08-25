# Minimalist Web Audio Player

My First project in Javascript
A simple and lightweight web-based audio player built with HTML, CSS (very little, v2.0 ill be adding better UI UX), and some basic JavaScript. Designed for ease of use, it supports only offline local audio files, as of v1.0.

## Features

- **Playlist management:** Displays a list of songs that users can click to play.
- **Playback controls:** Play, pause, next, previous buttons.
- **Repeat modes:** Cycle through repeat off, all, or single-song repeat.
- **Shuffle mode:** Play random songs from the playlist.
- **Progress bar:** Visual progress of the currently playing song with clickable seek support.
- **Time display:** Shows elapsed playtime and total song duration.
- **Volume control:** Adjustable volume slider for user convenience.
- **Offline support:** Easily switch between online song URLs and local files by modifying the song list paths accordingly.
- **Notifications:** Alerts inform the user upon play, pause, and song changes (can be optimized further).

## Usage

1. Clone or download the repository.
2. Add your audio files to the `Phonk/` folder or keep the provided example URLs.
3. Open `MusicPlayer.html` in a modern browser.
4. For offline audio playback, serve the directory using a local HTTP server such as Python's `http.server`:python3 -m http.server or use LiveServer VSCode extension
5. Access the player via `http://localhost:8000/MusicPlayer.html` (or your chosen port).

## Customization

- Edit the `Phonk` array in the script to add/remove songs or update URLs/paths.
- Style the player by adjusting the inline styles or adding CSS.
- Extend functionality by enhancing UI, adding playlists persistence, or integrating other web audio features.

## Notes

- Some browsers restrict autoplay (Chrome does so for me); user interaction with the page is required to start audio playback.
- Clicking a song from the playlist will start playing the song, directly clicking the play button will tell that its playing a song but it isn't and will mostly be fixed in v2.0
- Make sure the audio file paths or URLs are valid and accessible to ensure smooth playback.

---


   
