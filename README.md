
# Candy Duds 🍬

## Overview

A web-based replication of the renowned Candy Rack App, meticulously crafted to showcase pop-ups and special offers. This project was built using a modern tech stack, including React for dynamic UI components, Tailwind for utility-first styling, and Styled Components for component-specific styles. To ensure a seamless user experience, I integrated Cypress for end-to-end testing, validating the application's functionality and responsiveness.

### Key Features:
- **Dynamic Pop-ups**: Showcases special offers and interactive pop-ups to engage users.
- **Modern Tech Stack**: Leveraging React for component-based architecture, TailwindCSS for utility-first design, and Styled Components for encapsulated styles.
- **End-to-End Testing**: Implemented Cypress testing to ensure robust functionality and seamless user experience across various devices and screen sizes.

## Getting Started 🚀

### Pre-requisites

Ensure you have the following installed on your machine:
- Node.js
- npm
- Yarn

### Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the necessary dependencies:
   ```bash
   yarn install
   ```

## Scripts 🛠

### Development

To run the app in development mode:

```bash
yarn start
```

Visit [http://localhost:3000](http://localhost:3000) in your browser. Edits in the source files will trigger a live reload.

### Production

To create an optimized build for deployment:

```bash
yarn build
```

This will generate a `build` folder with minified assets ready for deployment.

### Testing

To run Cypress tests:

```bash
yarn cypress:open
```

Ensure the server is running before executing tests.

### Code Formatting

To enforce code consistency:

```bash
yarn prettify
```
