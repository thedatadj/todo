// Styles
import '../styles/body.css'
import Tasks from './Tasks'
import Done from './Done'
const Body = () =>
{
    return (
        <div className='body'>
            <Tasks />
            <Done />
        </div>
    )
}
export default Body