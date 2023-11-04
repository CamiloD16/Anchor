# Django + ReactJS Boilerplate

This project is a boilerplate that combines Django, a popular Python web development framework, with ReactJS, a JavaScript library for building interactive user interfaces.

## Features
- Integration of Django and React.js.
- Configuration of static and media files in Django.
- Environment setup for both development and production.
- CORS configuration to allow requests from the React development server.

## Prerequisites
- Python 3+
- Node.js (npm)

## Installation
1. Clone this repository
`git clone https://github.com/CamiloD17/Boilerplate-Django-React`

2. Use an env
`pip install virtualenv`
`virtualenv source env`
`source env/Scripts/activate`

3. Install dependencies
`pip install -r requirements.txt`
`npm install`

4. Frontend
`npm start`

In this point your frontend has been created

_Look at the url http://localhost:3000_

But if you want to watch your frontend reflected in your backend (To deploy), it is necessary to run the steps 5 and 6

5. Create build
`npm run build`

6. Backend:
`python manage.py runserver`

_Look at your http://localhost:8000_

Enjoy :wave: