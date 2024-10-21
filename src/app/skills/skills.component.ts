import { Component } from '@angular/core';

interface Card{
  name: string;
  type: string;
  definition: string;
  websiteLink: string;
}
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
 cards: any[] = [
  {
    name: "Angular",
    type: "Front-end development framework",
    definition: "Angular is a TypeScript-based web framework for building dynamic single-page applications (SPAs) with a component-driven architecture and built-in tools for routing, forms, and dependency injection.",
    websiteLink: "https://angular.io",
    logo: "../../assets/images/angular.png"
  },
  {
    name: "ASP.NET",
    type: "Back-end development framework",
    definition: "ASP.NET is a server-side web application framework designed for building dynamic web applications and services with C# or VB.NET. It enables developers to create robust, scalable, and secure web solutions using a component-based architecture, built-in security features, and support for modern web technologies.",
    websiteLink: "https://dotnet.microsoft.com/en-us/apps/aspnet",
    logo: "../../assets/images/aspnet.jfif"
  },
  {
    name: "Blazor",
    type: "Front-end development framework",
    definition: "Blazor is a framework for building interactive web UIs using C# instead of JavaScript. It allows developers to create single-page applications (SPAs) that run in the browser with WebAssembly or on the server with ASP.NET Core, enabling full-stack C# development for both client and server.",
    websiteLink: "https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor",
    logo: "../../assets/images/angular.png"
  },
  {
    name: "SQL",
    type: "A language used to interact with databases",
    definition: "SQL (Structured Query Language) is a standardized programming language used for managing and manipulating relational databases. It enables users to perform tasks such as querying data, updating records, inserting new data, and deleting records through powerful commands like SELECT, INSERT, UPDATE, and DELETE. SQL is essential for data analysis and is widely used across various database systems, including MySQL, PostgreSQL, and Microsoft SQL Server.",
    websiteLink: "https://aws.amazon.com/what-is/sql/#:~:text=Structured%20query%20language%20(SQL)%20is,relationships%20between%20the%20data%20values.",
    logo: "../../assets/images/angular.png"
  },
  {
    name: "C#",
    type: "Powerful object oriented programming language",
    definition: "C# (C Sharp) is a modern, object-oriented programming language developed by Microsoft, designed for building a wide range of applications, including web, desktop, mobile, and game development. It features strong type-checking, garbage collection, and a rich set of libraries, making it versatile and developer-friendly. C# is integral to the .NET ecosystem and supports various programming paradigms, such as imperative, functional, and component-oriented programming.",
    websiteLink: "https://docs.microsoft.com/en-us/dotnet/csharp/.",
    logo: "../../assets/images/angular.png"
  },
  {
    name: "JavaScript",
    type: "Powerful object oriented programming language",
    definition: "JavaScript is a versatile, high-level programming language primarily used for enhancing web pages and creating interactive web applications. It allows developers to implement complex features such as dynamic content updates, multimedia, animations, and form validations. As a core technology of the web, alongside HTML and CSS, JavaScript can be executed on the client side (in the browser) and on the server side (with environments like Node.js), making it essential for modern web development.",
    websiteLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    logo: "../../assets/images/angular.png"
  },
  
 ];

 goToWebsite(card: Card){
  window.location.href = card.websiteLink;
 }
}
