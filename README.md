# Brit Matrix App

## setup

```bash
$ git clone git@github.com:LockeNewell/brit_matrix_project.git
$ docker build -t brit_matrix_app .
$ docker-compose up -d
```

this was an app Dr Newell needed me to create for her upcoming conference. as it felt like what was discussed in my interviews I thought it would be a great chance to show my ability.

I had high goals with this project and will have to continue even after the ETI team has looked at this as this will be used IRL.

Now you can access the application at <http://127.0.0.1:8000>

### tl;dr

Bilingual Reading Intervention Targeting

This website is designed to help educators target reading interventions for bilingual learners.
To use the site, select the best description of each skill below. Recommendations for assessment
tools to measure each skill are in each skill box below as well. Note that language proficiency
means oral language proficiency and/or vocabulary, depending on assessment scores available.
After you click submit, a recommendation of the reading intervention priorities for the learner is
provided. To use the site for another recommendation, simply click ‘clear’ and select other skill
descriptions.

Stack and version numbers used:

| Name   | Version |
| ------ | ------- |
| Django | 4.2.3   |

## Folder structure

```
$ tree -L 1 --dirsfirst
.
├── config              # files needed for configuration
├── brit_matrix_app     # actual webapp
├── Dockerfile          # docker setup
├── README.md           # this file
└── requirement.txt     # docker required stuff for Django
```

## Setting up

See processes:

```bash
$ docker-compose ps                 # docker-compose processes
$ docker ps -a                      # docker processes (sometimes needed)
$ docker stats [container name]     # see live docker container metrics
```

See logs:

```bash
# See logs of all services
$ docker-compose logs

# See logs of a specific service
$ docker-compose logs -f [service_name]
```

Run commands in container:

```bash
# Name of service is the name you gave it in the docker-compose.yml
$ docker-compose run [service_name] /bin/bash
$ docker-compose run [service_name] python /srv/starter/manage.py shell
$ docker-compose run [service_name] env
```

Remove all docker containers:

```bash
docker rm $(docker ps -a -q)
```

Remove all docker images:

```bash
docker rmi $(docker images -q)
```

### Some commands for managing the webapp

To initiate a command in an existing running container use the `docker exec`
command.

```bash
# Find container_name by using docker-compose ps

# restart uwsgi in a running container.
$ docker exec [container_name] touch /etc/uwsgi/reload-uwsgi.ini

# create migration file for an app
$ docker exec -it [container-name] \
    python /srv/[project-name]/manage.py makemigrations scheduler

# migrate
$ docker exec -it [container-name] \
    python3 /srv/[project-name]/manage.py migrate

# get sql contents of a migration
$ docker exec -it [container-name] \
    python3 /srv/[project-name]/manage.py sqlmigrate [appname] 0001

# get to interactive console
$ docker exec -it [container-name] \
    python3 /srv/[project-name]/manage.py shell

# testing
docker exec [container-name] \
    python3 /srv/[project-name]/manage.py test
```
