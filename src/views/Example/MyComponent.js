import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent"

class MyComponent extends React.Component {

    state = {
        arrJob: [
            { id: 'abc', title: 'developer', salary: '500$' },
            { id: 'abc2', title: 'developer', salary: '400$' }
        ]
    }

    addNewJob = (job) => {
        this.setState({
            arrJob: [...this.state.arrJob, job]
        })
    }

    deleteJob = (job) => {
        let currentJobs = this.state.arrJob
        currentJobs = currentJobs.filter(item => item.id !== job.id)
        this.setState({
            arrJob: currentJobs
        })
    }
    render() {
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />
                <ChildComponent
                    arrJob={this.state.arrJob}
                    deleteJob={this.deleteJob}
                />
            </>
        )
    }
}

export default MyComponent