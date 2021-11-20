import React from "react";
import BaseDashboard from "./BaseDasboard";

const baseDashboard = Component =>{
        
        return class extends React.Component{
            render(){

                return(
                    <BaseDashboard>
                        <Component {...this.props} />
                        </BaseDashboard>
                );
            }
        }

}

export default baseDashboard;