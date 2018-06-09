import React from 'react';


const asyncComponent = (importComponent)=>{
    return class extends React.Component{
        state={
            receiveComponent:null
        }
        componentDidMount(){
            importComponent()
            .then(component=>{
                this.setState({receiveComponent:component.default})
            })
        }
        render(){
            const RenderComponent = this.state.receiveComponent
            return RenderComponent ? <RenderComponent {...this.props} /> : null
        }
    }
}

export default asyncComponent;