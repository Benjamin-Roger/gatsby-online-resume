import React, { Component } from 'react';

import handleViewport from 'react-in-viewport';



const ProgressBar = ({ title, activePercentage, className }) => (

    <div className="progress" style={{height:"10px"}}>
        <div
            className={`progress-bar rounded ${className}`}
            role="progressbar"
            style={{ width: activePercentage + "%" }}
            aria-valuenow={activePercentage}
            aria-valuemin="0"
            aria-valuemax="100"
            show_values="true"
            aria-label={title}
            tooltip="true"

            ></div>
    </div>);


const Trigger = ({ inViewport, forwardedRef }) => {

    return (<div ref={forwardedRef}></div>)
}


const ViewportTrigger = handleViewport(Trigger, /** options: {}, config: {} **/);

class LineChart extends Component {

    constructor(props) {
        super(props);

        this.state = {
            hover: false
        };

        this.handleScroll = this.handleScroll.bind(this);

    }

    handleScroll() {
        this.setState({
            hover: !this.state.hover
        })

    }


    render() {

        const { title, percentage } = this.props;
        
        const activePercentage = this.state.hover ? percentage : 0;


        return (
            <div className="pr-2 mb-2 d-inline-block progress-wrapper">
                <h5 id={title}>{title}</h5>

                <ProgressBar {...this.props} activePercentage={activePercentage} />

                <ViewportTrigger onEnterViewport={this.handleScroll} onLeaveViewport={this.handleScroll} />
            </div>


        )
    }
};

export default LineChart;