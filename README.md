# Gabble

The Iron Yard Weekly Project: Gabble has been hacked. As part of the art of war:- ```If you know the enemy and know yourself, you need not fear the result of a hundred battles```

## Steps :- 

1. ```git clone https://github.com/nipunbatraTw/gabble/```
2. Run ```npm install```
3. Run ```npx sequelize-cli db:migrate```
4. Create 4 accounts for Alice, Bob, Charlie and Eve

### Task 1 : Launching a CSRF attack

1. Edit the html document in the csrfattacker folder to launch a csrf attack to update create a new gab in the user's name
2. serve the html by running ```npm run serve```
3. Find a way to prevent this attack

### Task 2 : Launching an SQL injection attack

1. Go to localhost:8000/login and perform an SQL injection attack, logging in as Alice
2. Find a way to prevent this attack

### Task 3 : Launching an SQL injection attack

1. Create a Gab with an XSS script
2. Try using the xss script to do something interesting
3. Find ways to prevent this attack



* [Original Project](https://github.com/rickmurdock/gabble)


### Links to documentation

* [Express](https://expressjs.com/)
* [body-parser](https://github.com/expressjs/body-parser)
* [express-validator](https://github.com/ctavan/express-validator) and its underlying library, [node-validator](https://github.com/chriso/validator.js)
* [express-session](https://github.com/expressjs/session)
* [Sequelize](http://docs.sequelizejs.com/)
