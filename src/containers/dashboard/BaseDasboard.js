import React from "react";
import Header from "../../components/Header";
import '../../styles/dashboard/index.css'
import Sidebar from "../../components/sidebar";
class BaseDashboard extends React.Component{

      render(){
          return(
              <div>
                  <Header />
                  <div class = "d-flex">
                       <Sidebar/>
                       <div className = "content pt-1">
                           <div className = "list-group-item">
                           {this.props.children}
                           </div>
                       </div>
                      
                  </div>
                  
              </div>
          );
      }
}

export default BaseDashboard;