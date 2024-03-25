# N8 real estate frontend e-commerce

## Table of Contents

- [Introduction](#introduction)
- [Technologies](#technologies)
- [Architecture](#architecture)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)

## Introduction

This project is the frontend of the N8 real estate e-commerce website, built using technologies like React and Next.js 14. With React's component-based approach and Next.js's server-side rendering features, it was developed a user-friendly interface that makes browsing real estate listings smooth and enjoyable for users.

## Technologies

- Typescript
TypeScript was chosen for its static typing capabilities, which enhance code reliability and developer productivity by catching errors during development.
- Next.js 14
Next.js 14, the most modern version of Next.js, was selected for its powerful capabilities, including server components, image optimization, ease of SEO implementation and more, which allow us to build a faster and more scalable frontend.
- React Hook Form
React Hook Form provides a simple and efficient way to manage form state in React applications, particularly suited for uncontrolled components, enhancing performance and user experience.
- Yup
Yup was used for form data validation (filter and agent contact forms), ensuring that user inputs adhere to specific rules and constraints, thus improving data integrity and application reliability.
- Tailwind CSS
Tailwind CSS was utilized for its utility-first approach, enabling rapid UI development with pre-defined utility classes and customizable design system.
- Responsiveness
The project was designed and implemented to be responsive across various devices, including desktops, tablets, and mobile phones, ensuring SEO and a seamless user experience across different screen sizes.
- Semantic HTML with accessibility
Semantic HTML elements were employed throughout the project to enhance accessibility and SEO, ensuring that the application is usable and understandable for all users, including those using assistive technologies.
- Eslint
Eslint was integrated into the project for code linting and enforcing consistent coding styles, improving code quality and maintainability.
- Date-fns
Date-fns was integrated into the project for handling the date listed in the property details page, providing a comprehensive set of utility functions for manipulating and formatting dates.
- Lucide-react
Lucide-react was used for adding scalable vector icons to the project, providing a wide range of customizable icons for enhancing the user interface and user experience, as the Heart and ArrowLeft for the property details page.

## Architecture

- Component-based code organization
The codebase was organized into separate components to improve readability, scalability, and maintainability, adhering to best practices for React application development.
- Composition Pattern for filter components (HOCs)
The composition pattern, leveraging Higher Order Components (HOCs), was adopted for the Filters feature, facilitating code reuse and separation of concerns.
- Container Pattern with Server Components
The Container pattern, along with Server Components in Next.js, was utilized to achieve a more efficient and scalable architecture, considering the server-side logic from the server components for fetching and deliverying (cached) data for children client components and then enhancing performance and avoiding unecessary API requests. By the way, the API address URL for fetching the properties is the following: https://s3.us-west-2.amazonaws.com/cdn.number8.com/LA/listings.json. The data fetching process utilized the Fetch API, optimized by Next.js, enabling caching of fetched properties for reuse and revalidation every hour.
- Uncontrolled components
Uncontrolled components were chosen to efficiently manage form state, enhancing the user experience with minimized overhead and unnecessary rerenders, thus optimizing performance.
- State management with reducers and providers using Context API
State management was implemented using Reducers and Providers with the Context API, enabling centralized management of application state and facilitating data flow between components.
- The project structure is organized as follows:
  - Next.js App Router folder ("app"): This folder contains the Next.js application router and serves as the entry point for the application.
  - Components folder: All the components of the application are stored in this folder. This structure helps maintain a clear separation of concerns and facilitates component reusability.
  - Contexts folder: Application contexts, along with their associated providers and reducers, are stored in this folder. Contexts are used for managing global state within the application.
  - Schemas folder: This folder houses the form validation schemas used throughout the application. Separating these schemas into their own folder promotes code organization and maintainability.
  - Types folder: Global types used across the application are stored in this folder. By centralizing type definitions, code consistency and readability are improved.
  - Utils folder: Utility functions utilized throughout the codebase are stored in this folder. These functions serve various purposes and are essential for maintaining a clean and efficient codebase.

## Prerequisites

Before getting started, ensure you have the following installed on your machine:

- Node.js (v12 or higher)
- npm (v6 or higher)

## Installation

First, install all the dependencies:

```bash
npm install
```

## Usage

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
