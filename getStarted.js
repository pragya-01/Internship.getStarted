import { Component } from "react";
import './getStarted.css';


class getStarted extends Component {
  render() {
  return (
          
    <div className="getStarted">
    <div className="getStartedText">
        <p>
            Find the <span className="getStartedBest">best</span> suppliers and service 
            <br/>
            providers to get your business <span className="getStartedGrowing"> growing</span>
        </p>
    </div> 
     <button type="button" className="getStartedButton" id="getStartedButton">
       <span className="getStartedButtonText"> Get Started</span>
     </button>
</div>
           );
}
};

export default getStarted;
