export default function Spinner(props) {
    if (props.loading === true) {
        return (
            <div className="spinner"></div>
        )
    } else {
        return (<div></div>)
    }
}