
import{ Component } from 'react'
class Kitten extends Component {
    render(){
        return (
        <>
        <img src={this.props.ImageSrc} alt={this.props.AltName} />
        </>
        )
        }
}

export default Kitten