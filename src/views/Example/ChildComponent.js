import React from "react";

class ChildComponent extends React.Component {
    state = {
        showJob: false
    }
    handleShowHide = () => {
        this.setState({
            showJob: !this.state.showJob
        })
    }
    handleDelete = (job) => {
        console.log(job)
        this.props.deleteJob(job)
    }
    render() {
        let { arrJob } = this.props
        let { showJob } = this.state
        return (
            <>
                {showJob === false ?
                    <div>
                        <button onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                    :
                    <>
                        <div className="job-list">
                            {
                                arrJob.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary} <></>
                                            <span onClick={() => this.handleDelete(item)}>X</span>

                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                }
            </>
        )
    }
}

export default ChildComponent