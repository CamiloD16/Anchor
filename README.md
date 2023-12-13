# ⚓ Anchor ⚓

Welcome to Anchor, in this Social Blog we embark on a journey to explore the intersection of languages, technology and world curiosities.

## Technologies Used:

- ReactJS
- Tailwind
- Zustand
- Django
- MySQL

## Installation Process

To get Anchor up and running on your local machine, follow these steps

### 1. Clone the Repository

- `git clone https://github.com/CamiloD17/Anchor.git`
- `cd cyclone`

### 2. Set Up Virtual Environment (Optional but Recommended)

- `python -m venv venv`
- `source venv/bin/activate`

### 3. Install Dependencies

- `pip install -r requirements.txt`
- `npm install`
- `npm run build`

### 4. Define Environment Variables

_Create a .env file in the root directory and define the following variables_

- SECRET_KEY
- DEBUG
- NAME_DB
- USER_DB
- PASSWORD_DB
- HOST_DB
- PORT_DB

### 5. Apply Migrations

`python manage.py migrate ``

### 6. Run the Development Server

`python manage.py runserver`

Look at http://localhost:8000 in your browser to explore Anchor! ⚓