import  Container  from "react-bootstrap/Container";
import  Nav  from "react-bootstrap/Nav";
import  Navbar  from "react-bootstrap/Navbar";
{/**Importing necessary components */}
const NavigationBar = ()=>{
    return (
        <Navbar bg = "dark" data-bs-theme="dark">
            <Container>
                {/**Navbar declared */}
                <Navbar.Brand href="/">Navbar</Navbar.Brand>
                <Nav className = "me-auto">
                    {/**Linking to open Home page */}
                    <Nav.Link href="/home">Home</Nav.Link>
                    {/**Linking to open Create page */}
                    <Nav.Link href="/create">Create</Nav.Link>
                    {/**Linking to open Read page */}
                    <Nav.Link href="/read">Read</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;