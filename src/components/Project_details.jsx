import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap,faPersonChalkboard,faCalendarDays,faReceipt,faArrowDown,faArrowUp} from "@fortawesome/free-solid-svg-icons";

import "./Project_details.scss";
function ProjectDetails() {
  return (
    <>
      <div className="col-5 maindiv">
        <div className="col-6 content_div">
          <h2 className="col-12">42,980</h2>
          <h3 className="col-12">Total Students</h3>
          <p className="col-12">
          <FontAwesomeIcon className="downarrow" icon={faArrowDown} /><span className="down_percent">-17.06%</span> than last 6 month
          </p>
         
        </div>
        <div className="div_icon" style={{color:"white"}}>
        <FontAwesomeIcon className="icon" icon={faGraduationCap} />
        </div>
      </div>
      <div className="col-5 maindiv">
        <div className="col-6 content_div">
          <h2 className="col-12">450</h2>
          <h3 className="col-12">Total Teachers</h3>
          <p className="col-12">
          <FontAwesomeIcon className="uparrow" icon={faArrowUp} /><span className="up_percent">+27%</span> than last 4 month
          </p>
        </div>
        <div className="div_icon">
        <FontAwesomeIcon className="icon" icon={faPersonChalkboard} />
        </div>
      </div>
      <div className="col-5 maindiv">
        <div className="col-6 content_div">
          <h2 className="col-12">985</h2>
          <h3 className="col-12">Events</h3>
          <p className="col-12">
          <FontAwesomeIcon className="uparrow" icon={faArrowUp} /><span className="up_percent">+12.01</span> than last 4 month</p>
        </div>
        <div className="div_icon">
        <FontAwesomeIcon  className="icon" icon={faCalendarDays} />
        </div>
      </div>
      <div className="col-5 maindiv">
        <div className="col-6 content_div">
          <h2 className="col-12">1,980</h2>
          <h3 className="col-12">Invoices</h3>
          <p className="col-12">
          <FontAwesomeIcon className="downarrow" icon={faArrowDown} /><span className="down_percent">-15.02%</span> than last 6 month
          </p>
        </div>
        <div className="div_icon">
        <FontAwesomeIcon className="icon" icon={faReceipt} />
        </div>
      </div>
    </>
  );
}
export default ProjectDetails;
