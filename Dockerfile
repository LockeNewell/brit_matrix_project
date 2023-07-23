# Use the official Python base image
FROM python:3.9.9

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file into the container at /app
COPY requirements.txt /app/

# Install Django and other dependencies
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Copy the current directory contents into the container at /app
COPY . /app/

# Install the necessary tools for running tests
RUN apt-get update && \
  apt-get install -y netcat && \
  apt-get clean

# Copy the test script into the container
COPY ./docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

# Start the test runner
ENTRYPOINT ["/docker-entrypoint.sh"]