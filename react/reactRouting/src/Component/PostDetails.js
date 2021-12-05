import React from 'react';

const PostDetails = (props) => {
    console.log(props)
    console.log(props.match.params.topic)
    return(
        <div className="panel panel-info">
            <div className="panel-heading">
                <h2>{props.match.params.topic} Details Page</h2>
            </div>
            <div className="panel-body">
                <p>
                    {props.match.params.topic} Details is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
                </p>
            </div>
        </div>
    )
}

export default PostDetails;