# Smartphone Search Filter

## What is this project?

This is a real-time search component built with React. As you type in the search box, the list of smartphones updates instantly to match your text.

## Key Features

- Real-time search filtering.
- Case-insensitive search (works for both capital and small letters).

## What I Learned

1. Controlled Components: Used `useState` to track what the user is typing.
2. Array Filter: Used JavaScript `.filter()` to find the matching smartphones.
3. Method Chaining: Combined `.toLowerCase()` and `.includes()` so the search works properly even if the user types in uppercase or lowercase.
4. List Rendering: Used `.map()` to display the final filtered list on the screen.
