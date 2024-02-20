import "./Home.scss"
import ProjectDetails from "../../components/Project_details";



function Home(){
    return(
        <div className="col-12 HomeDiv">
            <h1 className="col-12">Project Status</h1>
            <ProjectDetails/>
           
            
        </div>
    )
}
export default Home;