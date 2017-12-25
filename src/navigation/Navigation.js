import './navigation.scss';
import {NavLink} from './NavLink';
export class Navigation extends React.Component {
    render() {
        return (
            <nav className={this.props.scope || 'main-nav'}>
                <ul>
                    {this.props.navlinks.map( (navlink, index) =>                     
                        <li key={ index } >
                            <NavLink href={`/${navlink}`} title={`${navlink}`}/>
                        </li>
                    )}
                </ul>
            </nav>
        );
    };
}