# Taj App  

## Hotel Management System - React Application

This is a React-based hotel management application that allows users to:
- Add new hotels with detailed information
- View all hotels in the system
- Search for hotels by title
- Delete hotels from the system

## Features

### 1. Add Hotel Form
- Comprehensive form to add new hotels with fields including:
  - Basic information (name, category, location)
  - Ratings and reviews
  - Contact details (website, phone number)
  - Operational details (check-in/out times)
  - Amenities and facilities (parking, pool, wifi, etc.)
  - Price range selection
  - Photo URLs
- Form validation and success message display

### 2. Hotels List
- Displays all hotels in the system
- Each hotel entry has a delete button
- Loading and error states handling
- Success message after deletion

### 3. Hotel Search
- Search for hotels by title
- Displays detailed information for found hotels
- Handles loading and error states

## Environment

The application expects a backend API to be available at:
https://backend-hotel-api-phi.vercel.app

The API should support the following endpoints:
- `GET /hotels` - Get all hotels
- `POST /hotels` - Add a new hotel
- `GET /hotels/:title` - Get hotel by title
- `DELETE /hotels/:id` - Delete a hotel

## Components

1. **AddHotelForm.jsx**
   - Form for adding new hotels
   - Handles form state and submission
   - Includes various input types (text, number, select, checkbox)

2. **HotelByTitle.jsx**
   - Displays hotel information based on title search
   - Uses custom `useFetch` hook for data fetching

3. **Hotels.jsx**
   - Lists all hotels with delete functionality
   - Uses custom `useFetch` hook for data fetching

4. **App.jsx**
   - Main application component that renders all features
   - Includes Bootstrap CSS

## Technologies Used

- React (with Hooks: useState)
- React Icons (FaPaperPlane, FaTrash)
- Bootstrap 5 for styling
- Custom `useFetch` hook for API calls
- Vite build tool


