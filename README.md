# YouTube Clone

This project is a simple YouTube clone built using React and the YouTube Data API. It allows users to browse videos, view channel details, search for videos, and watch individual video content.

## Features

- **Feed:** Displays a feed of videos.
- **Video Detail:** Shows detailed information about a specific video.
- **Channel Detail:** Provides information about a specific channel.
- **Search:** Allows users to search for videos based on a search term.

## Components

The project is divided into various components, including:

- **Channel Card:** Component for displaying channel information.
- **Channel Details:** Component for showing detailed information about a channel.
- **Feed:** Component for displaying a feed of videos.
- **Loader:** Component for showing loading indicators.
- **Navbar:** Navigation bar component.
- **Search Bar:** Component for searching videos.
- **Search Feed:** Component for displaying search results.
- **Sidebar:** Sidebar component for navigation.
- **Video Card:** Component for displaying video information.
- **Video Details:** Component for showing detailed information about a video.
- **Videos:** Component for displaying a list of videos.

## Fetch API

The project utilizes the YouTube Data API for fetching video and channel information. It makes use of Axios to make HTTP requests to the API endpoints.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/VipanshuVashisht/Youtube-Clone.git
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up environment variables:

    Create a `.env` file in the root directory and add your RapidAPI key:

    ```env
    REACT_APP_RAPID_API_KEY=your_api_key_here
    ```

4. Start the development server:

    ```bash
    npm start
    ```


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
