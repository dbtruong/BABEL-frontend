import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../../Assets/Css/SortingTopicsPage.css';


class SortingTopicsPage extends Component {
  render() {
    return (
        <nav class="container">
            <div>
            
            <Link to={'/'}><img src="Images/logo.png" alt="logo habitudes" className="imgHabit"/></Link><br/>
            </div>
            <br/>
            <h4>Selectionnez l'un des trois choix selon vos habitudes</h4>
            <br/><br/><br/><br/><br/>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td class="cel"><button class="Sorted_button"><Link to={'/choice'} className="nav-link">Présent dans mes habitudes</Link></button></td>
                            <td class="cel"><button class="Sorted_button"><Link to={'/choice'} className="nav-link">Non-présent dans mes habitudes</Link></button></td>
                            <td class="cel"><button class="Sorted_button"><Link to={'/choice'} className="nav-link">Je veux dans mes habitudes</Link></button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </nav>
    );
  }
}

export default SortingTopicsPage;