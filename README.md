# Friendango

Deployed at: https://shrouded-beyond-30999.herokuapp.com/

## Description

A social network for movie reviews that enables users to submit their own reviews and to see the reviews of their friends and any other users they choose to follow. It includes charts that analyze the popularity, average scores, and score distributions for movies that have been reviewed on the site. Friendango also includes functionality to search for specific movies or users. Users can help the social network grow by sharing their profile or a link to an individual review with their friends.

| Technologies used                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Node.js, Express, MySQL, Sequelize, Handlebars, JavaScript, jQuery, Heroku, JawsDB, OMDB API, HTML, CSS, Bootstrap, ESLint, Dotenv environmental variables |

## Demo

![Friendango Demo](/reference/demo/Friendango-demo.gif)

## Installation

In the Friendango directory, **create a .env file** and type the following:

```
password="(your MySQL password)"
apikey="(your OMDB API key)"
```

Then save the .env file.

In **MySQL Workbench**, create a local database by entering

```
CREATE DATABASE friendango;
```

Depending on your MySQL settings, you may also need to enter

```
SET GLOBAL sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''));
```

From the **command line**, open the Friendango directory and enter

```sh
npm install
```

Once the dependencies are installed, enter

```sh
node server.js
```

A link to the local server will be logged.

## Credits

- "stripes-light.png" Made by Aleksandar Velev, from https://www.toptal.com/designers/subtlepatterns/

## License

© 2020 Gina Lucy, Ben Ferriman, Mary Kate White

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
