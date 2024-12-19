import { Container, Row } from "react-bootstrap";

function UsersPage() {

    return (
        <>
            <Container>
                <Row className="d-flex justify-content-center py-5 homePage-info">
                    <div className="col-lg-8 col-md-6 col-sm-12 text-white">
                    <h2> This project has been developed using React and TypeScript, integrating the JSON Placeholder API to create an efficient user management system. </h2> <br></br>
                    <h4> Users Page: Displays a comprehensive list of users, with an option to access detailed user profiles.</h4> 
                    <h4> User Details Page: Provides in-depth information about each selected user, including their posts, albums, and todos. </h4> 
                    <h4> Favorites Page: Allows users to add individuals to a favorites list and easily manage their preferences. </h4> <br></br>
                    <p> The application is designed with simplicity and user experience in mind, offering an intuitive interface to efficiently manage and explore data. </p> 
                    <h2> Technologies Utilized </h2> <br></br>
                    <p> React: A modern, component-based approach to user interface development. </p> 
                    <p> TypeScript: Ensures reliable, maintainable code with static typing. </p> 
                    <p> React Router DOM: Facilitates seamless page navigation and routing within the application. </p> 
                    <p> Zustand: A lightweight and straightforward solution for global state management. </p> 
                    <p> React Bootstrap: Utilizes pre-styled components for responsive, mobile-first designs. </p> 
                    <p> React Icons: Elegant, customizable icons for enhanced user interface aesthetics. </p> 
                    <p> Sass: A CSS preprocessor that enables clean, organized, and maintainable styles. </p>
                    </div>
                </Row>
            </Container>
        </>
    );
}

export default UsersPage;