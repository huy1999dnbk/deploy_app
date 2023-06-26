build: for deploy
docker build -t api-server . (for backend)
docker build -t frontend . (for frontend)
docker-compose up (for the entire app)