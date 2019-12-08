import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../../Assets/Css/CategoryChoicePage.css';
import CategoryChoiceAPI from '../../../API/CategoryChoiceAPI.js'

class CategoryChoicePage extends Component {
  
    constructor(){
        super();
        this.state = {
			currentCategory : ""
        }
        this.api = new CategoryChoiceAPI();
        this.handleClick = this.handleClick.bind(this);
    }

  handleClick(e){
      // ICI que ça se passe -> LocalStorage
      console.log(e.target.name); 
  }

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
                        <td><Link to={'/sortingTopics'} className="nav-link"><button name="Déplacement" class="category_button" onClick={this.handleClick}>Déplacement</button></Link></td>
                        <td><Link to={'/sortingTopics'} className="nav-link"><button name="Habitation" class="category_button" onClick={this.handleClick}>Habitation</button></Link></td>
                    </tr>
                    <tr>
                        <td><Link to={'/sortingTopics'} className="nav-link"><button name="Loisirs" class="category_button" onClick={this.handleClick}>Loisirs</button></Link></td>
                        <td><Link to={'/sortingTopics'} className="nav-link"><button name="Nutrition" class="category_button" onClick={this.handleClick}>Nutrition</button></Link></td>
                    </tr>
                    <tr>
                        <td><Link to={'/sortingTopics'} className="nav-link"><button name="Soins" class="category_button" onClick={this.handleClick}>Soins</button></Link></td>
                        <td><Link to={'/sortingTopics'} className="nav-link"><button name="Responsabilité" class="category_button" onClick={this.handleClick}>Responsabilité</button></Link></td>
                    </tr>
                    
                </thead>
            </table>
            <div class="div_order">
            <Link to={'/sortingTopics'} className="nav-link"><button name="Relations/Communication" class="category2_button" onClick={this.handleClick}>Relations/Communication</button></Link>
            </div>
        </div>
        </nav>
     
    );
    
  }
   
}


export default CategoryChoicePage;