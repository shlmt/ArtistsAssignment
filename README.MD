# Home Assignment - Music Artists Search

A React application that allows users to search for music artists and view their details, including albums, songs, and more.

## Features

- **Search Page**: Form with input and submit button to search for artists by name. Fetches results from TheAudioDB API and displays them as cards with artist name and image.
- **Artist Detail Page**: Click on an artist card to navigate to a detail page showing artist name, image, biography, and top 3 songs (name, album, and duration).
- **Loading & Error Handling**: Displays a loader during data fetching and handles empty or error states gracefully.
- **Responsive Design**: Optimized for mobile devices.
- **Data Fetching**: Uses Tanstack Query for API calls.
- **Navigation**: Implemented with React Router.

## Tech Stack

- React
- TypeScript
- Tanstack Query
- React Router
- Tailwind CSS
- Vite

## Installation & Running

1. Clone the repository: `git clone https://github.com/shlmt/ArtistsAssignment`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
