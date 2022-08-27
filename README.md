# Menage your time API
Command to run json-server:
npx json-server --watch db.json --port 5000
npx json-server-auth --watch db.json -r routes.json --port 5000

# Options
--delay, -d        Add delay to responses (ms)
--middlewares, -m  Paths to middleware files   
Others options:
https://github.com/typicode/json-server#add-custom-routes