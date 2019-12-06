import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../../../Assets/Css/CategoryChoicePage.css';

class CategoryChoicePage extends Component {
  

  render() {
    return (
        <nav className="container">
        <br/><br/>
        <div>
          <h4>Choissisez votre Categorie</h4>
        </div>
        <div>
            <table class="table_order">
                <thead>
                    <tr>
                        <td><button class="category_button"><Link to={'/childConnexion'} className="nav-link" >Déplacement</Link></button></td>
                        <td><button class="category_button"><Link to={'/childConnexion'} className="nav-link">Habitation</Link></button></td>
                    </tr>
                    <tr>
                        <td><button class="category_button"><Link to={'/childConnexion'} className="nav-link">Loisirs</Link></button></td>
                        <td><button class="category_button"><Link to={'/childConnexion'} className="nav-link">Nutrition</Link></button></td>
                    </tr>
                    <tr>
                        <td><button class="category_button"><Link to={'/childConnexion'} className="nav-link">Soins</Link></button></td>
                        <td><button class="category_button"><Link to={'/childConnexion'} className="nav-link">Responsabilité</Link></button></td>
                    </tr>
                </thead>
            </table>
            <div class="div_order">
                <button class="category2_button"><Link to={'/childConnexion'} className="nav-link">Relations/Communication</Link></button>
            </div>
        </div>
        </nav>
     
    );
    
  }
   
}


export default CategoryChoicePage;