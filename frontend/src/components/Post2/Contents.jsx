const Contents = [
    {
        order: "1",
        title: [
        <h1 className="title"><span className="m">M</span>ongoDB</h1>,
    ],
    description: [
        <h6 className="subtitle">Non-SQL Database</h6>,<br/>,
    ],
        content: [
            <p>MongoDB forms the M of the MERN stack and works very well with the JavaScript stack. MongoDB is a NoSQL database in which data is stored in documents that use key-value pairs. With a document data model that maps to how developers think and code, and a powerful, unified query API, MongoDB makes application development faster and more flexible.</p>,
            <p>It stores the data using JSON format as an object that developers like, instead of using tables, this is how it is different from other databases. The data stored in MongoDB is like this:</p>,
    
        ],
        code:[
            "\{",<br/>,
            <p className="no-padding"><span className="blue">title:</span> "Test title"</p>, 
            <p className="no-padding"><span className="blue">_id:</span> 6356482594d30b773cc9ffc8 </p>,
            <p className="no-padding"><span className="blue">post_content:</span> Array </p>, 
            <p className="no-padding"><span className="orange">0:</span> "Test content" </p>,
            <p className="no-padding"><span className="blue">post_img:</span>  "flowers.jpg" </p>,
            <p className="no-padding"><span className="blue">postdate:</span> 2022-10-24T08:09:09.248+00:00</p>, 
            <p className="no-padding"><span className="blue">__v:</span> 0</p>,
            "\}",<br/>,
        ],
        img: "https://raw.githubusercontent.com/SelenaHan/myblog/main/frontend/src/Images/mongodb.png",
    },
    {
        order: "2",
        title: [
            <h1 className="title"><span className="e">E</span>xpress.js</h1>,
        ],
        description: [
            <h6 className="subtitle">NodeJS web Framework</h6>,<br/>,
        ],
        content: [
            <p>Express is a minimal, clean, and flexible Node.js web application framework that provides a robust set of features for developing web and mobile applications.</p>,
            <p>It makes the development of Node-based web applications much faster. Actually, it is just JavaScript. In the MERN stack, Express will be used as the backend API server which interacts with the MongoDB database to serve data to React applications.</p>,
            <p>Express has a lot of HTTP utility methods and middleware at your disposal, which helps you to create a robust API quicker and easier. There are a lot of popular frameworks based on the Express.</p>,
        ],
        img: "https://raw.githubusercontent.com/SelenaHan/myblog/main/frontend/src/Images/express.png",
    },
    {
        order: "3",
        title: [
            <h1 className="title"><span className="r">R</span>eact.js</h1>,
        ],
        description: [
            <h6 className="subtitle">Frontend JS Framework</h6>,<br/>,
        ],
        content: [
            <p>React was created by Jordan Walke, a software engineer at Facebook. It is a free, open-source JavaScript Library that is used for building user interfaces specifically for single-page applications. Using React you can build up complex interfaces through simple Components, connect them to data on your backend server, and render them as HTML. It’s used for handling the view layer for web and mobile applications.</p>,
            <p>React is designed specifically for building user interfaces, it does not include many of the tools some developers might consider necessary to build an application. But it allows the developer to choose other libraries to accomplish tasks.</p>, 
            <p>Almost all modern tech companies use React, such as Microsoft, Facebook, Airbnb, and so on.</p>, 
           <p>The main reason why react is used is for Single Page Applications (SPA). SPA means rendering the entire website on one page rather than different pages of the website. It makes the users feel our website’s loading much smoother and faster. </p>, 
        ],
        img: "https://raw.githubusercontent.com/SelenaHan/myblog/main/frontend/src/Images/react.png",
    },
    {
        order: "4",
        title: [
            <h1 className="title"><span className="n">N</span>ode.js</h1>,
        ],
        description: [
            <h6 className="subtitle">Backend Web Server</h6>,<br/>,
        ],
        content: [
            <p>Node.js is designed for building scalable Web and mobile applications. It is an open-source server environment and a back-end JavaScript runtime environment. </p>,
            <p>Since it is cross-platform it can run on Windows, Linux, Unix, and macOS. Node.js runs on the V8 JavaScript Engine and executes JavaScript code outside a web browser.</p>,
            <p>NodeJS is JavaScript, so it lets us build a web application around a single programming language, rather than different languages for server-side and client-side scripts. This saves us a lot of time to learn another language capable of running back end.</p>,
            
        ],
        img: "https://raw.githubusercontent.com/SelenaHan/myblog/main/frontend/src/Images/nodejs.png",
    },
]

export default Contents;
