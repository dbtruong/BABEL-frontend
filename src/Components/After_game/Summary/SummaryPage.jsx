import React, { Component } from 'react';
import '../../../Assets/Css/Summary.css';
import { Link } from 'react-router-dom';

class SummaryPage extends Component {
  render() {
    return (
        <nav class="container">
            <h4>Résumé</h4>
            <div>
                <h5>Choisissez la date de session</h5>
                <select> </select>
                <button class="button_sum">Confirmer</button>
            </div>
            <br/>
            <div>
             <table class="elem_center">
                <tbody>
                    <tr>
                        <td>
                        <h5>Choisissez une catégorie </h5>
                            <table class="cel3">
                                <thead>
                                    <tr>
                                        <td class="cel"><button class="button_settings">Déplacement</button></td>
                                        <td class="cel"><button class="button_settings">Habitation</button></td>
                                    </tr>
                                    <tr>
                                        <td class="cel"><button class="button_settings">Loisirs</button></td>
                                        <td class="cel"><button class="button_settings">Nutrition</button></td>
                                    </tr>
                                    <tr>
                                        <td class="cel"><button class="button_settings">Soins</button></td>
                                        <td class="cel"><button class="button_settings">Responsabilité</button></td>
                                    </tr>
                                 </thead>
                            </table>
                        </td>
                        <td class="cel3">
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