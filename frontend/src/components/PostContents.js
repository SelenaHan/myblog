
const PostContents = [
    {
        order: "1",
        title: [<br/>,<h1>Introduction</h1>,<br/>,],
        post_content: [
            "-	Welcome to my blog, in this blog I will talk about how to use NodeJS(for Back-end), MongoDB(for Database), React(for Front-end) to build a blog post website like this.", <br/>,
            "-	We can use this website post new posts and edit or delete new post, I also want to add a leave a like or comments or subscribe functions, I will keep updating",  <br/>,
            "-	I use Bootstrap to style my website so that my website can be displayed very nicely on screens of different sizes", <br/>,
            "-	I also write down about how to deploy a Ract project on GitHub, so that other people can see this blog", <br/>,
            "-	This is the <a href= \"https://github.com/SelenaHan/myblog\">GitHub link</a>  of the project, you are welcome to check out the code of the project", <br/>,
            "-	Hope you could gwt something from this post, I would aapreciate it if you have good advice or seggestion or anything please contact me. Happy coding, Enjoy!", <br/>,
            "-	Happy coding, Enjoy!", <br/>,
        ],
        post_img: "https://raw.githubusercontent.com/SelenaHan/myblog/main/frontend/src/Images/1.jpg",
    },
    {
        order: "1-1",
        title: [<h2>I. Setup</h2>,<br/>,"1. Software this project will use: "],
        post_content: [
            "-	NodeJS: this is for our back end.", <br/>,
            "-	VS Code: for editors, a lot of React developers recommended VS Code, but other editors work too.",  <br/>,
            "-	Postman: this app will help us to test out whether a connection was successful or not and also our functions works or not.", <br/>,
        ],
        post_img: "https://raw.githubusercontent.com/SelenaHan/myblog/main/frontend/src/Images/1-1.jpg",
    },
    {
        order: "1-2",
        title: "2.	Tools - MongoDB Atlas:",
        post_content: "-  Easy to set up and easy to use and change. There is a free version too",
        post_img:  "https://raw.githubusercontent.com/SelenaHan/myblog/main/frontend/src/Images/1-2.jpg",
    },
    {
        order: "1-3",
        title: "2.	Tools - React developer tools:",
        post_content: "-  This is installed on your browse, if you use chrome then google search “react developer tools” click install, this tool will help us to check our react project structure and debugging, for example this screenshot is the component tree structure",
        post_img:  "https://raw.githubusercontent.com/SelenaHan/myblog/main/frontend/src/Images/1-3.jpg",
    },
    {
        order: "1-4",
        title: "2.  Tools - Bootstrap:",
        post_content: "- Bootsrap is for helping us style our website to build beautiful websites, it will save us a lot of time writing CSS code. I will install this inside my front-end project folder.",
        post_img:  "https://raw.githubusercontent.com/SelenaHan/myblog/main/frontend/src/Images/1-4.jpg",
    },
    {
        order: "2-1",
        title: [<h2>II.	Back-end and Database</h2>,<br/>,"1.	Create a react project: "],
        post_content: [
            "-	Create a new folder on the computer", <br/>,
            "-	Use VS Code to open the folder",  <br/>,
            "-	Open the terminal in VS code", <br/>,
            "-	Use the command “npm init -y”, this will initiate our project, create the package.json file",  <br/>,
            "-	Use the command “npm install”, this will install our project, and create the package-lock.json file", <br/>,
            "-	Create a server.js filer",  <br/>,
            "-	Create-	Use the command “npm install express mongoose cors”, this will install express and MongoDB and cors packages. This will create our node_modules", <br/>,
        ],
        post_img: "https://raw.githubusercontent.com/SelenaHan/myblog/main/frontend/src/Images/2-1.jpg",
    },
    {
        order: "2-2",
        title: "2.	Create the server for the project and Connect to the database:",
        post_content: [
            "-	Signup a MongoDB Atlas account",<br/>,
            "-	Create a cluster",<br/>,
            "-	Connect our server and the MongoDB",<br/>,
            "-	Create a file “.env, this file will store the database connection link" ,<br/>,
            "-	Set up the IP address",<br/>,
            "-	Create a user and password. ",<br/>,
            "-	Put this link inside the “.env” file, need to change the <password> to your password",<br/>,
            "-	Go to “package.json” file and Change “main” value from “index.js” to “server.js”",<br/>,
            "-	Use the command “npm i dotenv”. Install the dotenv package to connect to env file",<br/>,
            "-	Use the command “npm install -g nodemon”. Install the nodemon package, this will restart the server automatically, we don’t need to start and close the server every time. Then run command “nodemon server(file name)” ",<br/>,
            "-	This is the code inside the sever.js file ",<br/>,
    
    ],
        post_img: "https://raw.githubusercontent.com/SelenaHan/myblog/main/frontend/src/Images/2-2.jpg",
    },
    {
        order: "2-3",
        title: "3.	Create a database schema",
        post_content: [
            "-	Create a folder “models” ",<br/>,
            "-	Inside this folder create a posts.js file, we will create our MongoDB schema in this file ",<br/>,
            "-	This is the code inside the models-posts.js file ",<br/>,

        ],
        post_img: "https://raw.githubusercontent.com/SelenaHan/myblog/main/frontend/src/Images/2-3.jpg",
    },
    {
        order: "2-4",
        title: "4.	Create the routes",
        post_content: [
            "-	Create a folder “routes” ",<br/>,
            "-	Inside this folder create a posts.js file,  in this file, we connect the mongoose schema and find the data from the database which uses the get method to get the data from the database ",<br/>,
            "-	This is the code inside routes-posts.js file ",<br/>,
        ],
        post_img: "https://raw.githubusercontent.com/SelenaHan/myblog/main/frontend/src/Images/2-4.jpg",
    },
    {
        order: "2-5",
        title: "5.	Connect to the server",
        post_content: [
            "-	Go the to server.js file to add the router from the routes",<br/>,
            "-	In MongoDB Atlas, create the database and the collection, and some test data. ",<br/>,
        ],
        post_img: "https://raw.githubusercontent.com/SelenaHan/myblog/main/frontend/src/Images/2-5.jpg",
    },

    {
        order: "2-6",
        title: "6.  Connect to the server--use env",
        post_content: [
            "-	After creating our database, we need to update our connection address, in the “.env” file, add the database name before “?” like the screenshot ",<br/>,
        ],
        post_img: "https://raw.githubusercontent.com/SelenaHan/myblog/main/frontend/src/Images/2-6.jpg",
    },
    {
        order: "2-7",
        title: "7.	Use postman to test connection of the backend and database",
        post_content: [
            "-   get method and put our local host address, like this screenshot",<br/>,
            "-   See if it can get data successfully, like this screenshot",<br/>,
        ],
        post_img: "https://raw.githubusercontent.com/SelenaHan/myblog/main/frontend/src/Images/2-7.jpg",
    },
    {
        order: "2-8",
        title: "8.	Add new post function: ",
        post_content: [
            "-	Inside routes-posts.js file, add a post function which allow us to post new posts to my blog ",<br/>,
            "-	Go to the postman to test our code ",<br/>,
            "-	Note when trying to add data, if it is the plane text data, the data should be in JSON format ",<br/>,
            "-  If you are trying to upload a file, choose form-data ",<br/>,
        ],
        post_img: "https://raw.githubusercontent.com/SelenaHan/myblog/main/frontend/src/Images/2-8.jpg",
    },
    {
        order: "2-9",
        title: "9.	Find post by ID function:",
        post_content: [
            "-	Inside routes-posts.js file, add a get function and inside this function we add a findById function to get the ppost we wanted  ",<br/>,
        ],
        post_img: "https://raw.githubusercontent.com/SelenaHan/myblog/main/frontend/src/Images/2-9.jpg",
    },
    {
        order: "3-1",
        title: [<h2>III.	Front-end</h2>, <br />,"1.	Create react project for the front-end and install some tools:",],
        post_content: [
            "-	In VS Code open a terminal in our project ",<br/>,
            "-	Use the command line “create-react-app frontend” to create a react project ",<br/>,
            "-	Use the command line “cd frontend” and “npm start” to start our project to see if the project was created successfully ",<br/>,
            "-	Delete the default content that we don’t need ",<br/>,
            "-	Install bootstrap by use command “npm install react-bootstrap bootstrap”. Note in order to use bootstrap we have to add the link(<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\"  integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\"  crossorigin=\"anonymous\" >) to the index.html file. And when we use certain components we have to import the components. ",<br/>,
            "-	Create components folders: this is the one of the most powerful parts about react, we can create our own components and reuse them. ",<br/>,
        ],
        post_img: "https://raw.githubusercontent.com/SelenaHan/myblog/main/frontend/src/Images/3-1.jpg",
    },
    {
        order: "3-2",
        title: "2.	Create a library for font Awesome",
        post_content: [
            "-	First, we need to install the base packages ",<br/>,
            "-	Command npm i -S @fortawesome/fontawesome-svg-core @fortawesome/react-fontawesome ",<br/>,
            "-	Command npm i -S @fortawesome/free-regular-svg-icons",<br/>,
            "-  Command npm i -S @fortawesome/free-solid-svg-icons ",<br/>,
            "-  command npm i -S @fortawesome/free-brands-svg-icons ",<br/>,
            "-	Then create a component fontAwesome.js file to build an icon library, each icon we want to use has to be imported and add to the library",<br/>,
            "-	In the file where you want to use the icon, import font awesome, like this “import { FontAwesomeIcon } from \"@fortawesome/react-fontawesome\";”",<br/>,
        ],
        post_img: "https://raw.githubusercontent.com/SelenaHan/myblog/main/frontend/src/Images/3-2.jpg",
    },
    {
        order: "3-3",
        title: "3.	Create a header component and a footer component",
        post_content: [
            "-	This is the header of the website, it contains the profile background image and profile image, and other information, it also contains a button for posting new content, but in the blog post, I will disable the button.",<br/>,
            "-	The footer component contains the copyright of the website, the contact, and other information  ",<br/>,
            
        ],
        post_img: "https://raw.githubusercontent.com/SelenaHan/myblog/main/frontend/src/Images/3-3.jpg",
    },
    {
        order: "3-4",
        title: "4.	Create the main part of the blog",
        post_content: [
            "-	This will connect to the back end and the database ",<br/>,
            "-	Install axios by using command “npm install axios” ",<br/>,
            "-	Install react-router-dom by using command “npm install react-router-dom” ",<br/>,
            "-	Create a posts component, use shortcut “rafce” for creating a “react arrow function export component” Skelton. ",<br/>,
            "-	Go to index.js file, add “import {BrowserRouter as Router} from \"react-router-dom\";” and use <Router><App /><Router>, this can route the components. ",<br/>,
            "-	Go to App.js add “import {Routes, Route} from \"react-router-dom\";” “import axios from \"axios\";” and “import {useState, useEffect} from 'react'; ",<br/>,
            "-	Then add useEffect to connect to the backend ",<br/>,
        ],
        post_img: "https://raw.githubusercontent.com/SelenaHan/myblog/main/frontend/src/Images/3-4.jpg",
    },
    {
        order: "3-5",
        title: "5.	Create a Card component",
        post_content: [
            "-	This component will display all the posts ",<br/>,
            "-	I will use Bootstrap Card component to create this component ",<br/>,
            "-	Import Card from react-bootstrap/Card ",<br/>,

        ],
        post_img: "https://raw.githubusercontent.com/SelenaHan/myblog/main/frontend/src/Images/3-5.jpg",
    },
    {
        order: "3-6",
        title: "6.	Create Posts component",
        post_content: [
            "-	In this file, there is only one map function witch list all the posts ",<br/>,
            "-	Here use props to pass the data to get the data from the database ",<br/>,
            "-	Use PostCard component to display each post which including a title and content or pictures ",<br/>,
            "-	Simply each post is inside one card, this make the code very short and clean. No repeating ",<br/>,
        ],
        post_img: "https://raw.githubusercontent.com/SelenaHan/myblog/main/frontend/src/Images/3-6.jpg",
    },
    {
        order: "3-7",
        title: "7.	Create a form to add new post",
        post_content: [
            "-	Install a package at the backend called “concurrently” by using command “npm I - -save-dev concurrently”. This will start the back end server and the front end at the same time ",<br/>,
            "-	At the back end package.json file, inside the scripts, add “ “server”: “nodemon”, “frontend”: “npm start - -prefix frontend” ” ",<br/>,
            "-	Inside frontend App.js file, change this “axios.get(\"http://localhost:8080/posts\")” to  “axios.get(“/posts\")”. Inside the package.json file add “\"proxy\": \"http://localhost:8080\",” under the “private”. ",<br/>,
            "-	Now at backend folder, use command line “npm run dev”, this will start the back end and the front end  ",<br/>,
            "-	Create a AddPost.js component, use bootstrap form ",<br/>,
            "-	Use react hooks “useState” to update the user input ",<br/>,
            "-	Note: when write the form submit function, should add “e.preventDefault();” this will prevent the browser refresh the page ",<br/>,
            "-	Use “axios.post” to connect to the back end and the database, then save the data to the database. ",<br/>,
            "-	Now test the function and Go the main page, refresh, the new post should be listed on the bottom. ",<br/>,
        ],
        post_img: "https://raw.githubusercontent.com/SelenaHan/myblog/main/frontend/src/Images/3-7.jpg",
    },
    {
        order: "3-8",
        title: "8.	Create a single post component",
        post_content: [
            "-	Use react hook “useParams” to get the id from the path then display the details of a single post ",<br/>,
            "-	Then render the page to display a single post detail ",<br/>,
        ],
        post_img: "https://raw.githubusercontent.com/SelenaHan/myblog/main/frontend/src/Images/3-8.jpg",
    },
    {
        order: "3-9",
        title: "9.	Upload image function",
        post_content: [
            "-	Go to backend models folder, add image in the database schema ",<br/>,
            "-	Go to the routes folder, edit posts.js file, use command “npm i multer” install multer, then import “multer”. ",<br/>,
            "-	Create image storage ”const storage = multer.diskStorage({})” ",<br/>,
            "-	In the add new post router and the update router, add “upload.single(“post_img)” and update the return data.",<br/>,
        ],
        post_img: "https://raw.githubusercontent.com/SelenaHan/myblog/main/frontend/src/Images/3-9.jpg",
    },
    {
        order: "4-1",
        title: [<h2>IV.	Deployment</h2>, <br />,"1.	Deploy my blog(frontend) on GitHub - Part1",],
        post_content: [
            "-	Create a new repository on GitHub",<br/>,
            "-	In VSCode the project we want to deploy, use command “npm install gh-pages - -save-dev” to install GitHub pages ",<br/>,
            "-	After install completed, go to package.json file, add “\"homepage\": \"http://SelenaHan.github.io/myblog\",” at the first line, this is define the page URL. In “scripts”: add two lines “\"predeploy\": \"npm run build\",  \"deploy\": \"gh-pages -d build\",” these are the commands to let us update the content to GitHub ",<br/>,
            "-	Go to terminal use command “git init” to initiate the project ",<br/>,
            "-	Use command “git remote add origin https://github.com/SelenaHan/myblog.git”.  this line can be found from GitHub after you create new repository it will give you a page like this  ",<br/>,
            
        ],
        post_img: "https://raw.githubusercontent.com/SelenaHan/myblog/main/frontend/src/Images/3-10.jpg",
    },
    {
        order: "4-2",
        title: "2.	Deploy my blog(frontend) on GitHub - Part2",
        post_content: [
            "-	Then use Commands:",<br/>,
            "-	git add . (add all the changes)",<br/>,
            "-	git  commit -m “leave a comment” (commit all the changes)",<br/>,
            "-	git  push -f origin main (merge all the changes to the project) ",<br/>,
            "-	npm run deploy (in the frontend folder, this will update the GitHub pages)",<br/>,
            "-	Go to GitHub, the file should be all there and inside the repository ",<br/>,
            "-	Then go to settings – pages you link is on the right, you can visit you page now. everyone can see this page use this URL ",<br/>,
        ],
        post_img: "https://raw.githubusercontent.com/SelenaHan/myblog/main/frontend/src/Images/3-10.jpg",
    },

]

export default PostContents;
