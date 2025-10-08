import "./Message.css"

function Message({name, text}){
    return(
        <>
            <div id="message">
                <div id="username">{name}</div>
                <div id="text">{text}</div>
            </div>
        </>
    )
};

export default Message;