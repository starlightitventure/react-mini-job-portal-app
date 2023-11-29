# Mini Job Portal Website

Welcome to the Mini Job Portal Website, a platform for job seekers to register their profiles and for recruiters to find potential candidates.

## Table of Contents
- [Features](#features)
- [Pages](#pages)
  - [Home Page](#home-page)
  - [Candidate Registration](#candidate-registration)
  - [Candidate List](#candidate-list)

## Features

### Candidate Registration
Candidates (job seekers) can register on the website by providing their name, email, role, and skills. The registration form includes:
- Name (required)
- Email (required, must be unique)
- Role (required)
- Skills (at least one, maximum of five)

Upon successful registration, the candidate's profile is added to the candidate list.

### Candidate List
Recruiters can view a list of registered candidates. The list includes profile cards with the following details:
- Name
- Role
- Email
- Skills (displayed as tags)

Recruiters can search for candidates based on their skills using a search bar. The search results are dynamically updated, and a title shows the number of profiles found. An "All" button resets the search and shows all available profile cards.

## Pages

### Home Page
- **Route:** /
- Navbar with the heading "Job Portal."
- Two buttons: "Candidate List" and "Candidate Registration." The "Candidate List" button displays the total number of candidate profiles in parentheses.

### Candidate Registration
- **Route:** /candidate/registration
- Navbar with the heading "Job Portal" and buttons to navigate to "Candidate List" and "Home."
- Registration form with fields for name, role, email, and skills. The form includes an "Add Skill" button, and a tag appears below the input box for each added skill. The submit button is disabled until required fields are filled.
- Displays a "Email already exists" message if a user tries to register with an existing email.
- Maximum of five skills can be added.
- Upon successful registration, a message is displayed: "Candidate profile created."

### Candidate List
- **Route:** /candidate/list
- Navbar with the heading "Job Portal" and buttons to navigate to "Candidate Registration" and "Home."
- Displays a list of profile cards with candidate details (name, role, email, skills).
- Includes a search bar for skill-based search and an "All" button to reset the search.
- A title shows the number of profiles found after a search.