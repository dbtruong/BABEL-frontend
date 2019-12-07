import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../../Assets/Css/SettingsPage.css';

class SettingsPage extends Component {
  render() {
    return (
        <nav class="container">
            <h4>Paramètres</h4>
            <div>
                <br/>
                <h5>Choisissez l'ordre des étapes que vous voulez</h5>
                <table className="table_settings">
                    <thead>
                        <tr>
                            <td className="cel"><button className="button_settings">Aime - Aide - Content</button></td>
                            <td className="cel"><button className="button_settings">Aime - Content - Aide</button></td>
                        </tr>
                        <tr>
                            <td className="cel"><button className="button_settings">Aide - Aime - Content</button></td>
                            <td className="cel"><button className="button_settings">Aide - Content - Aime</button></td>
                        </tr>
                        <tr>
                            <td className="cel"><button className="button_settings">Content - Aide - Aime</button></td>
                            <td className="cel"><button className="button_settings">Content - Aime - Aide</button></td>
                        </tr>
                    </thead>
                </table>
            </div>
            <br/>
            <div>
            <h5>Choisissez la priorité des catégories </h5>
                <table class="table_settings">
                    <thead>
                    <tr>
                        <td className="cel"><button className="button_settings">Déplacement</button></td>
                        <td className="cel"><button className="button_settings">Habitation</button></td>
                    </tr>
                    <tr>
                        <td className="cel"><button className="button_settings">Loisirs</button></td>
                        <td className="cel"><button className="button_settings">Nutrition</button></td>
                    </tr>
                    <tr>
                        <td className="cel"><button className="button_settings">Soins</button></td>
                        <td className="cel"><button className="button_settings">Responsabilité</button></td>
                    </tr>
                    </thead>
                </table>
            </div>
            <br/>
            <div>
                <table class="table_settings">
                    <thead>
                        <tr>
                           <td className="cel2"><Link to={'/commentary'}><button className="button_settings2">Continuer dernière partie</button></Link></td>
                           <td className="cel2"><Link to={'/commentary'}><button className="button_settings2">Commencer nouvelle partie</button></Link></td>
                        </tr>
                    </thead>
                </table>
            </div>
            
        </nav>
    );
  }
}

export default SettingsPage;