import React, { Component } from 'react';
import '../../../Assets/Css/Summary.css';
import { Link } from 'react-router-dom';
import SummaryAPI from '../../../API/SummaryAPI.js'

class SummaryPage extends Component {

    constructor(){
        super();
        this.state = {
            currentCategory : "",
            SessionDate : "",
            SessionDates : [],

        }
        this.api = new SummaryAPI();
        //this.state.SessionDates = this.api.loadSessions(); 
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({value: e.target.value});
    }


    
    

  render() {
    return (
        <nav class="container">
            <h4>Résumé</h4>
            <div>
                <h5>Choisissez la date de session</h5>
                <select onChange={this.handleChange}> 
                 {this.state.SessionDates}
                </select>
                <button class="button_sum">Confirmer</button>
            </div>
            <br/>
            <div>
             <table class="elem_center">
                <tbody>
                    <tr>
                        <td class="cel3">
                        <h5>Choisissez une catégorie </h5>
                        <div>
                            <table class="table_order">
                            <thead>
                                <tr>
                                    <td class="cel"><button name="Déplacement" class="button_settings" onClick={this.handleClick}>Déplacement</button></td>
                                    <td class="cel"><button name="Habitation" class="button_settings" onClick={this.handleClick}>Habitation</button></td>
                                </tr>
                                <tr>
                                    <td class="cel"><button name="Loisirs" class="button_settings" onClick={this.handleClick}>Loisirs</button></td>
                                    <td class="cel"><button name="Nutrition" class="button_settings" onClick={this.handleClick}>Nutrition</button></td>
                                </tr>
                                <tr>
                                    <td class="cel"><button name="Soins" class="button_settings" onClick={this.handleClick}>Soins</button></td>
                                    <td class="cel"><button name="Responsabilité" class="button_settings" onClick={this.handleClick}>Responsabilité</button></td>
                                </tr>
                            </thead>
                            </table>
                            <div class="div_order">
                            <button name="Relations/Communication" class="button_settings" onClick={this.handleClick}>Relations/Communication</button>
                            </div>
                        </div>
                        </td>
                        
                        <td>
                        <h5>Choisissez pour trier</h5>
                        <table>
                            <thead>
                                <tr>
                                    <td class="cel"><button class="button_settings">Aime</button></td>
                                    <td class="cel"><button class="button_settings">Aime pas</button></td>
                                </tr>
                                <tr>
                                    <td class="cel"><button class="button_settings">Besoin d'aide</button></td>
                                    <td class="cel"><button class="button_settings">Pas Besoin d'aide</button></td>
                                </tr>
                                <tr>
                                    <td class="cel"><button class="button_settings">Content</button></td>
                                    <td class="cel"><button class="button_settings">Content pas</button></td>
                                </tr>
                            </thead>
                        </table>
                        </td>
                    </tr>
                  </tbody>
                </table>
            </div>
            <br/>
            <div>
                <table class="tab_dimension">
                    <thead>
                        <tr>
                            <td class="cel4"><p>Habitudes</p></td>
                            <td class="cel4"><img src="Images/like.png" alt="logo aime" class="logo_summary"/></td>
                            <td class="cel4"><img src="Images/unlike.png" alt="logo aime pas" class="logo_summary"/></td>
                            <td class="cel4"><img src="Images/help.png" alt="logo aide" class="logo_summary"/></td>
                            <td class="cel4"><img src="Images/nohelp.png" alt="logo aide pas" class="logo_summary"/></td>
                            <td class="cel4"><img src="Images/happy.png" alt="logo content" class="logo_summary"/></td>
                            <td class="cel4"><img src="Images/unhappy.png" alt="logo pas content" class="logo_summary"/></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr></tr>
                    </tbody>
                </table>
            </div>
        </nav>
        
    );
  }
}

export default SummaryPage;