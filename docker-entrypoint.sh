#!/bin/bash

# Wait for the database to be ready before running tests
echo "Waiting for database..."
while ! nc -z $DB_HOST $DB_PORT; do
    sleep 1
done
echo "Database is ready!"

# Run Django tests
python manage.py test

# Start the Django development server
python manage.py runserver 0.0.0.0:8000